import React, { useState } from 'react';
import ListBox from '../components/ListBox';
import './Encrypt.css';

const Encrypt:React.FC = () => {

  const handleSubmit = () => {
    console.log("Hello");
  }


  return(
    <div className="flex flex-col w-full h-auto justify-center items-center">
      <h1 className='text-6xl pt-16 pb-6 dark:text-slate-200 text-zinc-600'>
        Encrypt Plaintext
      </h1>
      <div className='pt-10 flex flex-col gap-5 w-1/2 justify-center'>
        <form onSubmit={() => handleSubmit} className='bg-slate-600 dark:bg-stone-700 rounded-xl p-5 hover:shadow-2xl transition ease-in-out'>
          <div className="flex flex-row gap-52 w-full pt-2 pb-2 items-center justify-evenly">
            <label 
              htmlFor='message'
              className='flex text-xl text-stone-950 dark:text-sky-300'>
                Plaintext
            </label>

            <input
              required
              name='message'
              id='message' 
              type='text'
              className='flex p-2 
                dark:text-lime-400 
                focus:border-blue-500 border-2
                dark:bg-stone-500
                w-52  
                font-medium rounded-lg outline-none px-6
                transition duration-300'
            />
          </div>
          
          <div className='flex flex-row gap-44 w-full pt-2 pb-2 justify-center'>
            <label 
              htmlFor='cover'
              className='flex text-xl dark:text-sky-300 text-stone-950'
            >
              Upload Cover Image
            </label>
            <input
              required
              id='cover' 
              type='file' 
              className='max-w-56 font-serif text-stone-800 dark:text-slate-400' 
            />
          </div> 
          <div className="flex flex-row gap-32 w-full pt-2 pb-2 justify-center items-center">
            <label className='text-xl dark:text-sky-300 text-stone-950'>
              Select Encryption Algorithm
            </label>
            <ListBox/>
          </div>
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
              Encrypt  
            </button> 
          </div>     
        </form>
      </div>
    </div>
  )
}

export default Encrypt;