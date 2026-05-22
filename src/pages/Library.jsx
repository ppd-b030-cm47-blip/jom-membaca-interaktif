import { Link, useParams } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';
import { getMaterials } from '../data/library.js';
import { Card } from '../components/Card.jsx';
import Illustration from '../components/Illustration.jsx';

export default function Library() {
  const { year, language } = useParams();
  const materials = getMaterials(year, language);
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-3xl font-black">{materials[0]?.languageLabel} Library</h2>
        <p className="font-semibold text-slate-600">Tahun {year} · 5 reading missions</p>
      </div>
      <div className="flex snap-x gap-4 overflow-x-auto pb-2 no-scrollbar md:grid md:grid-cols-2 md:overflow-visible">
        {materials.map((material) => (
          <Link key={material.id} to={`/read/${material.id}`} className="min-w-[82vw] snap-center md:min-w-0">
            <Card className="h-full">
              <Illustration material={material} compact />
              <h3 className="mt-4 font-display text-2xl font-black leading-tight">{material.title}</h3>
              <div className="mt-3 flex items-center gap-3 text-sm font-extrabold text-slate-600">
                <span className="inline-flex items-center gap-1"><Clock size={16} /> {material.duration}</span>
                <span className="inline-flex items-center gap-1"><Star size={16} className="text-yellow-500" /> 3 games</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
