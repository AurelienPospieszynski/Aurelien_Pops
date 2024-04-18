import { ComponentPropsWithoutRef } from 'react';
import { Section } from './Section';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Code = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => {
  return (
    <span
      className={cn(
        'bg-accent/30 hover:bg-accent/50 border border-accent transitions-color p-1 rounded-md',
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-8">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-secondary">
          Aurélien <br /> Pospieszynski
        </h2>
        <h3 className="font-caption text-3xl text-secondary">
          Software Engineer
        </h3>
        <p>
          Curious and dynamic Fullstack Developer, I'm currently working for
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
      <div className="flex-1 m-auto ml-auto max-md:m-auto">
        <img
          src="https://avatars.githubusercontent.com/u/36408090?v=4"
          alt="Illustration of
            Aurélien Pospieszynski"
          className="w-48 h-48 rounded-full max-w-xs max-md:w-48"
        />
      </div>
    </Section>
  );
};
