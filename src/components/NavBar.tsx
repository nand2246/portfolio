import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='sticky top-0 left-0 w-full bg-blue-50 pt-3 px-2 z-40'>
      <div
        className='p-4 rounded-3xl'
        style={{
          boxShadow: `-3px -3px 4px 0 #cbd1d9 inset,
                      3.5px 3.5px 6px 0 #ffffff inset,
                      3px 3px 7px 0 #cbd1d9,
                      -1.5px -1.5px 6px 0 #ffffff`,
        }}
      >
        <Link to='/portfolio' className='pr-3'>
          portfolio
        </Link>
        <Link to='/photography' className='pr-3'>
          photography
        </Link>
      </div>
    </div>
  );
}
