import { Badge } from '@/components/ui/badge';
import { Section } from './Section';
import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ContactCard } from './ContactCard';

export const Contact = (props: {
  image?: string;
  mediumImage?: string;
  name?: string;
  description?: string;
}) => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={'outline'}>Contact me </Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I'll be happy to talk with you
      </h2>
      <div className="flex max-md:flex-col gap-4 items-stretch w-full">
        <Link href="mailto:aurelien.pos@hotmail.fr" className="flex-1">
          <ContactCard
            image="./img/gon.png"
            mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABFFBMVEX////qQjVChfQ1qFP6uwDFIhz09f7z9/RIh/Q8qVgyfvPK5NAgo0bI2Pv7vwDqPTbdNy7vcSvqPjBunfZnuHnpOCnGLCf6vBf/+fP59PPpMiHBAAD/uwDvhoHpLhv1uLb0r6zFHhTrT0X52tnrWE/64uHueXP47u7RbWvJRkP6wDz94bbrWVDrU0k0iPzHGQCTtWPltLPUeHfHOjbJQz/OW1jbl5bu0dH+7M/81pP7xlH6viv7zXL83an7yWX+7tnpxMP95b7+9Of+7NH5zbTuZhBljO2/VmntvkZmr2SocKLJu1mEhNLNNye8WXHOj6jWoYNSsGicuPiZyqLf5vze7OCyx/mv1bePr/eLxJZ+pfZ4vYYkSi6sAAAFr0lEQVR4nO2ba3vTNhxHraTpoIQxDE6bS5OmIU0v0DtlkNJCNxiD3YCN3b7/95jdOE3iSNbfsuRIe37nBS9lzqMTXRLX8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUKM+GAzqi/5PeN7a1dqagWEHR8c7J7VK7fTp2TMDw1P59vmL3dWl1eHu+Z5ey/52t9ntdiuV8J9m8+RI6+B0Xg5bS2NaSxeX2gYebDdDuQndZu2VtsHpvF6d+I0kLzTN46tKs5Kg2zwu+gO5dp7wu+a1jqHPZicwprnT1zE4matdnuBS62X+oc/mJnA8jUV+Gve4fpHi87xDHwkEo2ksrlRuobHiXr6hBxVeogWXeskvdMxVrsG3xVNYWKnCQmMu8gz+LFXwulRdHkJSCo07/S7H6E9TGo0VT82Werkr8Qt5oT58XTaFUaldk6V+L/cLJ1F9409ZSKdor2tUmmX9zdcUQ/VN8Zhk+E2waabU/mZwn2K4dK78iFPpx/DakPlBR6PYmI7v36MZDpWfUSMaMtbQX+p6gzGi4arqM+p0Q6a71P6TgNENVZeaeo0iODLUXGon8JlthlpLjQq10JAFj/SU2n8cMDsNmd/QUWqn4TNbDRnTsPuvtyfDWWjIgsf5Sp0UaqthzjU1XkOtNsxV6nShFhsqlzpbqM2GiqWG59DkQNYaKpWaLNRyw7DUXqZnzRdqu2HGUhNrqBOGmc6p43OoY4YseEJbU0c3pUUYLu8c5DIklioolG7YGiobvv2Boig2JJUqKpRs2Hr341eqhqX99wfya36aobRUcaFUw9aH8m1lw1ul/Z9OpNOYasj8dlqpnbawUJpha3hYzmVY2peXmm4YlSr6jaqeVijJMCy0nNOwVLolK1VmKLz79x+lFUoxbH24Xc5vKC1VaigoVVKo3PC6UB2GslLlhrxSpYVKDUeFajGUlEoxnCuVfw7NYhgXqskwLPVn4TSSDBO7f8ouTzQcF6rLMCz1F5EizTC6Ud2UyrspZTKcFKrNMKVUquHN7i9fQ2WGU4VqNBSWSjZkvh+VyrnLZzRcPSyXTRiK1lS64XWp1EKFhrOFajUUlJrFkAUNaqEiw0Shmg25u38mw2xwDIeHST+9hrxSizScL1S7YWn+RlWgIadQA4ZzpRZm2OIVasIwWWpRhvxCjRgmSi3IMLzLizBgOFNqIYbCQk0ZTp9TizAUF2rMMGRcagGGgjXUtOG4VOOGqYWaNByXatowvVCjhvE51bChpFDDhmGptQOzhrJCTRtGuz/hGyVlwzfvPsoFzRqGjr/SvnNRwPd/I/gZN1y529vMcuejE2z27lStMPS8LROlNrY8zxpDb0N7qX6w4dlk6OkuNSzUs8vQq29l+IZJSntr9N2qTYY6Sx0Vap+htlLjQi001FTquFAbDcNSG3lL9RsbU+PZZ5i71KlCLTUMS82z+ze2Zn9JtdEwLFX+67UAv72RGMtOQ+VSE4VabEj7jX6OZKE2G6qsqbNrqP2GXo9lKzVg3DduLTZMfyNvjuim5JxhhnPq5BzqliF5TeWsoY4YEnd/3hrqiiGlVHGhbhh6vdQ3ZKN3bFL/asEBQ8mNqp1SqCuGabs/f5d3z1BYqqRQhww9/ntQskJdMuSVOn9TcttwbvdP2eUdNUysqZRCXTOcLlW+hrppeFMqsdAIxwzj36hENyUezhmG59SAXGiEe4ZeL9tfzzpomBEYwlACDGGoARjCUAIMYagBGMJQAgxhqAEYwlACDN039JwxVB7/rSOGH5XH/7TihGH1s/L4vzti+If6Ax44YfgwxwMok7hwwzxT6Hlf5IqLNqz+me8R8sVmwYY5lpmYLysSx4UaVvPOYMTyX6VUycUZVqvlv5VPMzMs3/30zwMxRg0fivn38x09fgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/J/4D2zvGK6VGtwBAAAAAElFTkSuQmCC"
            name="aurelien.pos@hotmail.fr"
            description="You can send me an email anytime 📧"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/aur%C3%A9lien-pospieszynski-08744b170/"
          className="flex-1"
        >
          <ContactCard
            image="https://media.licdn.com/dms/image/D5603AQGFNBcaWW2pMg/profile-displayphoto-shrink_100_100/0/1665581014297?e=1718841600&v=beta&t=HjnFjSLZeIwfPVuCUBF7707tbTXUN8JfO8etoMhhNL4"
            mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEUAAAD///9ubm7s7Oxra2uLi4scHBy+vr76+vpzc3P19fXw8PDIyMixsbGcnJzS0tK4uLhhYWHm5uYLCwvf39+oqKg+Pj4xMTEsLCx5eXnY2NhEREQmJiYYGBhcXFxUVFSDg4NLS0uTk5NVZwVFAAAEe0lEQVR4nO2d23aqMBBAQ1WM3EWCAlLR///IA7raUxWSaCYrjGv2Q99oZ6/QXCYZwryBfMtQs82vGmz4sVi6jsaU5eJHJli5jsWcVXCT4bHrSCCI+VWmaFwHAkFTDDI8cR0HDAnvZQrfdRgw+EUv8yEN0zdNL3N0HQQUR4/lrmOAI2fCdQhwCNa5DgGOjpWuQ4CjZK3rEOBo2c51CHB8kApBEIQm7XHflAf/Awamw3eXiHUaZSLZnHCvgParrPB+4HVc4dVpVxH37gjXG9dBvUmTBd4TC5wpnVP6rDK8bKnrwN5guxh1GRrHdWgv0xRTLp5Xuw7uRQ7RtIvnrV2H9xqJzAVZkrqUuvQv2t51hC+QKWQwpXZ9hYvnRXiaplPKhJXrGLUZHy7vQJND9EemMY+ssbxnZ66WSc+uo9RkqyGDZp96pSETYFkLyId/ZDKVRsuEX66j1ORbQ6b4dh2lJs0n9WYsVMugGWeYdDFzA89Ms1K6LLB0Zj1KmejgOkR9LgoXXEtNxVQzQrXzJl/RIFrNDPjShTOeruzGXtI9Z66De5nz5HIzQ3iEqJx40xKELowdLyNztEWFqiP7z+6pcXiC+cjNUfwZcfILmtnlFGUnojTNkgq9CUEQBEEQBEEQM6BFunR9oOniqC6Koq775dIG83KpFEX4ZxXLg7AWlvZ8vjwuYbSMeCV75HHbYJOPZn7yi40Dx19TSbNbimZcRkb4R6atJKnsuAT/HwKX+d8yfiU5ZDggoDNA1mR2p1i5Y7oAzp3Yktl1ima5sQbdy7Yk0wqNvd+BogPsCezItI8n2KcJAVPadmQ0zrH9EggwGysyr7j0w2gGVUVhQ0bjdME9UGUH8DLLRPv/5Reg7UZwmVyMT2DkwGwEg8vw19tlAGTqCS7zJgXEXGAuMiCdwGxkQoCPFs1GBuLI0XxkAM4czUcGoIZiRjK8+yAZ8+Mt1mVeGEONv8JmU4bndZTFWVTnmkaX2coEqdje8i+7rUi1dCLDDIc1mfTuyMrhorPGCU/zlIkfZ47nWOMpw8mzJZnVc8fkq07q9gizNacdmW70b6kfNJzSWJGZKLprherB3GwSYEMmnRr8SlV2IDDrzmzITGcpK1Vq0Kw7syATS2YlqvJjs2o9eBkuq+vqFE1jNqGBl5GWQpU1LhkhzYQr3jOzaj14GflsUcgnaXOTka9+L/Ial5nJKKpUNvIeYGYyiiK15eSHYUiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZEiGZD5HZiP93aO3gshlAvmB0y/5gVOzWwhO0VpCPFZosJQ+ksk/vnKKZQ9HZoUNO1/K2BeI3ngE6GGCIAiCILT5oEF1x/DeWv6EzxrXIcDRsM51CHB0DOcF7KPEDN+N5ZMsmIf5K7x37D2G7kqsSZJepkB0I56MQ9HLcDRXL8sRvJfxcjT3e8o4594gg/DytRGG4vtBhpt+BGkGXK8vu16ZGXSuYzGlu5be/wP9S1TTxpaEKQAAAABJRU5ErkJggg=="
            name="Aurelien Pospieszynski"
            description="I don't like LinkedIn, but it is what it is 🤓"
          />
        </Link>

        <Link href="https://twitter.com/Aurelien_Pops" className="flex-1">
          <ContactCard
            image="https://pbs.twimg.com/profile_images/1760331268183437312/4YIKtbGZ_400x400.jpg"
            mediumImage="https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1713312000&semt=ais"
            name="@Aurelien_Pops"
            description="My favorite media to learn new things 🐦"
          />
        </Link>
      </div>
    </Section>
  );
};
