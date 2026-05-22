const KEY = 'jom-membaca-progress-v1';

const initialProgress = {
  name: 'Adik Membaca',
  avatar: 'star',
  xp: 0,
  stars: 0,
  completed: {},
  badges: [],
  stickers: [],
  settings: {
    sound: true,
    motion: true,
    language: 'bm',
  },
};

export function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    return { ...initialProgress, ...saved, settings: { ...initialProgress.settings, ...(saved?.settings || {}) } };
  } catch {
    return initialProgress;
  }
}

export function saveProgress(progress) {
  localStorage.setItem(KEY, JSON.stringify(progress));
}

export function resetProgress() {
  saveProgress(initialProgress);
  return initialProgress;
}

export function levelFromXp(xp) {
  return Math.max(1, Math.floor(xp / 150) + 1);
}

export function xpForNextLevel(xp) {
  const currentBase = (levelFromXp(xp) - 1) * 150;
  return { current: xp - currentBase, total: 150 };
}

export function award(progress, materialId, activity, score = 1) {
  const key = `${materialId}:${activity}`;
  if (progress.completed[key]) return progress;
  const activityXp = { quiz: 60, crossword: 45, hidden: 50, reading: 20 };
  const newBadges = [...progress.badges];
  const badgePool = ['Pembaca Hebat', 'Juara Kuiz', 'Pakar Bahasa', 'Master Explorer', 'Reading Champion', 'Super Student'];
  const completedCount = Object.keys(progress.completed).length + 1;
  if (completedCount === 1) newBadges.push('Pembaca Hebat');
  if (activity === 'quiz' && score >= 8) newBadges.push('Juara Kuiz');
  if (completedCount >= 8) newBadges.push('Pakar Bahasa');
  if (completedCount >= 18) newBadges.push('Master Explorer');
  if (completedCount >= 30) newBadges.push('Reading Champion');
  if (completedCount >= 60) newBadges.push('Super Student');
  const uniqueBadges = [...new Set([...newBadges, badgePool.find((_, i) => completedCount === (i + 1) * 10)].filter(Boolean))];
  return {
    ...progress,
    xp: progress.xp + (activityXp[activity] || 30),
    stars: progress.stars + (activity === 'reading' ? 1 : 2),
    completed: { ...progress.completed, [key]: true },
    badges: uniqueBadges,
    stickers: [...new Set([...progress.stickers, ['Bintang Ceria', 'Buku Ajaib', 'Trophy Kilat', 'Pensel Emas'][completedCount % 4]])],
  };
}
