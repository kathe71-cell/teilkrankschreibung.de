import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    va?: (event: string, properties?: Record<string, unknown>) => void;
    vaq?: Array<[string, Record<string, unknown>]>;
  }
}

export default function VercelAnalytics() {
  const location = useLocation();

  useEffect(() => {
    window.va = window.va || function () {
      (window.vaq = window.vaq || []).push(arguments as unknown as [string, Record<string, unknown>]);
    };
    if (!document.getElementById('vercel-insights-script')) {
      const script = document.createElement('script');
      script.id = 'vercel-insights-script';
      script.src = '/_vercel/insights/script.js';
      script.defer = true;
      document.head.appendChild(script);
    }
    try {
      window.va('pageview', { route: location.pathname + location.search });
    } catch {
      window.vaq = window.vaq || [];
      window.vaq.push(['pageview', { route: location.pathname + location.search }]);
    }
  }, [location]);

  return null;
}
