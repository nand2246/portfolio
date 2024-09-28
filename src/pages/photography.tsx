import GlassTransition from '../components/GlassTransition';

export default function Photography() {
  return (
    <GlassTransition>
      <div className='p-5 max-w-screen-lg mx-auto'>
        {/* portfolio title text */}
        <h1 className='text-5xl sm:text-7xl text-blue-200 inset-text text-center font-mono pb-6 sm:pb-10'>
          photography
        </h1>
      </div>
    </GlassTransition>
  );
}
