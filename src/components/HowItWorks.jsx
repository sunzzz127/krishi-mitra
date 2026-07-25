const STEPS = [
  {
    n: '01',
    title: 'Pick your district',
    body: 'Choose from districts grouped into three farming zones across Andhra Pradesh.',
  },
  {
    n: '02',
    title: 'See your soil',
    body: 'View the actual soil mix for that district — red, black, alluvial, or laterite.',
  },
  {
    n: '03',
    title: 'Match your crop',
    body: 'Get crops suited to that soil, with water need, yield expectations, and sowing season.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="max-w-[1080px] mx-auto px-6 py-16 md:py-20 border-t border-line-light dark:border-line-dark">
      <div className="max-w-md mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-moss-600 dark:text-moss-300 mb-3">
          How it works
        </p>
        <h2 className="font-display font-bold text-2xl md:text-3xl">
          Three steps, no login required
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.n}>
            <div className="font-mono text-sm text-ink-light-faint dark:text-ink-dark-faint mb-3">{s.n}</div>
            <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-[14.5px] text-ink-light-soft dark:text-ink-dark-soft leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
