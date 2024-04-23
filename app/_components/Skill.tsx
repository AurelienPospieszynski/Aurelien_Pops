import { Badge } from '@/components/ui/badge';
import { Section } from './Section';
import { AngularIcon } from './icons/AngularIcon';
import { Code } from './Code';
import { JavaIcon } from './icons/JavaIcon';
import { ReactIcon } from './icons/ReactIcon';
import { TailwindcssIcon } from './icons/TailwindcssIcon';
import { SqlIcon } from './icons/SqlIcon';
import { OpenAiIcon } from './icons/OpenAiIcon';

export const Skill = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={'outline'}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        What I do
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <AngularIcon size={42} />
          <h3 className="text-2xl font-caption font-semibold">Angular</h3>
          <p className="text-sm text-muted-foreground leading-7">
            My main Frontend framework is <Code>Angular</Code>. I also use UI
            libraries like <Code>Material</Code> and <Code>PrimeNG</Code>.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <JavaIcon size={42} />
          <h3 className="text-2xl font-caption font-semibold">Java</h3>
          <p className="text-sm text-muted-foreground leading-7">
            My main Backend framework is <Code>Java</Code>. I primarily use{' '}
            <Code>Springboot</Code> as framework. I use <Code>JPA</Code> as my
            main ORM.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: '10s' }}
          />
          <h3 className="text-2xl font-caption font-semibold">React</h3>
          <p className="text-sm text-muted-foreground leading-7">
            I'm also working on <Code>React</Code>. I mainly use{' '}
            <Code>NextJS</Code> for my personal projects.
          </p>
        </div>
      </div>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <OpenAiIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: '10s' }}
          />
          <h3 className="text-2xl font-caption font-semibold">AI</h3>
          <p className="text-sm text-muted-foreground leading-7">
            I love working with AI notably <Code>ChatGPT</Code> and{' '}
            <Code>Copilot</Code>. I start to integrate <Code>OpenAI</Code> into
            my projects.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindcssIcon size={42} />
          <h3 className="text-2xl font-caption font-semibold">TailwindCSS</h3>
          <p className="text-sm text-muted-foreground leading-7">
            I'm using <Code>TailwindCSS</Code> to make everything prettier. I
            love how it's evolving and appreciate their forward-thinking
            approach.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <SqlIcon size={42} />
          <h3 className="text-2xl font-caption font-semibold">SQL</h3>
          <p className="text-sm text-muted-foreground leading-7">
            I love the database aspect. I work a lot on development and
            optimization. I'm more a <Code>Relational Database</Code> person.
          </p>
        </div>
      </div>
    </Section>
  );
};
