import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header({ active, userEmail }) {
  return (
    <header className="top">
      <div className="brand">
        <div className="brand-mark">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M2.5 13.5c1.3 0 1.6-3.6 2.9-3.6 1.4 0 1 7.7 2.5 7.7 1.6 0 1.6-13.6 3.2-13.6 1.5 0 1.3 9.5 2.8 9.5h6.6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="11.4" cy="3.9" r="1" fill="#fff" />
          </svg>
        </div>
        <div>
          <h1>PNLE Coverage Tracker</h1>
          <p>Your review, at a glance</p>
        </div>
      </div>

      <nav className="tabs">
        <Link href="/" className={active === 'dashboard' ? 'active' : ''}>
          Dashboard
        </Link>
        <Link href="/scheduler" className={active === 'scheduler' ? 'active' : ''}>
          Scheduler
        </Link>
      </nav>

      <div className="user-pill">
        <span className="dot-live" />
        <span className="user-email">{userEmail}</span>
        <ThemeToggle />
        <form action="/auth/signout" method="post">
          <button className="signout-btn" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </header>
  );
}
