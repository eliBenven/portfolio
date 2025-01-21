import Splash from './components/Splash';

export const metadata = {
  title: 'Eli Benveniste | Data Analyst & Developer',
  description: 'Welcome to Eli Benveniste\'s professional portfolio. Data Analyst & Developer with expertise in data visualization, web development, and software engineering.',
  openGraph: {
    type: 'website',
    url: 'https://www.benven.org/',
    title: 'Eli Benveniste | Data Analyst & Developer',
    description: 'Welcome to Eli Benveniste\'s professional portfolio. Data Analyst & Developer with expertise in data visualization, web development, and software engineering.',
    images: [
      {
        url: '/images/Headshot.png',
        width: 800,
        height: 600,
        alt: 'Eli Benveniste headshot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eli Benveniste | Data Analyst & Developer',
    description: 'Welcome to Eli Benveniste\'s professional portfolio. Data Analyst & Developer with expertise in data visualization, web development, and software engineering.',
    images: ['/images/Headshot.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function HomePage() {
  return <Splash />;
}
