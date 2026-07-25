export default function Footer() {
  return (
    <footer id="sources" className="border-t border-line-light dark:border-line-dark mt-8">
      <div className="max-w-[1080px] mx-auto px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3 mb-10">
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-md bg-moss-600 dark:bg-moss-300 flex items-center justify-center flex-shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M12 22c0-5 3-9 8-11-1 6-3 9-8 11Z" />
                  <path d="M12 22c0-6-3.5-11-9-13 1 7 3.5 11 9 13Z" />
                </svg>
              </span>
              <span className="font-display font-semibold text-sm">Krishi Mitra</span>
            </div>
            <p className="text-[13px] text-ink-light-faint dark:text-ink-dark-faint leading-relaxed">
              A free, open crop and soil reference for Andhra Pradesh farmers. Not affiliated
              with any government department.
            </p>
          </div>

          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-ink-light-faint dark:text-ink-dark-faint mb-3">
              Data &amp; sourcing
            </div>
            <ul className="text-[13.5px] text-ink-light-soft dark:text-ink-dark-soft space-y-2">
              <li>Soil composition — state agriculture department district records</li>
              <li>Water figures — seasonal reference ranges, ICAR-style estimates</li>
              <li>Coverage — 8 of 26 districts, expanding over time</li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-ink-light-faint dark:text-ink-dark-faint mb-3">
              Before you plant
            </div>
            <p className="text-[13.5px] text-ink-light-soft dark:text-ink-dark-soft leading-relaxed">
              Always confirm irrigation plans with your local Krishi Vigyan Kendra or
              agriculture officer. This tool is a starting reference, not a substitute
              for local expertise.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-line-light dark:border-line-dark text-xs text-ink-light-faint dark:text-ink-dark-faint">
          Built for farmers in Andhra Pradesh.
        </div>
      </div>
    </footer>
  )
}
