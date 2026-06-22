import { useQuery } from "@tanstack/react-query";
import { fetchGitHubDashboard, GITHUB_USERNAME } from "@/lib/github";

export function useGitHubDashboard() {
  return useQuery({
    queryKey: ["github-dashboard", GITHUB_USERNAME],
    queryFn: fetchGitHubDashboard,
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
}
