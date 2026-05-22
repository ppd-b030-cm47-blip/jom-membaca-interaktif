import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Confetti from 'react-confetti';
import { ArrowLeft, Clock, Lightbulb, Search } from 'lucide-react';
import { getMaterial } from '../data/library.js';
import { Card, PrimaryButton } from '../components/Card.jsx';
import { useProgress } from '../hooks/useProgress.jsx';

export default function HiddenObject() {
  const { id } = useParams();
  const material = getMaterial(id);
  const { awardActivity } = useProgress();
  const canvasRef = useRef(null);
  const [found, setFound] = useState([]);
  const [hint, setHint] = useState(null);
  const [time, setTime] = useState(120);
  const complete = material && found.length === material.hiddenObjects.length;

  useEffect(() => {
    if (complete) awardActivity(material.id, 'hidden');
  }, [awardActivity, complete, material]);

  useEffect(() => {
    if (!material || complete) return undefined;
    const timer = setInterval(() => setTime((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(timer);
  }, [material, complete]);

  useEffect(() => {
    if (!material) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;
    const [a, b, c] = material.palette;
    const sky = ctx.createLinearGradient(0, 0, w, h);
    sky.addColorStop(0, a);
    sky.addColorStop(1, b);
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255,255,255,0.28)';
    for (let i = 0; i < 9; i += 1) {
      ctx.beginPath();
      ctx.arc((i * 71) % w, 34 + ((i * 37) % (h - 80)), 28 + (i % 3) * 12, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = 'rgba(255,255,255,0.32)';
    ctx.fillRect(0, h * 0.72, w, h * 0.28);
    material.hiddenObjects.forEach((object, index) => {
      const x = (object.x / 100) * w;
      const y = (object.y / 100) * h;
      const r = object.size / 2;
      const isFound = found.includes(object.id);
      const isHint = hint === object.id;
      ctx.save();
      ctx.globalAlpha = isFound ? 0.95 : 0.72;
      ctx.fillStyle = isFound ? '#22c55e' : c;
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(x - r, y - r, object.size * 1.35, object.size, 12);
      } else {
        ctx.rect(x - r, y - r, object.size * 1.35, object.size);
      }
      ctx.fill();
      ctx.strokeStyle = isHint ? '#ffffff' : 'rgba(255,255,255,0.75)';
      ctx.lineWidth = isHint ? 5 : 2;
      ctx.stroke();
      ctx.fillStyle = '#102033';
      ctx.font = '800 11px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(object.name.slice(0, 12), x + r * 0.35, y + 4);
      if (isFound) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 22px Inter';
        ctx.fillText('✓', x + r * 0.35, y - 12);
      }
      ctx.restore();
      ctx.fillStyle = 'rgba(255,255,255,0.32)';
      ctx.beginPath();
      ctx.arc((x + index * 13) % w, (y + 45) % h, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [material, found, hint]);

  if (!material) return <Navigate to="/years" replace />;

  function handleCanvas(event) {
    if (complete) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const hit = material.hiddenObjects.find((object) => {
      if (found.includes(object.id)) return false;
      const ox = (object.x / 100) * rect.width;
      const oy = (object.y / 100) * rect.height;
      return Math.abs(x - ox) < object.size && Math.abs(y - oy) < object.size;
    });
    if (hit) setFound((current) => [...current, hit.id]);
  }

  function showHint() {
    const missing = material.hiddenObjects.find((object) => !found.includes(object.id));
    setHint(missing?.id || null);
    setTimeout(() => setHint(null), 1500);
  }

  return (
    <div className="space-y-4">
      {complete && <Confetti recycle={false} numberOfPieces={220} />}
      <Card>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Search className="text-rose-500" size={38} />
            <div>
              <h2 className="font-display text-3xl font-black">Hidden Object</h2>
              <p className="font-bold text-slate-600">{found.length}/{material.hiddenObjects.length} found</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-2 font-black text-rose-500"><Clock size={17} /> {time}s</span>
        </div>
      </Card>

      <canvas
        ref={canvasRef}
        onClick={handleCanvas}
        className="h-[420px] w-full touch-manipulation rounded-[30px] bg-white shadow-soft"
      />

      <div className="flex gap-3">
        <PrimaryButton onClick={showHint} className="flex-1 bg-yellow-500"><Lightbulb /> Hint</PrimaryButton>
        <Link to={`/read/${material.id}`} className="flex-1"><PrimaryButton className="w-full bg-slate-700"><ArrowLeft /> Story</PrimaryButton></Link>
      </div>

      <Card>
        <p className="font-display text-lg font-black">Find these:</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {material.hiddenObjects.map((object) => (
            <span key={object.id} className={`rounded-full px-3 py-2 text-sm font-black ${found.includes(object.id) ? 'bg-emerald-400 text-white' : 'bg-white text-slate-600'}`}>
              {object.name}
            </span>
          ))}
        </div>
        {complete && <p className="mt-3 font-display text-2xl font-black text-emerald-600">Celebration unlocked! +50 XP · +2 Stars</p>}
      </Card>
    </div>
  );
}
