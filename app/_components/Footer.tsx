import { Section } from './Section';

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Section className="py-4" />
      <div className="flex flex-col items-center gap-4 text-sm">
        <p className="text-center text-muted-foreground">
          © 2024 Aurélien Pospieszynski. All rights reserved.
        </p>
        <p className="text-center text-muted-foreground">
          Made with ❤️ and NextJS
        </p>
      </div>
    </footer>
  );
};
