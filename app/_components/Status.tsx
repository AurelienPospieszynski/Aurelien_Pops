import { Card } from '@/components/ui/card';
import { Section } from './Section';
import {
  Headphones,
  LucideIcon,
  Music,
  Briefcase,
  FolderKanban,
  CircleUser,
} from 'lucide-react';
import Link from 'next/link';

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-8">
      <div className="flex-[3] w-full">
        <Card className="w-full flex flex-col gap-2 p-4">
          <p className="text-lg font-semibold flex">
            <FolderKanban className="mr-2" /> Side, fun projects
          </p>
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
        <Card className="w-full flex flex-col gap-4 p-4">
          {' '}
          <p className="text-lg font-semibold flex">
            {' '}
            <Briefcase className="mr-2" /> Work
          </p>
          <div className="flex flex-col gap-4">
            {WORK_EXPERIENCES.map((work, index) => (
              <WorkExperience key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">
          <p className="text-lg font-semibold flex">
            {' '}
            <CircleUser className="mr-2" /> Contact me
          </p>
        </Card>
      </div>
    </Section>
  );
};

/*
 * SIDE PROJECTS PART
 */
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

/*
 * WORK PART
 */

const WORK_EXPERIENCES: WorkExperienceProps[] = [
  {
    image:
      'https://media.licdn.com/dms/image/D4E0BAQHgmINOkOiFTg/company-logo_200_200/0/1710260478834/sncf_logo?e=1721260800&v=beta&t=6oUrje0Uar_cNdVE-Eg0rgPv6nVlBX3nB4t8d9hG9_s',
    company: 'Extia - SNCF',
    position: 'Software Engineer',
    date: 'Mar 2023 - Present',
    fullstack: true,
  },
  {
    image: 'https://static.licdn.com/aero-v1/sc/h/p4pvtlgggtwlz9lht17nvnqq',
    company: 'Personnal Experience',
    position: 'USA Trip',
    date: 'Feb 2022 - Sep 2022',
    fullstack: false,
  },
  {
    image:
      'https://media.licdn.com/dms/image/C560BAQHl1RvG-jIR2Q/company-logo_100_100/0/1630657481716/ag2r_la_mondiale_logo?e=1721260800&v=beta&t=lJrOWmukcIj47xC0gFxObaurS1i4HjUyxVy5gvcgCl8',
    company: 'Soprasteria - AG2R La Mondiale',
    position: 'Software Engineer',
    date: 'April 2019 - Feb 2022',
    fullstack: true,
  },
];

type WorkExperienceProps = {
  image: string;
  company: string;
  position: string;
  date: string;
  fullstack?: boolean;
};

const WorkExperience = (props: WorkExperienceProps) => {
  return (
    <div className="flex gap-4">
      <img
        src={props.image}
        alt={props.company}
        className="w-6 h-6 object-contain rounded-full"
      />
      <div>
        <p className="text-base font-caption font-semibold">{props.company}</p>
        <p className="text-xs text-muted-foreground ">{props.position}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-muted-foreground text-end">{props.date}</p>
      </div>
    </div>
  );
};
