import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Confetti from 'react-confetti';
import { ArrowLeft, CheckCircle2, Puzzle } from 'lucide-react';
import { getMaterial } from '../data/library.js';
import { Card, PrimaryButton } from '../components/Card.jsx';
import { useProgress } from '../hooks/useProgress.jsx';

function buildRows(words) {
  return words.map((item, row) => ({
    ...item,
    row,
    cells: item.word.split(''),
  }));
}

export default function Crossword() {
  const { id } = useParams();
  const material = getMaterial(id);
  const { awardActivity } = useProgress();
  const rows = useMemo(() => (material ? buildRows(material.crossword) : []), [material]);
  const [answers, setAnswers] = useState({});
  const [complete, setComplete] = useState(false);
  if (!material) return <Navigate to="/years" replace />;

  const correctCount = rows.filter((row) => row.cells.every((letter, col) => (answers[`${row.row}-${col}`] || '').toUpperCase() === letter)).length;

  function update(row, col, value) {
    setAnswers((current) => ({ ...current, [`${row}-${col}`]: value.slice(-1).toUpperCase() }));
  }

  function check() {
    if (correctCount === rows.length) {
      awardActivity(material.id, 'crossword');
      setComplete(true);
    }
  }

  return (
    <div className="space-y-4">
      {complete && <Confetti recycle={false} numberOfPieces={180} />}
      <Card>
        <div className="flex items-center gap-3">
          <Puzzle className="text-violet-500" size={38} />
          <div>
            <h2 className="font-display text-3xl font-black">Crossword Puzzle</h2>
            <p className="font-bold text-slate-600">{correctCount}/{rows.length} words completed</p>
          </div>
        </div>
      </Card>

      <Card className="overflow-x-auto">
        <div className="grid gap-3">
          {rows.map((row) => (
            <div key={row.word} className="flex items-center gap-2">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-violet-500 text-sm font-black text-white">{row.row + 1}</span>
              <div className="flex gap-1">
                {row.cells.map((letter, col) => {
                  const value = answers[`${row.row}-${col}`] || '';
                  const good = value && value === letter;
                  return (
                    <input
                      aria-label={`Letter ${col + 1} for ${row.word}`}
                      key={`${row.word}-${col}`}
                      value={value}
                      maxLength={1}
                      onChange={(event) => update(row.row, col, event.target.value)}
                      className={`cell-input h-10 w-10 rounded-xl border-0 text-center font-display text-xl font-black shadow outline-none md:h-12 md:w-12 ${
                        good ? 'bg-emerald-300 text-white' : 'bg-white text-slate-800'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="font-display text-xl font-black">Clues</h3>
        <div className="mt-3 grid gap-2">
          {rows.map((row) => <p key={row.word} className="font-semibold text-slate-700">{row.row + 1}. {row.clue}</p>)}
        </div>
      </Card>

      {complete ? (
        <Card className="text-center">
          <CheckCircle2 className="mx-auto text-emerald-500" size={54} />
          <h3 className="mt-2 font-display text-3xl font-black">All Words Found!</h3>
          <p className="mt-1 font-bold text-slate-600">+45 XP · +2 Stars</p>
          <Link to={`/read/${material.id}`}><PrimaryButton className="mt-4"><ArrowLeft /> Back to Story</PrimaryButton></Link>
        </Card>
      ) : (
        <PrimaryButton onClick={check} className="w-full bg-violet-500">Check Answers</PrimaryButton>
      )}
    </div>
  );
}
