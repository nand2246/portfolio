import { Link } from 'react-router-dom';
import GlassTransition from './GlassTransition';

export default function NotFound() {
  return (
    <GlassTransition>
      <div className='pt-10 text-center'>
        <div>this page does not exist</div>
        <Link to={'/portfolio'} className='text-blue-600 font-bold'>
          return to portfolio
        </Link>
      </div>
    </GlassTransition>
  );
}
