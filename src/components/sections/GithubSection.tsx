import { motion } from "framer-motion">
import { GitBranch, GitCommit, Star, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const STATS = [
  { icon: Users, label: "Followers", value: "120+" },
  { icon: Star, label: "Stars", value: "85" },
  { icon: GitBranch, label: "Repositories", value: "32" },
  { icon: GitCommit, label: "Commits", value: "1.2k+" },
];

const REPOS = [
  { name: "serverless-cloud-storage", desc: "Cognito + S3 + Lambda storage platform", lang: "TypeScript", stars: 24 },
  { name: "url-shortener-saas", desc: "Flask + MySQL shortener with analytics", lang: "Python", stars: 18 },
  { name: "aws-playground", desc: "Experiments with AWS services and IaC", lang: "Python", stars: 12 },
  { name: "dsa-java", desc: "1100+ solved problems, organized by topic", lang: "Java", stars: 9 },
];

function Heatmap() {
  const cells = Array.from({ length: 7 * 26 });
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
      {cells.map((_, i) => {
        const level = Math.floor(Math.random() * 5);
        const bg = [
          "bg-muted/40",
          "bg-primary/20",
          "bg-primary/40",
          "bg-primary/70",
          "bg-accent",
        ][level];
        return <div key={i} className={`h-2.5 w-2.5 rounded-sm ${bg}`} />;
      })}
    </div>
  );
}
