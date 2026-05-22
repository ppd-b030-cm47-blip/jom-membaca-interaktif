import { useState } from 'react';
import { Save, UserRound } from 'lucide-react';
import { Card, PrimaryButton } from '../components/Card.jsx';
import Mascot from '../components/Mascot.jsx';
import { useProgress } from '../hooks/useProgress.jsx';

export default function Profile() {
  const { progress, setProfile } = useProgress();
  const [name, setName] = useState(progress.name);
  return (
    <div className="space-y-4">
      <Card className="text-center">
        <div className="mx-auto w-fit"><Mascot mood="win" /></div>
        <h2 className="mt-3 font-display text-3xl font-black">Student Profile</h2>
        <p className="font-bold text-slate-600">{progress.xp} XP collected</p>
      </Card>
      <Card>
        <label className="text-sm font-black uppercase text-slate-500" htmlFor="name">Display Name</label>
        <div className="mt-2 flex gap-2">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-600"><UserRound /></div>
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="min-w-0 flex-1 rounded-2xl border-0 bg-white px-4 font-display text-lg font-black shadow outline-none"
          />
        </div>
        <PrimaryButton onClick={() => setProfile({ name })} className="mt-4 w-full"><Save /> Save Profile</PrimaryButton>
      </Card>
    </div>
  );
}
