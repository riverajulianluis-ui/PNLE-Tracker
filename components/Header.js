import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header({ active, userEmail }) {
  return (
    <header className="top">
      <div className="brand">
        <div className="brand-mark">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M3 12h4l2-7 4 14 2-7h6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
