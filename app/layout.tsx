import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'IIFS — Indian Institute of Future Skills',
    template: '%s — IIFS',
  },
  description: 'IIFS is reimagining India’s education with future-ready, AI-powered, skill-first learning.',
  metadataBase: new URL('https://agentic-b3bd9c65.vercel.app'),
  openGraph: {
    title: 'IIFS — Indian Institute of Future Skills',
    description: 'Reimagining India’s education with AI and future skills',
    url: 'https://agentic-b3bd9c65.vercel.app',
    siteName: 'IIFS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IIFS — Indian Institute of Future Skills',
    description: 'Reimagining India’s education with AI and future skills',
  },
  keywords: ['IIFS', 'Indian Institute of Future Skills', 'Future Skills', 'AI Education', 'Skill-based learning', 'India'],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
