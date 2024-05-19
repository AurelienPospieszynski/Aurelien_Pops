import { buttonVariants } from '@/components/ui/button';
import { Section } from './Section';
import { GithubIcon } from './icons/GithubIcon';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { TextGenerateEffect } from '@/components/ui/textGenerateEffect';

const titleQuote = "You don't grow when you're comfortable";

export const Header = () => {
  return (
    <header className="top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-base font-semibold text-primary italic">
          <TextGenerateEffect words={titleQuote} />
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
