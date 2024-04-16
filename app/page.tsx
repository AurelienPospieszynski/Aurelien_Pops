import Image from 'next/image';
import { Header } from './_components/Header';
import { Hero } from './_components/Hero';

export default function Home() {
  return (
    <main>
      {/* Header is here. */}
      <Header />
      {/* Hero section is here. It contains the profil picture + quick introduction of myself */}
      <Hero />
    </main>
  );
}
