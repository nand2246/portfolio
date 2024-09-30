import Card from '../components/Card';
import GlassTransition from '../components/GlassTransition';

export default function Photography() {
  return (
    <GlassTransition>
      <div className='py-4 px-8 max-w-screen-lg mx-auto'>
        {/* title text */}
        <h1 className='text-4xl sm:text-7xl text-[#0298e3] inset-text text-center font-mono pb-6 sm:pb-10'>
          photography
        </h1>
        <Card>
          <div className='flex flex-wrap gap-6 p-6 h-fit w-full rounded-3xl'>
            <div
              className='flex-auto w-full sm:w-1/4 rounded-3xl p-5'
              style={{
                boxShadow: `-4.5px -4.5px 6px 0 #cbd1d9 inset,
                5.25px 5.25px 9px 0 #ffffff inset,
                4.5px 4.5px 10.5px 0 #cbd1d9,
                -2.25px -2.25px 9px 0 #ffffff`,
              }}
            >
              <img
                className='object-cover min-h-full min-w-full rounded-2xl'
                src='https://t3.ftcdn.net/jpg/01/42/62/84/360_F_142628436_BdXXMV34Xf665lwSRmBbAVICjFXh7vG9.jpg'
              />
            </div>
            <div
              className='flex-auto w-full sm:w-1/4 rounded-3xl p-4'
              style={{
                boxShadow: `4.5px 4.5px 6px 0 #cbd1d9 inset,
                -5.25px -5.25px 9px 0 #ffffff inset,
                -4.5px -4.5px 10.5px 0 #cbd1d9,
                2.25px 2.25px 9px 0 #ffffff`,
              }}
            >
              <img
                className='object-cover h-full rounded-3xl'
                src='https://t3.ftcdn.net/jpg/01/42/62/84/360_F_142628436_BdXXMV34Xf665lwSRmBbAVICjFXh7vG9.jpg'
              />
            </div>
            <div
              className='flex-auto w-full sm:w-1/4 rounded-3xl p-3'
              style={{
                boxShadow: `6px 6px 14px 0 #cbd1d9,
   -7px -7px 12px 0 #ffffff`,
              }}
            >
              <img
                className='object-cover min-h-full min-w-full rounded-3xl'
                src='https://t3.ftcdn.net/jpg/01/42/62/84/360_F_142628436_BdXXMV34Xf665lwSRmBbAVICjFXh7vG9.jpg'
              />
            </div>
          </div>
        </Card>
      </div>
    </GlassTransition>
  );
}
