'use client';
import { buttonVariants } from '@/components/ui/button';
import { Section } from './Section';
import { GithubIcon } from './icons/GithubIcon';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { TextGenerateEffect } from '@/components/ui/textGenerateEffect';
import { useEffect, useState } from 'react';
import { QUOTES_TITLE } from '../assets/db/QUOTES_TITLE';

const QuoteDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % QUOTES_TITLE.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {}, [currentIndex]);

  return <TextGenerateEffect words={QUOTES_TITLE[currentIndex]} />;
};

export const Header = () => {
  return (
    <header className="top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-base font-semibold text-primary italic">
          <QuoteDisplay />
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/AurelienPospieszynski/"
            className={cn(buttonVariants({ variant: 'outline' }), 'size-8 p-0')}
          >
            <GithubIcon size={22} className="text-foreground"></GithubIcon>
          </Link>
          <Link
            href="https://www.linkedin.com/in/aur%C3%A9lien-pospieszynski-08744b170/"
            className={cn(buttonVariants({ variant: 'outline' }), 'size-8 p-0')}
          >
            <LinkedInIcon
              size={20}
              className="text-foreground rounded-md"
            ></LinkedInIcon>
          </Link>
          <Link
            href="https://twitter.com/Aurelien_Pops"
            className={cn(buttonVariants({ variant: 'outline' }), 'size-8 p-0')}
          >
            <TwitterIcon size={20} className="text-foreground"></TwitterIcon>
          </Link>
        </ul>
      </Section>
    </header>
  );
};
