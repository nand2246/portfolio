import { Variants, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';

const animateFilterButton: Variants = {
  initial: {
    boxShadow: `-3px -3px 4px 0 #c9c6d8 inset,
                3.5px 3.5px 6px 0 #ffffff inset,
                3px 3px 7px 0 #c9c6d8,
                -1.5px -1.5px 6px 0 #ffffff`,
    transition: {
      type: 'linear',
      bounce: 0.7,
      duration: 1.5,
    },
  },
  animateBoxShadow: {
    boxShadow: `3px 3px 4px 0 #c9c6d8 inset,
                -3.5px -3.5px 6px 0 #ffffff inset,
                -3px -3px 7px 0 #c9c6d8,
                1.5px 1.5px 6px 0 #ffffff`,
    transition: {
      type: 'linear',
      bounce: 0.7,
      duration: 1.5,
    },
  },
};

export default function FilterButton({
  filter,
  handleAdd,
  handleRemove,
}: {
  filter: string;
  handleAdd: () => void;
  handleRemove: () => void;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, animateFilterButton.initial);
  }, [animate, scope]);

  return (
    <div className='pb-2 pr-2 sm:pr-2.5 sm:pb-2.5'>
      <button
        ref={scope}
        className={`text-xs sm:text-base px-2.5 py-2 rounded-xl sm:rounded-2xl`}
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
        {filter}
      </button>
    </div>
  );
}
