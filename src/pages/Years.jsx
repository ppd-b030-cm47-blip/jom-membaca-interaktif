import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Card } from '../components/Card.jsx';
import { yearOptions } from '../data/library.js';

export default function Years() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-3xl font-black">Pilih Tahun</h2>
        <p className="font-semibold text-slate-600">Choose your primary school year level.</p>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {yearOptions.map((year) => (
          <Link key={year} to={`/year/${year}`}>
            <Card className="relative min-h-40 overflow-hidden">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-yellow-300/60" />
              <p className="font-display text-lg font-black text-emerald-600">Tahun</p>
              <p className="font-display text-6xl font-black">{year}</p>
              <ChevronRight className="absolute bottom-4 right-4 text-emerald-500" />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
