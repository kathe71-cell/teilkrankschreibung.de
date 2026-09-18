import { useEffect } from 'react';
import Calculator from '../components/Calculator';
import SeoHead from '../components/SeoHead';

export default function RechnerEmbed() {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      // Use standard parent postMessage for cross-origin iframe resizing
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'resize', height }, '*');
      }
    };

    // Send initially
    sendHeight();

    // Re-send on layout changes
    const observer = new ResizeObserver(() => sendHeight());
    observer.observe(document.body);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-2 sm:p-4 flex flex-col justify-center">
      <SeoHead 
        title="Teilkrankschreibung Rechner Widget"
        description="Embed-Widget für den Teil-AU Rechner."
        path="/embed"
      />
      <div className="max-w-4xl mx-auto w-full">
        <Calculator isEmbed={true} />
      </div>
    </div>
  );
}
