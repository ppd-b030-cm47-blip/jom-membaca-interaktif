import {
  Atom,
  BadgeCheck,
  BookOpen,
  Bot,
  Cat,
  HeartHandshake,
  Palette,
  ShieldCheck,
  Sparkles,
  Trees,
  UsersRound,
} from 'lucide-react';

const iconMap = {
  friendship: UsersRound,
  honesty: BadgeCheck,
  animals: Cat,
  science: Atom,
  technology: Bot,
  environment: Trees,
  family: HeartHandshake,
  culture: Palette,
  safety: ShieldCheck,
  creativity: Sparkles,
};

export default function Illustration({ material, compact = false }) {
  const Icon = iconMap[material.theme] || BookOpen;
  const [a, b, c] = material.palette;
  return (
    <div className={`relative overflow-hidden rounded-[28px] ${compact ? 'h-36' : 'h-56'} shadow-soft`} style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}>
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/25" />
      <div className="absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-white/20" />
      <div className="absolute inset-x-6 bottom-5 h-16 rounded-[50%] bg-white/25" />
      <div className="absolute left-6 top-6 grid h-20 w-20 place-items-center rounded-[26px] bg-white/85 text-slate-800 shadow-soft">
        <Icon size={42} strokeWidth={2.4} />
      </div>
      {material.illustration.objects.slice(0, 5).map((object, index) => (
        <div
          key={object}
          className="absolute rounded-2xl bg-white/80 px-3 py-2 text-xs font-black text-slate-700 shadow"
          style={{ left: `${12 + index * 15}%`, bottom: `${14 + (index % 2) * 18}%`, borderBottom: `5px solid ${c}` }}
        >
          {object}
        </div>
      ))}
    </div>
  );
}
