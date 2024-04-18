import { Card } from '@/components/ui/card';
import { Section } from './Section';
import {
  Headphones,
  LucideIcon,
  Music,
  Briefcase,
  FolderKanban,
  CircleUser,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

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
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg font-semibold flex">
            {' '}
            <CircleUser className="mr-2" /> Contact me
          </p>
          <Link href="https://www.linkedin.com/in/aur%C3%A9lien-pospieszynski-08744b170/">
            <ContactCard
              image="https://media.licdn.com/dms/image/D5603AQGFNBcaWW2pMg/profile-displayphoto-shrink_100_100/0/1665581014297?e=1718841600&v=beta&t=HjnFjSLZeIwfPVuCUBF7707tbTXUN8JfO8etoMhhNL4"
              mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEUAAAD///9ubm7s7Oxra2uLi4scHBy+vr76+vpzc3P19fXw8PDIyMixsbGcnJzS0tK4uLhhYWHm5uYLCwvf39+oqKg+Pj4xMTEsLCx5eXnY2NhEREQmJiYYGBhcXFxUVFSDg4NLS0uTk5NVZwVFAAAEe0lEQVR4nO2d23aqMBBAQ1WM3EWCAlLR///IA7raUxWSaCYrjGv2Q99oZ6/QXCYZwryBfMtQs82vGmz4sVi6jsaU5eJHJli5jsWcVXCT4bHrSCCI+VWmaFwHAkFTDDI8cR0HDAnvZQrfdRgw+EUv8yEN0zdNL3N0HQQUR4/lrmOAI2fCdQhwCNa5DgGOjpWuQ4CjZK3rEOBo2c51CHB8kApBEIQm7XHflAf/Awamw3eXiHUaZSLZnHCvgParrPB+4HVc4dVpVxH37gjXG9dBvUmTBd4TC5wpnVP6rDK8bKnrwN5guxh1GRrHdWgv0xRTLp5Xuw7uRQ7RtIvnrV2H9xqJzAVZkrqUuvQv2t51hC+QKWQwpXZ9hYvnRXiaplPKhJXrGLUZHy7vQJND9EemMY+ssbxnZ66WSc+uo9RkqyGDZp96pSETYFkLyId/ZDKVRsuEX66j1ORbQ6b4dh2lJs0n9WYsVMugGWeYdDFzA89Ms1K6LLB0Zj1KmejgOkR9LgoXXEtNxVQzQrXzJl/RIFrNDPjShTOeruzGXtI9Z66De5nz5HIzQ3iEqJx40xKELowdLyNztEWFqiP7z+6pcXiC+cjNUfwZcfILmtnlFGUnojTNkgq9CUEQBEEQBEEQM6BFunR9oOniqC6Koq775dIG83KpFEX4ZxXLg7AWlvZ8vjwuYbSMeCV75HHbYJOPZn7yi40Dx19TSbNbimZcRkb4R6atJKnsuAT/HwKX+d8yfiU5ZDggoDNA1mR2p1i5Y7oAzp3Yktl1ima5sQbdy7Yk0wqNvd+BogPsCezItI8n2KcJAVPadmQ0zrH9EggwGysyr7j0w2gGVUVhQ0bjdME9UGUH8DLLRPv/5Reg7UZwmVyMT2DkwGwEg8vw19tlAGTqCS7zJgXEXGAuMiCdwGxkQoCPFs1GBuLI0XxkAM4czUcGoIZiRjK8+yAZ8+Mt1mVeGEONv8JmU4bndZTFWVTnmkaX2coEqdje8i+7rUi1dCLDDIc1mfTuyMrhorPGCU/zlIkfZ47nWOMpw8mzJZnVc8fkq07q9gizNacdmW70b6kfNJzSWJGZKLprherB3GwSYEMmnRr8SlV2IDDrzmzITGcpK1Vq0Kw7syATS2YlqvJjs2o9eBkuq+vqFE1jNqGBl5GWQpU1LhkhzYQr3jOzaj14GflsUcgnaXOTka9+L/Ial5nJKKpUNvIeYGYyiiK15eSHYUiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZD5HZiP93aO3gshlAvmB0y/5gVOzWwhO0VpCPFZosJQ+ksk/vnKKZQ9HZoUNO1/K2BeI3ngE6GGCIAiCILT5oEF1x/DeWv6EzxrXIcDRsM51CHB0DOcF7KPEDN+N5ZMsmIf5K7x37D2G7kqsSZJepkB0I56MQ9HLcDRXL8sRvJfxcjT3e8o4594gg/DytRGG4vtBhpt+BGkGXK8vu16ZGXSuYzGlu5be/wP9S1TTxpaEKQAAAABJRU5ErkJggg=="
              name="Aurelien Pospieszynski"
              description="I don't like LinkedIn, but it is what it is 🤓"
            />
          </Link>

          <Link href="https://twitter.com/Aurelien_Pops">
            <ContactCard
              image="https://pbs.twimg.com/profile_images/1760331268183437312/4YIKtbGZ_400x400.jpg"
              mediumImage="https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1713312000&semt=ais"
              name="@Aurelien_Pops"
              description="My favorite social media to learn new things 🐦"
            />
          </Link>
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
    company: 'Soprasteria - AG2R',
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
        <div className="flex flex-row items-center gap-2">
          <p className="text-base font-caption font-semibold">
            {props.company}
          </p>
          {props.fullstack && <Badge variant="outline"> Fullstack </Badge>}
        </div>
        <p className="text-xs text-muted-foreground ">{props.position}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-muted-foreground text-end">{props.date}</p>
      </div>
    </div>
  );
};

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative ">
        <img
          src={props.image}
          alt={props.name}
          className="w-10 h-10 rounded-full object-contain"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
        />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-base font-caption font-semibold">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground ">{props.description}</p>
      </div>
      <ArrowUpRight
        className="mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
        size={16}
      />
    </Card>
  );
};
