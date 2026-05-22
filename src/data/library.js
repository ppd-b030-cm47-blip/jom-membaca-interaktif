const years = [1, 2, 3, 4, 5, 6];
const languages = [
  { id: 'bm', label: 'Bahasa Melayu', short: 'BM' },
  { id: 'en', label: 'English', short: 'EN' },
];

const themes = [
  {
    key: 'friendship',
    bm: {
      title: 'Kawan Baharu di Taman',
      moral: 'Persahabatan menjadi kuat apabila kita saling membantu.',
      words: ['kawan', 'taman', 'bola', 'senyum', 'tolong', 'main', 'berani', 'gembira'],
      objects: ['bola', 'beg', 'topi', 'bunga', 'buku', 'layang-layang'],
    },
    en: {
      title: 'A New Friend at the Park',
      moral: 'Friendship grows when we help and welcome others.',
      words: ['friend', 'park', 'ball', 'smile', 'help', 'play', 'brave', 'happy'],
      objects: ['ball', 'bag', 'cap', 'flower', 'book', 'kite'],
    },
  },
  {
    key: 'honesty',
    bm: {
      title: 'Dompet Kecil di Kantin',
      moral: 'Kejujuran membuat hati tenang dan orang lain percaya kepada kita.',
      words: ['jujur', 'kantin', 'dompet', 'duit', 'guru', 'pulangkan', 'amanah', 'terima'],
      objects: ['dompet', 'duit syiling', 'pinggan', 'botol', 'resit', 'pensel'],
    },
    en: {
      title: 'The Little Wallet',
      moral: 'Honesty helps people trust us and keeps our heart peaceful.',
      words: ['honest', 'wallet', 'canteen', 'coin', 'teacher', 'return', 'trust', 'thank'],
      objects: ['wallet', 'coin', 'plate', 'bottle', 'receipt', 'pencil'],
    },
  },
  {
    key: 'animals',
    bm: {
      title: 'Kucing Comel di Perpustakaan',
      moral: 'Sayangi haiwan dan jaga tempat awam dengan baik.',
      words: ['kucing', 'buku', 'senyap', 'rak', 'penjaga', 'lembut', 'sayang', 'kemas'],
      objects: ['kucing', 'buku', 'rak', 'loceng', 'kerusi', 'kad'],
    },
    en: {
      title: 'The Library Cat',
      moral: 'Be kind to animals and care for shared places.',
      words: ['cat', 'book', 'quiet', 'shelf', 'keeper', 'gentle', 'care', 'tidy'],
      objects: ['cat', 'book', 'shelf', 'bell', 'chair', 'card'],
    },
  },
  {
    key: 'science',
    bm: {
      title: 'Eksperimen Pelangi Aina',
      moral: 'Rasa ingin tahu membantu kita belajar perkara baharu.',
      words: ['sains', 'pelangi', 'air', 'cahaya', 'warna', 'uji', 'catat', 'teliti'],
      objects: ['gelas', 'air', 'lampu', 'nota', 'pensel', 'prisma'],
    },
    en: {
      title: 'Aina’s Rainbow Experiment',
      moral: 'Curiosity helps us discover new ideas.',
      words: ['science', 'rainbow', 'water', 'light', 'colour', 'test', 'note', 'careful'],
      objects: ['glass', 'water', 'lamp', 'note', 'pencil', 'prism'],
    },
  },
  {
    key: 'technology',
    bm: {
      title: 'Robot Kitar Semula',
      moral: 'Teknologi lebih bermakna apabila digunakan untuk kebaikan.',
      words: ['robot', 'kod', 'skrin', 'cipta', 'sampah', 'kitar', 'pasukan', 'idea'],
      objects: ['robot', 'skrin', 'wayar', 'kotak', 'tin', 'butang'],
    },
    en: {
      title: 'The Recycling Robot',
      moral: 'Technology is best when it solves helpful problems.',
      words: ['robot', 'code', 'screen', 'create', 'rubbish', 'recycle', 'team', 'idea'],
      objects: ['robot', 'screen', 'wire', 'box', 'can', 'button'],
    },
  },
  {
    key: 'environment',
    bm: {
      title: 'Misi Pokok Sekolah',
      moral: 'Alam sekitar perlu dijaga bersama-sama.',
      words: ['pokok', 'tanah', 'air', 'hijau', 'bersih', 'sekolah', 'jaga', 'udara'],
      objects: ['pokok', 'penyiram', 'daun', 'sarung tangan', 'bakul', 'papan tanda'],
    },
    en: {
      title: 'The School Tree Mission',
      moral: 'We protect the environment by working together.',
      words: ['tree', 'soil', 'water', 'green', 'clean', 'school', 'care', 'air'],
      objects: ['tree', 'watering can', 'leaf', 'glove', 'basket', 'sign'],
    },
  },
  {
    key: 'family',
    bm: {
      title: 'Sarapan Untuk Nenek',
      moral: 'Kasih sayang keluarga ditunjukkan melalui perbuatan kecil.',
      words: ['nenek', 'sarapan', 'roti', 'teh', 'dapur', 'keluarga', 'sayang', 'rajin'],
      objects: ['roti', 'cawan', 'teh', 'pinggan', 'apron', 'jam'],
    },
    en: {
      title: 'Breakfast for Grandmother',
      moral: 'Small acts can show great love in a family.',
      words: ['grandma', 'breakfast', 'bread', 'tea', 'kitchen', 'family', 'love', 'helpful'],
      objects: ['bread', 'cup', 'tea', 'plate', 'apron', 'clock'],
    },
  },
  {
    key: 'culture',
    bm: {
      title: 'Hari Batik di Sekolah',
      moral: 'Budaya Malaysia indah apabila kita menghormatinya bersama.',
      words: ['batik', 'corak', 'budaya', 'Malaysia', 'kelas', 'warna', 'bangga', 'hormat'],
      objects: ['batik', 'berus', 'kain', 'warna', 'bendera', 'gambar'],
    },
    en: {
      title: 'Batik Day at School',
      moral: 'Malaysian culture is richer when we respect it together.',
      words: ['batik', 'pattern', 'culture', 'Malaysia', 'class', 'colour', 'proud', 'respect'],
      objects: ['batik', 'brush', 'cloth', 'paint', 'flag', 'photo'],
    },
  },
  {
    key: 'safety',
    bm: {
      title: 'Laluan Selamat Ke Sekolah',
      moral: 'Keselamatan bermula dengan pilihan yang bijak.',
      words: ['selamat', 'jalan', 'lampu', 'lintas', 'topi', 'awas', 'tunggu', 'sekolah'],
      objects: ['lampu isyarat', 'topi', 'beg', 'kon', 'basikal', 'papan tanda'],
    },
    en: {
      title: 'The Safe Way to School',
      moral: 'Safety begins with smart choices.',
      words: ['safe', 'road', 'light', 'cross', 'helmet', 'watch', 'wait', 'school'],
      objects: ['traffic light', 'helmet', 'bag', 'cone', 'bicycle', 'sign'],
    },
  },
  {
    key: 'creativity',
    bm: {
      title: 'Pentas Boneka Kelas',
      moral: 'Kreativiti menjadi hebat apabila dikongsi dengan rakan.',
      words: ['boneka', 'pentas', 'cerita', 'suara', 'warna', 'latih', 'berani', 'cipta'],
      objects: ['boneka', 'tirai', 'lampu', 'kad', 'gam', 'gunting'],
    },
    en: {
      title: 'The Class Puppet Stage',
      moral: 'Creativity shines when it is shared with friends.',
      words: ['puppet', 'stage', 'story', 'voice', 'colour', 'practice', 'brave', 'create'],
      objects: ['puppet', 'curtain', 'lamp', 'card', 'glue', 'scissors'],
    },
  },
];

const palettes = [
  ['#22c55e', '#38bdf8', '#facc15'],
  ['#fb7185', '#a78bfa', '#34d399'],
  ['#f97316', '#06b6d4', '#84cc16'],
  ['#e879f9', '#2dd4bf', '#fbbf24'],
  ['#60a5fa', '#f472b6', '#4ade80'],
  ['#14b8a6', '#f59e0b', '#818cf8'],
];

const bmBodies = [
  'Pada pagi yang cerah, {name} berjalan ke {place} dengan hati yang gembira. Dia melihat sesuatu yang menarik dan berhenti seketika. Rakan-rakannya datang menghampiri lalu mereka berbincang dengan sopan. {name} mendengar idea semua orang sebelum membuat keputusan. Mereka mencuba satu langkah kecil, kemudian satu langkah lagi. Walaupun ada perkara yang sukar, mereka tidak mudah berputus asa. Guru memuji usaha mereka kerana mereka bekerjasama, bercakap benar, dan menjaga perasaan kawan. Pada akhirnya, masalah itu selesai dengan cara yang baik. {name} belajar bahawa membaca, bertanya, dan berfikir boleh membantu kita memahami dunia. Hari itu menjadi kenangan manis kerana semua orang pulang dengan senyuman.',
  '{name} suka membaca selepas waktu rehat. Dalam cerita hari ini, dia belajar tentang {place} dan orang di sekelilingnya. Mula-mula, dia berasa ragu-ragu kerana tugas itu kelihatan besar. Namun, dia menulis senarai kecil dan meminta pandangan kawan. Mereka mencari maklumat, menyusun bahan, dan mencuba cara yang lebih kemas. Apabila tersilap, {name} berkata benar dan membetulkan kesilapan itu. Sikap jujur membuat rakan-rakan lebih yakin kepadanya. Sebelum pulang, mereka berkongsi hasil kerja dengan kelas. Semua murid bertepuk tangan kerana usaha itu jelas dan teratur. {name} sedar bahawa kejayaan datang daripada rajin berlatih, sabar, dan berani mencuba.',
  'Di sekolah, {name} dan kawannya menerima cabaran membaca tentang {place}. Mereka perlu memahami perkataan baharu, mencari maksud, dan menjawab soalan. {name} mula membaca dengan perlahan supaya setiap ayat jelas. Dia menanda perkataan penting dan bertanya jika tidak faham. Kawannya membantu dengan memberi contoh mudah. Semakin lama, cerita itu menjadi lebih menarik. Mereka menemui nilai baik tentang hormat, kasih sayang, dan tanggungjawab. Selepas tamat membaca, {name} membuat kesimpulan ringkas. Dia berasa bangga kerana dapat belajar sesuatu yang berguna. Sejak hari itu, dia percaya bahawa membaca ialah pintu kepada banyak pengembaraan.',
];

const enBodies = [
  'One bright morning, {name} walked to {place} with a curious mind. Something small caught the child’s attention, so {name} stopped and looked carefully. Friends came closer, and everyone shared ideas in kind voices. They tried one simple step, then another. The task was not easy at first, but they stayed calm and worked as a team. When someone made a mistake, they told the truth and fixed it. Their teacher smiled because the group listened, helped, and respected one another. By the end of the day, the problem was solved. {name} learned that reading, asking questions, and thinking carefully can open many doors.',
  '{name} enjoyed reading after recess. Today’s passage was about {place} and the people who make a community strong. At first, the work looked difficult. {name} made a small plan and asked friends for ideas. They searched for clues, arranged their notes, and checked each answer. When they felt unsure, they read the sentence again. Slowly, the story became clear. The class clapped when the group shared what they had learned. {name} felt proud, not because everything was perfect, but because everyone tried their best. The day showed that patience and kindness can turn a challenge into a happy lesson.',
  'At school, {name} joined a reading challenge about {place}. The passage had new words, but the class used context clues to understand them. {name} read each paragraph slowly and marked the important details. A friend gave a helpful example, and another friend asked a smart question. Together, they found the main idea and the moral value. The story reminded them to be honest, safe, creative, and caring. After the activity, {name} wrote a short reflection. Reading felt like an adventure because every page gave a new picture in the mind. {name} promised to read a little more each day.',
];

const names = ['Aina', 'Haziq', 'Mei Lin', 'Arjun', 'Sofia', 'Danish', 'Mira', 'Farid'];
const bmPlaces = ['kelas', 'taman sekolah', 'perpustakaan', 'makmal mini', 'kantin', 'dewan'];
const enPlaces = ['classroom', 'school garden', 'library', 'mini lab', 'canteen', 'hall'];

function expandBody(base, year, lang, themeIndex) {
  const name = names[(year + themeIndex) % names.length];
  const place = lang === 'bm' ? bmPlaces[(year + themeIndex) % bmPlaces.length] : enPlaces[(year + themeIndex) % enPlaces.length];
  let text = base.replaceAll('{name}', name).replaceAll('{place}', place);
  if (year >= 3) {
    text += lang === 'bm'
      ? ' Mereka juga belajar membuat ramalan, mencari bukti dalam teks, dan menyatakan pendapat dengan ayat yang lengkap.'
      : ' They also learned to make predictions, find evidence in the text, and share opinions in complete sentences.';
  }
  if (year >= 5) {
    text += lang === 'bm'
      ? ' Cabaran itu mengingatkan mereka bahawa ilmu perlu digunakan untuk membantu komuniti, menjaga alam, dan menghormati kepelbagaian budaya Malaysia.'
      : ' The challenge reminded them that knowledge should help the community, protect nature, and respect Malaysia’s many cultures.';
  }
  return text;
}

function createQuiz(material, lang, year) {
  const isBm = lang === 'bm';
  const title = material.title;
  const pool = material.vocabulary;
  const questions = [
    {
      q: isBm ? `Apakah tajuk bahan bacaan ini?` : `What is the title of this reading?`,
      options: [title, isBm ? 'Misteri Gunung Biru' : 'The Blue Mountain Mystery', isBm ? 'Hari Sukan Raya' : 'The Big Sports Day', isBm ? 'Buku Yang Hilang' : 'The Missing Book'],
      answer: title,
      explanation: isBm ? 'Tajuk terdapat di bahagian atas bahan bacaan.' : 'The title appears at the top of the reading.',
    },
    {
      q: isBm ? 'Nilai moral utama cerita ini ialah...' : 'The main moral value is...',
      options: [material.moral, isBm ? 'Tidur sepanjang hari' : 'Sleep all day', isBm ? 'Bermain tanpa henti' : 'Play without stopping', isBm ? 'Makan dengan cepat' : 'Eat quickly'],
      answer: material.moral,
      explanation: isBm ? 'Nilai moral menerangkan pelajaran baik daripada cerita.' : 'The moral explains the good lesson from the story.',
    },
    {
      q: isBm ? 'Apakah strategi membaca yang baik?' : 'Which is a good reading strategy?',
      options: [isBm ? 'Baca perlahan dan cari maklumat penting' : 'Read slowly and find important details', isBm ? 'Langkau semua perkataan baharu' : 'Skip every new word', isBm ? 'Tutup buku dengan segera' : 'Close the book at once', isBm ? 'Teka tanpa membaca' : 'Guess without reading'],
      answer: isBm ? 'Baca perlahan dan cari maklumat penting' : 'Read slowly and find important details',
      explanation: isBm ? 'Membaca dengan teliti membantu pemahaman.' : 'Careful reading improves understanding.',
    },
    {
      q: isBm ? `Perkataan manakah muncul dalam senarai kosa kata?` : `Which word appears in the vocabulary list?`,
      options: [pool[0], 'planetarium', 'kompas', 'stadium'],
      answer: pool[0],
      explanation: isBm ? `${pool[0]} ialah perkataan penting daripada bacaan.` : `${pool[0]} is an important word from the reading.`,
    },
    {
      q: isBm ? 'Apakah sikap yang membantu kerja berkumpulan?' : 'Which attitude helps teamwork?',
      options: [isBm ? 'Mendengar idea kawan' : 'Listening to friends', isBm ? 'Menjerit tanpa sebab' : 'Shouting for no reason', isBm ? 'Menyorok tugasan' : 'Hiding the task', isBm ? 'Tidak mahu mencuba' : 'Refusing to try'],
      answer: isBm ? 'Mendengar idea kawan' : 'Listening to friends',
      explanation: isBm ? 'Kerjasama menjadi lebih baik apabila kita mendengar.' : 'Teamwork improves when we listen.',
    },
    {
      q: isBm ? 'Apabila tersilap, murid patut...' : 'When students make a mistake, they should...',
      options: [isBm ? 'mengaku dan membetulkan kesilapan' : 'admit it and fix it', isBm ? 'menyalahkan semua orang' : 'blame everyone', isBm ? 'membuang buku' : 'throw the book away', isBm ? 'lari dari kelas' : 'run from class'],
      answer: isBm ? 'mengaku dan membetulkan kesilapan' : 'admit it and fix it',
      explanation: isBm ? 'Sikap jujur membantu kita belajar.' : 'Honesty helps us learn.',
    },
    {
      q: isBm ? 'Bahan ini sesuai untuk murid...' : 'This material is suitable for...',
      options: [isBm ? `Tahun ${year}` : `Year ${year}`, isBm ? 'Prasekolah sahaja' : 'Preschool only', isBm ? 'Universiti sahaja' : 'University only', isBm ? 'Orang dewasa sahaja' : 'Adults only'],
      answer: isBm ? `Tahun ${year}` : `Year ${year}`,
      explanation: isBm ? 'Tahap kesukaran meningkat mengikut tahun.' : 'Difficulty increases by year level.',
    },
    {
      q: isBm ? 'Apakah maksud membaca dengan teliti?' : 'What does careful reading mean?',
      options: [isBm ? 'Memahami ayat dan bukti' : 'Understanding sentences and evidence', isBm ? 'Melihat gambar sahaja' : 'Only looking at pictures', isBm ? 'Membaca tajuk sahaja' : 'Reading only the title', isBm ? 'Menutup mata' : 'Closing your eyes'],
      answer: isBm ? 'Memahami ayat dan bukti' : 'Understanding sentences and evidence',
      explanation: isBm ? 'Pembaca baik mencari maksud dan bukti.' : 'Good readers look for meaning and evidence.',
    },
    {
      q: isBm ? 'Apakah ganjaran selepas aktiviti?' : 'What reward can students earn after activities?',
      options: ['XP dan bintang', isBm ? 'Kerja rumah tambahan sahaja' : 'Only extra homework', isBm ? 'Tiada apa-apa' : 'Nothing', isBm ? 'Kehilangan markah' : 'Losing points'],
      answer: 'XP dan bintang',
      explanation: isBm ? 'Aplikasi memberi XP, bintang dan lencana.' : 'The app awards XP, stars, and badges.',
    },
    {
      q: isBm ? 'Mengapa kita membaca setiap hari?' : 'Why should we read every day?',
      options: [isBm ? 'Untuk menambah ilmu dan kosa kata' : 'To grow knowledge and vocabulary', isBm ? 'Untuk melupakan pelajaran' : 'To forget lessons', isBm ? 'Untuk tidak bertanya' : 'To avoid questions', isBm ? 'Untuk menyimpan semua buku' : 'To store every book'],
      answer: isBm ? 'Untuk menambah ilmu dan kosa kata' : 'To grow knowledge and vocabulary',
      explanation: isBm ? 'Amalan membaca menjadikan kita lebih yakin.' : 'Daily reading builds confidence.',
    },
  ];
  return questions;
}

function makeCrossword(words) {
  return words.slice(0, 8).map((word, index) => ({
    word: word.toUpperCase().replace(/\s/g, ''),
    clue: `Clue ${index + 1}: ${word}`,
  }));
}

function makeHiddenObjects(objects, themeIndex, year) {
  return objects.slice(0, Math.min(8, 5 + Math.floor(year / 2))).map((name, index) => ({
    id: `${name}-${index}`,
    name,
    x: 12 + ((index * 23 + year * 7 + themeIndex * 5) % 72),
    y: 18 + ((index * 17 + year * 9 + themeIndex * 6) % 60),
    size: 30 + ((index + year) % 3) * 6,
  }));
}

export const library = years.flatMap((year) =>
  languages.flatMap((language) =>
    themes.slice(0, 5).map((theme, index) => {
      const themeIndex = ((year - 1) * 5 + index) % themes.length;
      const selected = themes[themeIndex];
      const langData = selected[language.id];
      const bodyBase = language.id === 'bm' ? bmBodies[(year + index) % bmBodies.length] : enBodies[(year + index) % enBodies.length];
      const palette = palettes[(year + index) % palettes.length];
      const id = `y${year}-${language.id}-${index + 1}`;
      const material = {
        id,
        year,
        language: language.id,
        languageLabel: language.label,
        title: langData.title,
        theme: selected.key,
        story: expandBody(bodyBase, year, language.id, themeIndex),
        moral: langData.moral,
        vocabulary: langData.words,
        duration: `${Math.min(8, 2 + Math.ceil(year / 2) + (index % 2))} min`,
        palette,
        illustration: {
          icon: selected.key,
          objects: langData.objects,
        },
      };
      return {
        ...material,
        quiz: createQuiz(material, language.id, year),
        crossword: makeCrossword(langData.words),
        hiddenObjects: makeHiddenObjects(langData.objects, themeIndex, year),
      };
    })
  )
);

export const yearOptions = years;
export const languageOptions = languages;

export function getMaterial(id) {
  return library.find((item) => item.id === id);
}

export function getMaterials(year, language) {
  return library.filter((item) => item.year === Number(year) && item.language === language);
}
