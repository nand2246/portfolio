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
              <ImageCard image='/photography/image-9.png' />
              <ImageCard image='/photography/image-3.png' cols={2} />

              <ImageCard image='/photography/image-6.png' rows={2} cols={2} />
              <ImageCard image='/photography/image-5.png' />
              <ImageCard image='/photography/image-4.png' />

              <ImageCard image='/photography/image-1.png' />
              <ImageCard image='/photography/image-2.png' />
              <ImageCard image='/photography/image-11.png' />

              <ImageCard image='/photography/image-14.png' />
              <ImageCard image='/photography/image-10.png' cols={2} />

              <ImageCard image='/photography/image-8.png' cols={2} />
              <ImageCard image='/photography/image-7.png' />

              <ImageCard image='/photography/image-12.png' />
              <ImageCard image='/photography/image-13.png' cols={2} />

              <ImageCard image='/photography/image-15.png' cols={3} rows={2} />

              <ImageCard image='/photography/image-16.png' cols={2} />
              <ImageCard image='/photography/image-17.png' />
            </div>
          </Card>
        </div>
      </div>
    </GlassTransition>
  );
}
