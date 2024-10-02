export default function ImageCard({
  image,
  cols,
  rows,
}: {
  image: string;
  cols?: number;
  rows?: number;
}) {
  const columnVariants: string[] = [
    'sm:col-span-1',
    'sm:col-span-2',
    'sm:col-span-3',
  ];

  const rowVariants: string[] = [
    'sm:row-span-1',
    'sm:row-span-2',
    'sm:row-span-3',
  ];
  return (
    <div
      className={`col-span-3 ${cols ? columnVariants[cols - 1] : columnVariants[0]} ${rows ? rowVariants[rows - 1] : rowVariants[0]} rounded-3xl p-5`}
      style={{
        boxShadow: `-4.5px -4.5px 6px 0 #cbd1d9 inset,
                5.25px 5.25px 9px 0 #ffffff inset,
                4.5px 4.5px 10.5px 0 #cbd1d9,
                -2.25px -2.25px 9px 0 #ffffff`,
      }}
    >
      <img
        className='object-cover min-h-full min-w-full rounded-2xl'
        src={image}
        loading='lazy'
      />
    </div>
  );
}
