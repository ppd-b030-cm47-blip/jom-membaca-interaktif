import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import { ProgressProvider } from './hooks/useProgress.jsx';
import Splash from './pages/Splash.jsx';
import Home from './pages/Home.jsx';
import Years from './pages/Years.jsx';
import Languages from './pages/Languages.jsx';
import Library from './pages/Library.jsx';
import Reader from './pages/Reader.jsx';
import Quiz from './pages/Quiz.jsx';
import Crossword from './pages/Crossword.jsx';
import HiddenObject from './pages/HiddenObject.jsx';
import Rewards from './pages/Rewards.jsx';
import Achievements from './pages/Achievements.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';

export default function App() {
  return (
    <ProgressProvider>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/years" element={<Years />} />
          <Route path="/year/:year" element={<Languages />} />
          <Route path="/year/:year/:language" element={<Library />} />
          <Route path="/read/:id" element={<Reader />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/crossword/:id" element={<Crossword />} />
          <Route path="/hidden/:id" element={<HiddenObject />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </ProgressProvider>
  );
}
