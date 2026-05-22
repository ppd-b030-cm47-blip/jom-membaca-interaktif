import { Link, useParams } from 'react-router-dom';
import { Languages as LanguageIcon } from 'lucide-react';
import { Card } from '../components/Card.jsx';
import { languageOptions } from '../data/library.js';

export default function Languages() {
  const { year } = useParams();
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-3xl font-black">Tahun {year}</h2>
        <p className="font-semibold text-slate-600">Select a language path.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {languageOptions.map((language, index) => (
          <Link key={language.id} to={`/year/${year}/${language.id}`}>
            <Card className={`min-h-48 ${index ? 'bg-sky-100/70' : 'bg-emerald-100/70'}`}>
              <LanguageIcon size={42} className={index ? 'text-sky-500' : 'text-emerald-500'} />
              <h3 className="mt-5 font-display text-3xl font-black">{language.label}</h3>
              <p className="mt-2 font-bold text-slate-600">5 stories, 15 interactive activities</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
