import { Header } from './_components/Header';
import { Hero } from './_components/Hero';
import { Spacing } from './_components/Spacing';
import { Status } from './_components/Status';
import { Skill } from './_components/Skill';
import { Contact } from './_components/Contact';
import { Footer } from './_components/Footer';

export default function Home() {
  return (
    <main>
      {/* Header is here. */}
      <Header />

      <Spacing size="md" />

      {/* Hero section is here. It contains the profil picture + quick introduction of myself */}
      <Hero />

      <Spacing size="md" />

      {/* Status section is here. It contains the side projects, work and contact me sections. */}
      <Status />

      <Spacing size="md" />

      {/*Skill section is here. It contains skills */}
      <Skill />

      <Spacing size="md" />

      {/* Contact section is here. */}
      <Contact />

      <Spacing size="md" />

      {/* Footer is here. */}
      <Footer />
    </main>
  );
}
