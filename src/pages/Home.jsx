import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Gamepad2, Sparkles } from 'lucide-react';
import Mascot from '../components/Mascot.jsx';
import { Card, PrimaryButton } from '../components/Card.jsx';
import { useProgress } from '../hooks/useProgress.jsx';
import { library } from '../data/library.js';

export default function Home() {
  const { progress } = useProgress();
  const completed = Object.keys(progress.completed).length;
  return (
    <div className="space-y-5">
      <section className="grid items-center gap-4 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-display text-lg font-black text-emerald-600">Hai, {progress.name}!</p>
          <h2 className="font-display text-4xl font-black leading-tight text-slate-900">Ready for a reading adventure?</h2>
          <p className="mt-2 max-w-xl font-semibold text-slate-600">Pilih tahun, baca cerita pendek, jawab kuiz, selesaikan teka silang kata dan cari objek tersembunyi.</p>
        </div>
        <div className="mx-auto"><Mascot /></div>
      </section>

      <div className="grid grid-cols-3 gap-3">
        <Card className="text-center"><BookOpen className="mx-auto text-sky-500" /><p className="mt-2 font-display text-2xl font-black">{library.length}</p><p className="text-xs font-bold text-slate-500">Readings</p></Card>
        <Card className="text-center"><Sparkles className="mx-auto text-yellow-500" /><p className="mt-2 font-display text-2xl font-black">{progress.stars}</p><p className="text-xs font-bold text-slate-500">Stars</p></Card>
        <Card className="text-center"><Award className="mx-auto text-rose-500" /><p className="mt-2 font-display text-2xl font-black">{progress.badges.length}</p><p className="text-xs font-bold text-slate-500">Badges</p></Card>
      </div>

      <Link to="/years">
        <PrimaryButton className="w-full text-lg"><Gamepad2 /> Start Reading <ArrowRight /></PrimaryButton>
      </Link>

      <div className="grid gap-3 md:grid-cols-2">
        <Card>
          <h3 className="font-display text-xl font-black">Progress Tracker</h3>
          <p className="mt-1 text-sm font-semibold text-slate-600">{completed} activities completed. Keep your streak glowing.</p>
          <div className="mt-4 h-4 rounded-full bg-slate-200">
            <div className="h-4 rounded-full bg-gradient-to-r from-yellow-300 via-emerald-400 to-sky-400" style={{ width: `${Math.min(100, (completed / 180) * 100)}%` }} />
          </div>
        </Card>
        <Card>
          <h3 className="font-display text-xl font-black">Today’s Quest</h3>
          <p className="mt-1 text-sm font-semibold text-slate-600">Complete one story and any mini game to unlock more XP and stickers.</p>
        </Card>
      </div>
    </div>
  );
}
