const STATS = [
  { value: '8', label: 'districts covered' },
  { value: '4', label: 'soil types mapped' },
  { value: '28+', label: 'crops referenced' },
]

export default function Hero() {
  return (
    <section id="top" className="max-w-[1080px] mx-auto px-6 pt-16 pb-14 md:pt-22 md:pb-18">
      <p className="animate-fadeUp font-mono text-xs uppercase tracking-[0.12em] text-moss-600 dark:text-moss-300 mb-5">
        Krishi Mitra &middot; ఆంధ్రప్రదేశ్ &middot; free &amp; open
      </p>

      <h1
        className="animate-fadeUp font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-2xl"
        style={{ animationDelay: '60ms' }}
      >
        Know your soil.
        <br />
        Choose the right crop.
      </h1>

      <p
        className="animate-fadeUp text-lg text-ink-light-soft dark:text-ink-dark-soft max-w-lg mt-5 leading-relaxed"
        style={{ animationDelay: '120ms' }}
      >
        Select your district in Andhra Pradesh to see the soil composition, the crops
        best suited to it, expected water needs, and the right sowing season — before
        you plant, not after.
      </p>

      <div
        className="animate-fadeUp flex flex-wrap items-center gap-3 mt-8"
        style={{ animationDelay: '180ms' }}
      >
        <a
          href="#tool"
          className="inline-flex items-center gap-2 bg-ink-light dark:bg-moss-300 text-paper-light dark:text-moss-700 font-medium text-[15px] px-5 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Find my district
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
        <a
          href="#how"
          className="inline-flex items-center gap-2 border border-line-light dark:border-line-dark text-ink-light dark:text-ink-dark font-medium text-[15px] px-5 py-3 rounded-full hover:border-ink-light-faint dark:hover:border-ink-dark-faint transition-colors"
        >
          How it works
        </a>
      </div>

      <div
        className="animate-fadeUp flex flex-wrap gap-x-10 gap-y-4 mt-14 pt-8 border-t border-line-light dark:border-line-dark"
        style={{ animationDelay: '240ms' }}
      >
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="font-display font-semibold text-2xl">{s.value}</div>
            <div className="text-sm text-ink-light-faint dark:text-ink-dark-faint mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
