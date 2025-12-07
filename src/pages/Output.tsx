import React from 'react'

const Output = () => {
  return (
    <div className='relative flex flex-col gap-10 items-center justify-center w-screen h-screen'>
        <div className='flex sm:rounded-lg lg:rounded-xl bg-slate-400 dark:bg-stone-500 items-center w-2/5 h-3/5'>
          {/* Encrypted Picture */}
        </div>
        <div className='flex flex-col gap-10 justify-center'>
          {/* Download option */}
          <a href="/" download={'1.jpg'}>
            <button className='w-36 h-12 text-xl hover:bg-white 
            hover:text-blue-600 transition ease-in-out duration-300 
            rounded-xl bg-blue-500 text-white p-2 justify-start text-right'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download
            </button>
          </a>
        </div>
    </div>
  )
}

export default Output