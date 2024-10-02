import Card from '../../components/Card';
import GlassTransition from '../../components/GlassTransition';
import ImageCard from './components/ImageCard';

export default function Photography() {
  return (
    <GlassTransition>
      <div className='py-4 px-8 max-w-screen-lg mx-auto'>
        {/* title text */}
        <h1 className='text-4xl sm:text-7xl text-[#0298e3] inset-text text-center font-mono'>
          photography
        </h1>

        {/* photos */}
        <div className='pt-6 sm:pt-10'>
          <Card>
            <div className='grid grid-cols-3 gap-6 p-6 h-fit w-full rounded-3xl'>
              <ImageCard image='/photography/image-9.webp' />
              <ImageCard image='/photography/image-3.webp' cols={2} />

              <ImageCard image='/photography/image-6.webp' rows={2} cols={2} />
              <ImageCard image='/photography/image-5.webp' />
              <ImageCard image='/photography/image-4.webp' />

              <ImageCard image='/photography/image-1.webp' />
              <ImageCard image='/photography/image-2.webp' />
              <ImageCard image='/photography/image-11.webp' />

              <ImageCard image='/photography/image-14.webp' />
              <ImageCard image='/photography/image-10.webp' cols={2} />

              <ImageCard image='/photography/image-8.webp' cols={2} />
              <ImageCard image='/photography/image-7.webp' />

              <ImageCard image='/photography/image-12.webp' />
              <ImageCard image='/photography/image-13.webp' cols={2} />

              <ImageCard image='/photography/image-15.webp' cols={3} rows={2} />

              <ImageCard image='/photography/image-16.webp' cols={2} />
              <ImageCard image='/photography/image-17.webp' />
            </div>
          </Card>
        </div>
      </div>
    </GlassTransition>
  );
}
