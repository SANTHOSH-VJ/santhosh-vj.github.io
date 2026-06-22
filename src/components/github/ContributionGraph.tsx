import { motion } from "framer-motion";
import { buildContributionBoard, type ActivityBucket } from "@/lib/github";

interface Props {
  activity: ActivityBucket[];
}

const LEVELS = ["bg-[#161b22]", "bg-[#0e4429]", "bg-[#006d32]", "bg-[#26a641]", "bg-[#39d353]"];

export function ContributionGraph({ activity }: Props) {
  const board = buildContributionBoard(activity);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Contribution graph
          </p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">
            Activity over the last year
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {board.totalContributions} contributions in the last year · {board.longestStreak} day
            longest streak · {board.activeDays} active days
          </p>
        </div>
        <a
          href="https://github.com/SANTHOSH-VJ"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View on GitHub ↗
        </a>
      </div>

      <div className="mt-6 rounded-3xl border border-border/70 bg-[#0d1117] p-4">
        <div className="grid grid-cols-[2.5rem_1fr] gap-3">
          <div className="h-5" />
          <div className="mb-2 grid grid-cols-[repeat(53,minmax(0,1fr))] gap-1 text-xs text-muted-foreground">
            {board.monthLabels.map((month) => (
              <span
                key={`${month.label}-${month.weekIndex}`}
                style={{ gridColumnStart: month.weekIndex + 1 }}
              >
                {month.label}
              </span>
            ))}
          </div>

          <div className="grid grid-rows-7 gap-1 text-xs text-muted-foreground">
            {board.weekdayLabels.map((label) => (
              <span key={label.dayIndex} className="h-3.5 leading-none">
                {label.label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-1">
            {board.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-1">
                {week.map((bucket) => (
                  <motion.div
                    key={bucket.date}
                    title={`${bucket.date}: ${bucket.count} public events`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: weekIndex * 0.01 }}
                    className={`aspect-square w-full rounded-[3px] ring-1 ring-white/5 ${LEVELS[bucket.level]}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span className="mr-2">Less</span>
        {LEVELS.map((level, index) => (
          <span key={index} className={`h-3.5 w-3.5 rounded-[3px] ring-1 ring-white/5 ${level}`} />
        ))}
        <span className="ml-2">More</span>
      </div>
    </motion.section>
  );
}
