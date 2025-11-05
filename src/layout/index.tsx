import Navbar from './Navbar'
import Home from './Home';

const Layout = () => {
  return (
    <div className='w-full h-full flex flex-col'>
        <div className='flex w-full h-1/4 items-center justify-center'>
          <Navbar/>
        </div>
        <div className='flex w-full h-3/4 justify-center items-center'>
          <Home/>
        </div>
    </div>
  );
}

export default Layout;