import { Card } from '@/components/ui/card';
import { Section } from './Section';
import { Briefcase, FolderKanban, CircleUser } from 'lucide-react';
import Link from 'next/link';
import { ContactCard } from './ContactCard';
import { WorkExperience } from './WorkExperience';
import { WORK_EXPERIENCES } from '../assets/db/WORK_EXPERIENCES';
import { SideProject } from './SideProject';
import { SIDE_PROJECTS } from '../assets/db/SIDE_PROJECTS';
import { BorderBeam } from '@/components/ui/border-beam';

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
        <Card className="relative p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg font-semibold flex">
            {' '}
            <BorderBeam />
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
