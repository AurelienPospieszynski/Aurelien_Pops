import { Badge } from '@/components/ui/badge';
import { Section } from './Section';
import { AngularIcon } from './icons/AngularIcon';
import { Code } from './Code';
import { JavaIcon } from './icons/JavaIcon';
import { ReactIcon } from './icons/ReactIcon';

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
            My main Backend framework is <Code>Java</Code>. I mainly use{' '}
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
            I'm also working on <Code>React</Code>. I use <Code>NextJS</Code>
            mainly for my personal projects.
          </p>
        </div>
      </div>
    </Section>
  );
};
