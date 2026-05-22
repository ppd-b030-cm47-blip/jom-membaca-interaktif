import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Mascot from '../components/Mascot.jsx';

export default function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const id = setTimeout(() => navigate('/home'), 1800);
    return () => clearTimeout(id);
  }, [navigate]);

  return (
    <div className="app-bg grid min-h-screen place-items-center px-6 text-center">
      <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center gap-6">
        <Mascot />
        <div>
          <h1 className="font-display text-5xl font-black leading-tight text-emerald-600">Jom Membaca Interaktif</h1>
          <p className="mt-3 text-lg font-bold text-slate-600">Baca. Main. Menang Bintang.</p>
        </div>
        <div className="h-3 w-48 overflow-hidden rounded-full bg-white/80">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5 }} />
        </div>
      </motion.div>
    </div>
  );
}
