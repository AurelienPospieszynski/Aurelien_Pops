import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'span'>) => {
  return (
    <span
      className={cn(
        'bg-accent/30 hover:bg-accent/50 border border-accent transitions-color p-1 rounded-md',
        className
      )}
      {...props}
    />
  );
};
