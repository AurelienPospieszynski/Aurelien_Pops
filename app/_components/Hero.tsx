'use client';
import { Section } from './Section';
import Link from 'next/link';
import { Code } from './Code';
import { ImagesSlider } from '@/components/ui/images-sliders';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <Section className="flex max-md:flex-col items-start gap-8">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-secondary">
          Aurélien <br /> Pospieszynski
        </h2>
        <h3 className="font-caption text-3xl text-secondary">
          Software Engineer
        </h3>
        <p>
          Curious and dynamic I'm a Fullstack Developer currently working at
          <Link href="https://www.extia.fr/">
            <Code className="m-1">
              <img
                src="/img/Logo_Extia.png"
                className="inline w-8 h-auto mb-1 mr-1"
              ></img>
              Extia.
            </Code>
          </Link>
          <br /> Discover my projects and experiences, which combine <br />
          <Code className="mr-1">💫 creativity</Code> and{' '}
          <Code className="m-1"> 💻 technical expertise </Code>
        </p>
      </div>

      <div className="flex-[2] m-auto ml-auto max-md:m-auto">
        <ImagesSlider className="h-[20rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex flex-col justify-center items-center"
          ></motion.div>
        </ImagesSlider>
      </div>
    </Section>
  );
};
