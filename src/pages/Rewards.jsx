import { Link } from 'react-router-dom';
import { Award, GalleryHorizontal, Sparkles, Star, Trophy } from 'lucide-react';
import { Card, PrimaryButton } from '../components/Card.jsx';
import { useProgress } from '../hooks/useProgress.jsx';
import { levelFromXp, xpForNextLevel } from '../utils/progress.js';

export default function Rewards() {
  const { progress } = useProgress();
  const xp = xpForNextLevel(progress.xp);
  return (
    <div className="space-y-4">
      <Card className="text-center">
        <Trophy className="mx-auto text-yellow-500" size={64} />
        <h2 className="mt-2 font-display text-4xl font-black">Reward Dashboard</h2>
        <p className="font-bold text-slate-600">Level {levelFromXp(progress.xp)} · {progress.xp} XP · {progress.stars} stars</p>
        <div className="mt-4 h-5 rounded-full bg-slate-200">
          <div className="h-5 rounded-full bg-gradient-to-r from-yellow-300 to-emerald-400" style={{ width: `${(xp.current / xp.total) * 100}%` }} />
        </div>
      </Card>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Card className="text-center"><Star className="mx-auto text-yellow-500" /><p className="mt-2 font-display text-3xl font-black">{progress.stars}</p><p className="text-xs font-bold">Stars</p></Card>
        <Card className="text-center"><Award className="mx-auto text-rose-500" /><p className="mt-2 font-display text-3xl font-black">{progress.badges.length}</p><p className="text-xs font-bold">Badges</p></Card>
        <Card className="text-center"><Sparkles className="mx-auto text-sky-500" /><p className="mt-2 font-display text-3xl font-black">{progress.stickers.length}</p><p className="text-xs font-bold">Stickers</p></Card>
        <Card className="text-center"><Trophy className="mx-auto text-emerald-500" /><p className="mt-2 font-display text-3xl font-black">{Object.keys(progress.completed).length}</p><p className="text-xs font-bold">Wins</p></Card>
      </div>
      <Card>
        <h3 className="font-display text-2xl font-black">Animated Trophy Cabinet</h3>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {['🏆', '⭐', '📚', '🎖', '💡', '🚀'].map((item, i) => (
            <div key={item} className={`grid aspect-square place-items-center rounded-3xl text-4xl shadow ${progress.badges.length > i ? 'bg-yellow-200' : 'bg-white/60 grayscale'}`}>{item}</div>
          ))}
        </div>
      </Card>
      <Link to="/achievements"><PrimaryButton className="w-full bg-sky-500"><GalleryHorizontal /> Achievement Gallery</PrimaryButton></Link>
    </div>
  );
}
