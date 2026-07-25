export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-paper-light/85 dark:bg-paper-dark/85 border-b border-line-light dark:border-line-dark">
      <div className="max-w-[1080px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-7 h-7 rounded-md bg-moss-600 dark:bg-moss-300 flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
              <path d="M12 22c0-5 3-9 8-11-1 6-3 9-8 11Z" />
              <path d="M12 22c0-6-3.5-11-9-13 1 7 3.5 11 9 13Z" />
              <path d="M12 22V9" />
            </svg>
          </span>
          <span className="font-display font-semibold text-[15px] tracking-tight">Krishi Mitra</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-light-soft dark:text-ink-dark-soft">
          <a href="#tool" className="hover:text-ink-light dark:hover:text-ink-dark transition-colors">Advisor</a>
          <a href="#how" className="hover:text-ink-light dark:hover:text-ink-dark transition-colors">How it works</a>
          <a href="#sources" className="hover:text-ink-light dark:hover:text-ink-dark transition-colors">Data sources</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-full border border-line-light dark:border-line-dark flex items-center justify-center text-ink-light-soft dark:text-ink-dark-soft hover:border-ink-light-faint dark:hover:border-ink-dark-faint transition-colors"
          >
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" />
              </svg>
            )}
          </button>
          <a
            href="#tool"
            className="hidden sm:inline-flex items-center gap-1.5 bg-moss-600 dark:bg-moss-300 text-white dark:text-moss-700 text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Open advisor
          </a>
        </div>
      </div>
    </header>
  )
}
