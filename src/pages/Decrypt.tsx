import React, { useState } from 'react'
import ListBox from '../components/ListBox'

const Decrypt: React.FC = () => {
    return(
<div className="flex flex-col w-full h-auto justify-center items-center">
      <h1 className='text-6xl pt-16 pb-6 dark:text-slate-200 text-zinc-600'>
        Decrypt Plaintext
      </h1>
      <div className='pt-10 flex flex-col gap-5 w-1/2 justify-center'>
        <form className='bg-slate-600 dark:bg-stone-700 rounded-xl p-5 hover:shadow-2xl transition ease-in-out'> 
          
          <div className="flex flex-row gap-32 w-full pt-2 pb-2 justify-center items-center">
            <label className='text-xl dark:text-sky-300 text-stone-950'>
              Select Encryption Algorithm
            </label>
            <ListBox/>
          </div>
          {/* Encryption key */}
          <div className='flex flex-row items-center justify-evenly gap-52 w-full pt-2 pb-5'>
            <label 
              htmlFor='key'
              className='flex text-xl dark:text-sky-300 text-stone-950'
            >
              Enter Key
            </label>
            <input
              required
              id='key' 
              type='text' 
              className='flex p-2 dark:text-lime-400 
              focus:border-blue-500 border-2 dark:bg-stone-500 
              font-medium w-52 rounded-lg outline-none
              pl-6' 
            />
          </div>
          
          <div className="w-full text-center">
            <button type='submit' className='text-xl text-white dark:text-blue-600 dark:bg-white/50 dark:hover:bg-white font-medium bg-blue-400 hover:bg-blue-600 rounded-lg p-2'>
              Decrypt  
            </button> 
          </div>     
        
        </form>
      </div>
    </div>
    )
}

export default Decrypt