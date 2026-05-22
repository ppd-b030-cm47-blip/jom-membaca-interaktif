import { motion } from 'framer-motion';

export default function Mascot({ mood = 'happy', size = 'lg' }) {
  const dimensions = size === 'sm' ? 'h-16 w-16' : 'h-28 w-28';
  return (
    <motion.div
      className={`${dimensions} relative rounded-[34%] bg-gradient-to-br from-emerald-300 via-lime-300 to-yellow-300 shadow-soft`}
      animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 3.2, repeat: Infinity }}
      aria-label="Animated reading mascot"
    >
      <div className="absolute left-[18%] top-[28%] h-4 w-4 rounded-full bg-slate-900" />
      <div className="absolute right-[18%] top-[28%] h-4 w-4 rounded-full bg-slate-900" />
      <div className="absolute left-1/2 top-[48%] h-5 w-10 -translate-x-1/2 rounded-b-full border-b-4 border-slate-900" />
      <div className="absolute -bottom-2 left-1/2 h-8 w-16 -translate-x-1/2 rounded-2xl bg-white px-2 py-1 text-center text-xs font-black text-emerald-600 shadow">
        {mood === 'win' ? 'WOW' : 'ABC'}
      </div>
    </motion.div>
  );
}
