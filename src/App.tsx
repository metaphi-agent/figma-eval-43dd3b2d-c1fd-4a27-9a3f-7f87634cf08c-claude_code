import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FooterDetail from './pages/FooterDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/footer-:id" element={<FooterDetail />} />
    </Routes>
  );
}
