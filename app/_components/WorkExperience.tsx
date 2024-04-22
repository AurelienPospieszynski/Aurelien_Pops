import { Badge } from '@/components/ui/badge';

export type WorkExperienceProps = {
  image: string;
  company: string;
  position: string;
  date: string;
  fullstack?: boolean;
};
export const WorkExperience = (props: WorkExperienceProps) => {
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
