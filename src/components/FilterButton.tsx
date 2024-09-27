import { useState } from 'react';

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

  return (
    <div className='pr-2'>
      <div
        className={`py-1 px-2 ${isActive ? 'bg-black text-white' : 'bg-orange-50'} outline rounded-md`}
        onClick={() => {
          if (isActive) handleRemove();
          else handleAdd();
          setIsActive(!isActive);
        }}
      >
        {tag}
      </div>
    </div>
  );
}
