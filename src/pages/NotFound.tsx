import { useNavigate } from "react-router-dom"


const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='relative items-center justify-around flex h-screen w-screen bg-slate-500 dark:bg-sky-800'>
      <div className='flex pb-6 text-4xl font-medium text-slate-800 dark:text-black text-center absolute top-1/4 left-1/5'>
          404 , Page Not Found !
      </div>
      <div className="flex">
        <button onClick={() => navigate('/')}
        className="absolute focus:border-none text-xl font-semibold
        hover:border-b-slate-700 border-b-4 border-b-slate-300 
        outline-none w-32 h-14 top-1/2 left-1/3 ml-44 rounded-lg 
        dark:bg-amber-600 dark:text-white/80 text-slate-800 
        bg-slate-600 transition ease-in-out duration-500">
          Home
        </button>
      </div>
    </div>
  )
}

export default NotFound