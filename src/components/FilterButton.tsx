import { Variants, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';

const animateFilterButton: Variants = {
  initial: {
    boxShadow: `-3px -3px 4px 0 #c9c6d8 inset,
                3.5px 3.5px 6px 0 #ffffff inset,
                3px 3px 7px 0 #c9c6d8,
                -1.5px -1.5px 6px 0 #ffffff`,
    transition: {
      type: 'spring',
      bounce: 0.7,
      delay: 0.25,
      duration: 1.5,
    },
  },
  animateBoxShadow: {
    boxShadow: `3px 3px 4px 0 #c9c6d8 inset,
                -3.5px -3.5px 6px 0 #ffffff inset,
                -3px -3px 7px 0 #c9c6d8,
                1.5px 1.5px 6px 0 #ffffff`,
    transition: {
      type: 'spring',
      bounce: 0.7,
      delay: 0.25,
      duration: 1.5,
    },
  },
};

export default function FilterButton({
  tag,
  handleAdd,
  handleRemove,
}: {
  tag: string;
  handleAdd: () => void;
  handleRemove: () => void;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, animateFilterButton.initial);
  }, [animate, scope]);

  return (
    <div className='flex-none pb-2.5 pr-2.5 sm:pr-5 sm:pb-5'>
      <div
        ref={scope}
        className={`text-xs p-2 sm:text-base sm:p-3 sm:pb-3 rounded-lg`}
        onClick={() => {
          if (isActive) {
            handleRemove();
            animate(scope.current, animateFilterButton.initial);
          } else {
            handleAdd();
            animate(scope.current, animateFilterButton.animateBoxShadow);
          }
          setIsActive(!isActive);
        }}
      >
        {tag}
      </div>
    </div>
  );
}
