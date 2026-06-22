import { format, startOfDay, subDays } from "date-fns";

export const GITHUB_USERNAME = "SANTHOSH-VJ";

const GITHUB_API_BASE = "https://api.github.com";

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  blog: string | null;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
}

export interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
}

export interface ActivityBucket {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubDashboardData {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  activity: ActivityBucket[];
}

export interface ContributionBoard {
  weeks: ActivityBucket[][];
  monthLabels: Array<{ label: string; weekIndex: number }>;
  weekdayLabels: Array<{ label: string; dayIndex: number }>;
  totalContributions: number;
  activeDays: number;
  longestStreak: number;
}

async function fetchGitHubJson<T>(path: string): Promise<T> {
  const response = await fetch(`${GITHUB_API_BASE}${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function fetchGitHubProfile() {
  return fetchGitHubJson<GitHubProfile>(`/users/${GITHUB_USERNAME}`);
}

export async function fetchGitHubRepos() {
  const repos = await fetchGitHubJson<GitHubRepo[]>(
    `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&direction=desc&type=owner`,
  );

  return repos
    .map((repo) => ({
      ...repo,
      topics: repo.topics ?? [],
    }))
    .sort((left, right) => {
      return new Date(right.updated_at).getTime() - new Date(left.updated_at).getTime();
    });
}

export async function fetchGitHubActivity() {
  return fetchGitHubJson<GitHubEvent[]>(`/users/${GITHUB_USERNAME}/events/public?per_page=100`);
}

export function selectFeaturedRepos(repos: GitHubRepo[], limit = 6) {
  return repos.filter((repo) => !repo.fork && !repo.archived).slice(0, limit);
}

export function buildActivityBuckets(events: GitHubEvent[], days = 371): ActivityBucket[] {
  const countsByDate = new Map<string, number>();

  events.forEach((event) => {
    const dateKey = event.created_at.slice(0, 10);
    countsByDate.set(dateKey, (countsByDate.get(dateKey) ?? 0) + 1);
  });

  const today = startOfDay(new Date());

  return Array.from({ length: days }, (_, index) => {
    const offset = days - index - 1;
    const date = subDays(today, offset);
    const dateKey = format(date, "yyyy-MM-dd");
    const count = countsByDate.get(dateKey) ?? 0;

    let level: 0 | 1 | 2 | 3 | 4 = 0;
    if (count === 1) level = 1;
    else if (count === 2) level = 2;
    else if (count === 3) level = 3;
    else if (count >= 4) level = 4;

    return {
      date: dateKey,
      count,
      level,
    };
  });
}

export function buildContributionBoard(activity: ActivityBucket[]): ContributionBoard {
  const weeks: ActivityBucket[][] = [];
  const monthLabels: Array<{ label: string; weekIndex: number }> = [];
  const weekdayLabels = [
    { label: "", dayIndex: 0 },
    { label: "Mon", dayIndex: 1 },
    { label: "Wed", dayIndex: 3 },
    { label: "Fri", dayIndex: 5 },
  ];

  activity.forEach((bucket, index) => {
    const weekIndex = Math.floor(index / 7);
    const dayIndex = index % 7;

    if (!weeks[weekIndex]) {
      weeks[weekIndex] = [];
    }

    weeks[weekIndex].push(bucket);

    const date = new Date(`${bucket.date}T00:00:00`);
    const isFirstWeekOfMonth =
      dayIndex === 0 &&
      (!activity[index - 7] ||
        new Date(`${activity[index - 7].date}T00:00:00`).getMonth() !== date.getMonth());

    if (isFirstWeekOfMonth) {
      monthLabels.push({
        label: format(date, "MMM"),
        weekIndex,
      });
    }
  });

  const totalContributions = activity.reduce((sum, bucket) => sum + bucket.count, 0);
  const activeDays = activity.filter((bucket) => bucket.count > 0).length;

  let longestStreak = 0;
  let currentStreak = 0;
  activity.forEach((bucket) => {
    if (bucket.count > 0) {
      currentStreak += 1;
      longestStreak = Math.max(longestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  });

  return {
    weeks,
    monthLabels,
    weekdayLabels,
    totalContributions,
    activeDays,
    longestStreak,
  };
}

export async function fetchGitHubDashboard(): Promise<GitHubDashboardData> {
  const [profile, repos, activity] = await Promise.all([
    fetchGitHubProfile(),
    fetchGitHubRepos(),
    fetchGitHubActivity(),
  ]);

  return {
    profile,
    repos,
    activity: buildActivityBuckets(activity),
  };
}
