import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, Home, Settings, UserRound } from 'lucide-react';
import { useProgress } from '../hooks/useProgress.jsx';
import { levelFromXp, xpForNextLevel } from '../utils/progress.js';

const nav = [
  { to: '/home', icon: Home, label: 'Home' },
  { to: '/years', icon: BookOpen, label: 'Read' },
  { to: '/rewards', icon: Award, label: 'Rewards' },
  { to: '/profile', icon: UserRound, label: 'Profile' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export default function Layout() {
  const location = useLocation();
  const { progress } = useProgress();
  const xp = xpForNextLevel(progress.xp);

  return (
    <div className="app-bg min-h-screen pb-[calc(84px+var(--safe-bottom))] text-slate-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-3 w-3 rounded-full bg-white/70 shadow-soft"
            style={{ left: `${(i * 19) % 96}%`, top: `${8 + ((i * 13) % 82)}%` }}
            animate={{ y: [0, -14, 0], scale: [1, 1.25, 1] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <header className="sticky top-0 z-30 px-4 pt-3">
        <div className="glass mx-auto flex max-w-5xl items-center gap-3 rounded-[28px] px-4 py-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-400 text-2xl shadow-button">★</div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-lg font-black">Jom Membaca</p>
            <div className="mt-1 h-2 rounded-full bg-slate-200">
              <div className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" style={{ width: `${(xp.current / xp.total) * 100}%` }} />
            </div>
          </div>
          <div className="rounded-2xl bg-white/80 px-3 py-2 text-center">
            <p className="text-[11px] font-bold text-slate-500">Level</p>
            <p className="font-display text-xl font-black text-emerald-600">{levelFromXp(progress.xp)}</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[calc(10px+var(--safe-bottom))]">
        <div className="glass mx-auto grid max-w-md grid-cols-5 gap-1 rounded-[28px] p-2">
          {nav.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex min-h-14 flex-col items-center justify-center rounded-2xl text-[11px] font-extrabold transition ${
                  isActive ? 'bg-emerald-400 text-white shadow-button' : 'text-slate-500'
                }`
              }
            >
              <Icon size={21} strokeWidth={2.6} />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
