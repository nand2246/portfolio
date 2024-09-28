import Card from '../components/Card';
import GlassTransition from '../components/GlassTransition';

export default function Photography() {
  return (
    <GlassTransition>
      <div className='py-4 px-8 max-w-screen-lg mx-auto'>
        {/* portfolio title text */}
        <h1 className='text-4xl sm:text-7xl text-blue-200 inset-text text-center font-mono pb-6 sm:pb-10'>
          photography
        </h1>
        <Card>test</Card>
      </div>
    </GlassTransition>
  );
}
