import { DISTRICTS, SOIL_LABELS, SOIL_COLORS } from '../data/districts'

const CROP_ICONS = {
  default: (
    <path d="M12 22c0-5 3-9 8-11-1 6-3 9-8 11ZM12 22c0-6-3.5-11-9-13 1 7 3.5 11 9 13Z" />
  ),
  fruit: <circle cx="12" cy="14" r="7" />,
}

function CropIcon({ name }) {
  const isFruit = /mango|orange|banana|cashew/i.test(name)
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {isFruit ? CROP_ICONS.fruit : CROP_ICONS.default}
    </svg>
  )
}

export default function CropDetail({ districtKey }) {
  if (!districtKey) {
    return (
      <div className="text-center py-16 px-4 text-ink-light-faint dark:text-ink-dark-faint text-sm border-2 border-dashed border-line-light dark:border-line-dark rounded-2xl">
        Select a district above to see recommendations.
      </div>
    )
  }

  const d = DISTRICTS[districtKey]

  return (
    <div
      key={districtKey}
      className="animate-fadeUp bg-surface-light dark:bg-surface-dark-2 border border-line-light dark:border-line-dark rounded-2xl p-6 md:p-8"
    >
      <div className="flex items-start justify-between flex-wrap gap-3 mb-6">
        <div>
          <h2 className="font-display font-bold text-2xl">{d.name}</h2>
          <div className="text-sm text-ink-light-faint dark:text-ink-dark-faint mt-0.5">{d.zone} zone</div>
        </div>
        <div className="font-mono text-xs px-2.5 py-1 rounded-full bg-moss-50 text-moss-700 dark:bg-moss-700/25 dark:text-moss-100">
          {d.crops.length} crops matched
        </div>
      </div>

      <div className="mb-8">
        <div className="text-xs font-medium uppercase tracking-wide text-ink-light-faint dark:text-ink-dark-faint mb-2.5">
          Soil composition
        </div>
        <div className="flex h-3 rounded-full overflow-hidden bg-line-light dark:bg-line-dark mb-3">
          {d.soilMix.map(([type, pct]) => (
            <span
              key={type}
              className="soil-bar-fill h-full origin-left"
              style={{ width: `${pct}%`, backgroundColor: SOIL_COLORS[type] }}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {d.soilMix.map(([type, pct]) => (
            <div key={type} className="flex items-center gap-1.5 text-[13px] text-ink-light-soft dark:text-ink-dark-soft">
              <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: SOIL_COLORS[type] }} />
              {SOIL_LABELS[type]}
              <span className="font-mono text-ink-light-faint dark:text-ink-dark-faint">{pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs font-medium uppercase tracking-wide text-ink-light-faint dark:text-ink-dark-faint mb-3">
        Recommended crops
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {d.crops.map((c) => (
          <div
            key={c.name}
            className="border border-line-light dark:border-line-dark rounded-xl px-4 py-4 bg-surface-light-2 dark:bg-surface-dark hover:border-ink-light-faint dark:hover:border-ink-dark-faint transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-moss-50 dark:bg-moss-700/25 text-moss-600 dark:text-moss-300 flex items-center justify-center flex-shrink-0">
                <CropIcon name={c.name} />
              </span>
              <span className="font-semibold text-[15px]">{c.name}</span>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-1.5 text-ink-light-faint dark:text-ink-dark-faint">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M12 2.5c3.5 4.5 6 8 6 11.5a6 6 0 1 1-12 0c0-3.5 2.5-7 6-11.5Z" />
                  </svg>
                  Water need
                </span>
                <span className="font-mono text-xs">{c.water}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-1.5 text-ink-light-faint dark:text-ink-dark-faint">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <rect x="3" y="4.5" width="18" height="16" rx="2" />
                    <path d="M3 9.5h18M8 2.5v3M16 2.5v3" />
                  </svg>
                  Season
                </span>
                <span className="font-mono text-xs">{c.season}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-ink-light-faint dark:text-ink-dark-faint">Per acre</span>
                <span className="font-mono text-xs">{c.perAcre}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 pt-5 border-t border-line-light dark:border-line-dark flex gap-2.5 text-xs text-ink-light-faint dark:text-ink-dark-faint leading-relaxed">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v5M12 16h.01" />
        </svg>
        <p>
          Water figures are seasonal reference ranges, not site-specific irrigation schedules —
          actual need shifts with rainfall, variety, and soil moisture. Confirm with your local
          Krishi Vigyan Kendra or agriculture officer before planning irrigation.
        </p>
      </div>
    </div>
  )
}
