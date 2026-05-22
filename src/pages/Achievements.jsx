import { Award, LockKeyhole } from 'lucide-react';
import { Card } from '../components/Card.jsx';
import { useProgress } from '../hooks/useProgress.jsx';

const allBadges = ['Pembaca Hebat', 'Juara Kuiz', 'Pakar Bahasa', 'Master Explorer', 'Reading Champion', 'Super Student'];
const allStickers = ['Bintang Ceria', 'Buku Ajaib', 'Trophy Kilat', 'Pensel Emas'];

export default function Achievements() {
  const { progress } = useProgress();
  return (
    <div className="space-y-4">
      <h2 className="font-display text-3xl font-black">Achievement Gallery</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {allBadges.map((badge) => {
          const unlocked = progress.badges.includes(badge);
          return (
            <Card key={badge} className={unlocked ? 'bg-yellow-50/80' : 'bg-white/55'}>
              {unlocked ? <Award className="text-yellow-500" size={42} /> : <LockKeyhole className="text-slate-400" size={42} />}
              <h3 className="mt-3 font-display text-2xl font-black">{badge}</h3>
              <p className="font-bold text-slate-600">{unlocked ? 'Unlocked and shining.' : 'Keep reading to unlock.'}</p>
            </Card>
          );
        })}
      </div>
      <Card>
        <h3 className="font-display text-2xl font-black">Sticker Rewards</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {allStickers.map((sticker) => <span key={sticker} className={`rounded-full px-4 py-3 font-black ${progress.stickers.includes(sticker) ? 'bg-emerald-400 text-white' : 'bg-white text-slate-400'}`}>{sticker}</span>)}
        </div>
      </Card>
    </div>
  );
}
