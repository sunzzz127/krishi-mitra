import { useState } from 'react'
import { ZONES, DISTRICTS, SOIL_LABELS, SOIL_COLORS } from '../data/districts'

export default function DistrictSelector({ selectedKey, onSelect }) {
  const [activeZone, setActiveZone] = useState('all')

  const visibleZones = activeZone === 'all' ? ZONES : ZONES.filter((z) => z.key === activeZone)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-7">
        <button
          onClick={() => setActiveZone('all')}
          className={`text-sm font-medium px-3.5 py-1.5 rounded-full border transition-colors ${
            activeZone === 'all'
              ? 'bg-ink-light dark:bg-moss-300 text-paper-light dark:text-moss-700 border-transparent'
              : 'border-line-light dark:border-line-dark text-ink-light-soft dark:text-ink-dark-soft hover:border-ink-light-faint dark:hover:border-ink-dark-faint'
          }`}
        >
          All zones
        </button>
        {ZONES.map((zone) => (
          <button
            key={zone.key}
            onClick={() => setActiveZone(zone.key)}
            className={`flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-full border transition-colors ${
              activeZone === zone.key
                ? 'bg-ink-light dark:bg-moss-300 text-paper-light dark:text-moss-700 border-transparent'
                : 'border-line-light dark:border-line-dark text-ink-light-soft dark:text-ink-dark-soft hover:border-ink-light-faint dark:hover:border-ink-dark-faint'
          }`}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: zone.color }} />
            {zone.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-9">
        {visibleZones.map((zone) => (
          <div key={zone.key}>
            {activeZone === 'all' && (
              <div className="flex items-center gap-2 mb-3.5 text-xs font-mono uppercase tracking-wide text-ink-light-faint dark:text-ink-dark-faint">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: zone.color }} />
                {zone.name}
              </div>
            )}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {zone.districts.map((key) => {
                const d = DISTRICTS[key]
                const topSoil = d.soilMix[0]
                const isActive = selectedKey === key
                return (
                  <button
                    key={key}
                    onClick={() => onSelect(key)}
                    aria-pressed={isActive}
                    className={`group text-left rounded-xl px-4 py-3.5 transition-all ${
                      isActive
                        ? 'bg-surface-light dark:bg-surface-dark-2 border-2 border-ink-light dark:border-moss-300 shadow-sm'
                        : 'bg-surface-light-2 dark:bg-surface-dark border border-line-light dark:border-line-dark hover:border-ink-light-faint dark:hover:border-ink-dark-faint hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: SOIL_COLORS[topSoil[0]] }}
                      />
                      <span className="font-semibold text-[14.5px] leading-tight">{d.name}</span>
                    </div>
                    <span className="text-xs text-ink-light-faint dark:text-ink-dark-faint">
                      {SOIL_LABELS[topSoil[0]]} &middot; {topSoil[1]}%
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
