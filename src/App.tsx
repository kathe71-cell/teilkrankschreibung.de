import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import StickyBottomBar from './components/StickyBottomBar';
import VercelAnalytics from './components/VercelAnalytics';

import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import RechnerEmbed from './pages/RechnerEmbed';
import RatgeberPage from './pages/RatgeberPage';
import DiagnosenPage from './pages/DiagnosenPage';
import GlossarPage from './pages/GlossarPage';
import FaqPage from './pages/FaqPage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

export function Layout() {
  const location = useLocation();
  const isEmbed = location.pathname === '/rechner-embed';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <VercelAnalytics />
      {!isEmbed && <Header />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rechner" element={<CalculatorPage />} />
          <Route path="/rechner-embed" element={<RechnerEmbed />} />
          <Route path="/ratgeber" element={<RatgeberPage />} />
          <Route path="/diagnosen" element={<DiagnosenPage />} />
          <Route path="/glossar" element={<GlossarPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {!isEmbed && <Footer />}
      {!isEmbed && <ScrollToTop />}
      {!isEmbed && <StickyBottomBar />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
