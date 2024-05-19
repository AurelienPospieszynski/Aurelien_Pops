'use client';
import { useEffect, useRef } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const scope = useRef(null);
  const [scopeRef, animate] = useAnimate();
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [words, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scopeRef}>
        {words.split(' ').map((word: string, idx: number) => {
          return (
            <motion.span key={word + idx} className="opacity-0">
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div className=" leading-snug tracking-wide">{renderWords()}</div>
    </div>
  );
};
