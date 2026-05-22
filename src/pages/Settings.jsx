import { RotateCcw, Volume2, Zap } from 'lucide-react';
import { Card, PrimaryButton } from '../components/Card.jsx';
import { useProgress } from '../hooks/useProgress.jsx';

export default function Settings() {
  const { progress, setSettings, reset } = useProgress();
  return (
    <div className="space-y-4">
      <h2 className="font-display text-3xl font-black">Settings</h2>
      <Card>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Volume2 className="text-emerald-500" />
            <div><p className="font-display text-xl font-black">Sound Effects</p><p className="text-sm font-bold text-slate-600">Playful reward sounds toggle.</p></div>
          </div>
          <button onClick={() => setSettings({ sound: !progress.settings.sound })} className={`h-9 w-16 rounded-full p-1 transition ${progress.settings.sound ? 'bg-emerald-400' : 'bg-slate-300'}`}>
            <span className={`block h-7 w-7 rounded-full bg-white shadow transition ${progress.settings.sound ? 'translate-x-7' : ''}`} />
          </button>
        </div>
      </Card>
      <Card>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Zap className="text-yellow-500" />
            <div><p className="font-display text-xl font-black">Motion</p><p className="text-sm font-bold text-slate-600">Animated cards and reward effects.</p></div>
          </div>
          <button onClick={() => setSettings({ motion: !progress.settings.motion })} className={`h-9 w-16 rounded-full p-1 transition ${progress.settings.motion ? 'bg-emerald-400' : 'bg-slate-300'}`}>
            <span className={`block h-7 w-7 rounded-full bg-white shadow transition ${progress.settings.motion ? 'translate-x-7' : ''}`} />
          </button>
        </div>
      </Card>
      <PrimaryButton onClick={reset} className="w-full bg-rose-500"><RotateCcw /> Reset Local Progress</PrimaryButton>
    </div>
  );
}
