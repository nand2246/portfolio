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
        <Card>
          <div className='p-6 h-96 w-full rounded-3xl'>
            <img
              className='object-cover h-full w-full rounded-3xl'
              src='https://www.researchgate.net/publication/224624453/figure/fig1/AS:393833717223438@1470908683517/Original-colour-bar-static-test-image-used-in-analogue-television-II-METHODOLOGY.png'
            />
          </div>
        </Card>
      </div>
    </GlassTransition>
  );
}
