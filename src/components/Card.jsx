import { motion } from 'framer-motion';

export function Card({ children, className = '', onClick }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`glass rounded-[28px] p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function PrimaryButton({ children, className = '', ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className={`game-button inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 font-display font-black text-white transition hover:bg-emerald-600 disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
