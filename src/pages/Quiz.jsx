import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Clock, Trophy, XCircle } from 'lucide-react';
import { getMaterial } from '../data/library.js';
import { Card, PrimaryButton } from '../components/Card.jsx';
import { useProgress } from '../hooks/useProgress.jsx';

const badges = ['Hebat!', 'Bijak!', 'Smart Reader', 'Quiz Master', 'Excellent Explorer'];

export default function Quiz() {
  const { id } = useParams();
  const material = getMaterial(id);
  const { awardActivity } = useProgress();
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [combo, setCombo] = useState(0);
  const [done, setDone] = useState(false);
  const [time, setTime] = useState(90);

  useEffect(() => {
    if (done) return undefined;
    const timer = setInterval(() => setTime((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(timer);
  }, [done]);

  if (!material) return <Navigate to="/years" replace />;
  const q = material.quiz[index];
  const isCorrect = selected === q.answer;

  function choose(option) {
    if (selected) return;
    setSelected(option);
    const correct = option === q.answer;
    setScore((s) => s + (correct ? 1 : 0));
    setCombo((c) => (correct ? c + 1 : 0));
  }

  function next() {
    if (index === material.quiz.length - 1) {
      awardActivity(material.id, 'quiz', score);
      setDone(true);
      return;
    }
    setIndex(index + 1);
    setSelected(null);
  }

  if (done || time === 0) {
    const final = time === 0 && !done ? score : score;
    return (
      <div className="space-y-4 text-center">
        {final >= 8 && <Confetti recycle={false} numberOfPieces={240} />}
        <Card>
          <Trophy className="mx-auto text-yellow-500" size={64} />
          <h2 className="mt-3 font-display text-4xl font-black">Quiz Complete!</h2>
          <p className="mt-2 text-2xl font-black text-emerald-600">{final}/10</p>
          <p className="mt-2 font-bold text-slate-600">{badges[Math.min(4, Math.floor(final / 2))]} · +60 XP · +2 Stars</p>
        </Card>
        <Link to={`/read/${material.id}`}><PrimaryButton><ArrowLeft /> Back to Story</PrimaryButton></Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-center justify-between gap-3">
          <div className="font-black text-slate-600">Question {index + 1}/10</div>
          <div className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-2 font-black text-rose-500"><Clock size={17} /> {time}s</div>
        </div>
        <div className="mt-3 h-3 rounded-full bg-slate-200">
          <motion.div className="h-3 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" animate={{ width: `${((index + 1) / 10) * 100}%` }} />
        </div>
        <h2 className="mt-5 font-display text-2xl font-black leading-tight">{q.q}</h2>
      </Card>
      <div className="grid gap-3">
        {q.options.map((option) => {
          const chosen = selected === option;
          const correct = option === q.answer;
          return (
            <motion.button
              key={option}
              animate={chosen && !correct ? { x: [0, -8, 8, -5, 5, 0] } : {}}
              onClick={() => choose(option)}
              className={`rounded-3xl p-4 text-left font-display text-lg font-black shadow-soft transition ${
                selected && correct ? 'bg-emerald-400 text-white ring-4 ring-emerald-200' : chosen ? 'bg-rose-400 text-white' : 'bg-white/85 text-slate-800'
              }`}
            >
              {option}
            </motion.button>
          );
        })}
      </div>
      {selected && (
        <Card className={isCorrect ? 'bg-emerald-50/80' : 'bg-rose-50/80'}>
          <div className="flex gap-3">
            {isCorrect ? <CheckCircle2 className="text-emerald-500" /> : <XCircle className="text-rose-500" />}
            <div>
              <p className="font-display text-lg font-black">{isCorrect ? `Correct! Combo x${combo}` : 'Try the next one.'}</p>
              <p className="font-semibold text-slate-600">{q.explanation}</p>
            </div>
          </div>
          <PrimaryButton onClick={next} className="mt-4 w-full">Continue</PrimaryButton>
        </Card>
      )}
    </div>
  );
}
