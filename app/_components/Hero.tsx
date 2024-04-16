import { Section } from './Section';

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption font-bold text-5xl">
          Aurélien <br /> Pospieszynski
        </h2>
        <h3>Software Engineer</h3>
        <p>
          I'm a software engineer based in Paris, France. I love building things
          for the web and learning new technologies.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/img/me.png"
          alt="Illustration of
            Aurélien Pospieszynski"
          className="w-48 h-48 rounded-full max-width-sm"
        />
      </div>
    </Section>
  );
};
