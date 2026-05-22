import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckCircle2, Gamepad2, Puzzle, Search, Sparkles } from 'lucide-react';
import { getMaterial } from '../data/library.js';
import Illustration from '../components/Illustration.jsx';
import { Card, PrimaryButton } from '../components/Card.jsx';
import { useProgress } from '../hooks/useProgress.jsx';

export default function Reader() {
  const { id } = useParams();
  const material = getMaterial(id);
  const { awardActivity } = useProgress();
  if (!material) return <Navigate to="/years" replace />;

  return (
    <div className="space-y-4">
      <Illustration material={material} />
      <Card>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">Tahun {material.year}</span>
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-black text-sky-700">{material.languageLabel}</span>
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-black text-yellow-700">{material.duration}</span>
        </div>
        <h2 className="mt-4 font-display text-3xl font-black leading-tight">{material.title}</h2>
        <p className="mt-4 whitespace-pre-line text-lg font-semibold leading-8 text-slate-700">{material.story}</p>
        <div className="mt-5 rounded-3xl bg-emerald-50 p-4">
          <p className="text-sm font-black uppercase tracking-wide text-emerald-600">Moral Value</p>
          <p className="mt-1 font-display text-xl font-black">{material.moral}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {material.vocabulary.map((word) => <span key={word} className="rounded-full bg-white px-3 py-2 text-sm font-extrabold shadow">{word}</span>)}
        </div>
      </Card>
      <PrimaryButton onClick={() => awardActivity(material.id, 'reading')} className="w-full bg-sky-500"><CheckCircle2 /> Mark Reading Complete</PrimaryButton>
      <div className="grid gap-3 md:grid-cols-3">
        <Link to={`/quiz/${material.id}`}><PrimaryButton className="w-full"><Gamepad2 /> Quiz</PrimaryButton></Link>
        <Link to={`/crossword/${material.id}`}><PrimaryButton className="w-full bg-violet-500"><Puzzle /> Crossword</PrimaryButton></Link>
        <Link to={`/hidden/${material.id}`}><PrimaryButton className="w-full bg-rose-500"><Search /> Hidden</PrimaryButton></Link>
      </div>
      <Card className="flex items-center gap-3">
        <Sparkles className="text-yellow-500" />
        <p className="font-bold text-slate-600">Complete all three activities to collect XP, stars, stickers and new badges.</p>
      </Card>
    </div>
  );
}
