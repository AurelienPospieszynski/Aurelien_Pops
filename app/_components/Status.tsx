import { Card } from '@/components/ui/card';
import { Section } from './Section';
import { Headphones, LucideIcon, Music } from 'lucide-react';
import Link from 'next/link';

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-8">
      <div className="flex-[3] w-full">
        <Card className="w-full flex flex-col gap-2 p-4">
          <p className="text-lg font-semibold">Side, fun projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">WORK</Card>
        <Card className="p-4 flex-1">CONTACT ME</Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Music,
    title: 'KEPOFY',
    description: 'Personal webapp to listen music from Deezer. ',
    url: 'https://github.com/AurelienPospieszynski/kepofy',
  },
  {
    Logo: Headphones,
    title: 'KEPOFY',
    description: 'Personal webapp to listen music from Deezer. ',
    url: 'https://github.com/AurelienPospieszynski/kepofy',
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded "
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={24} />
      </span>
      <div>
        <div>
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </div>
    </Link>
  );
};
