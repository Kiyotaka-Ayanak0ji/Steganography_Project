import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

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
          <div className="flex flex-row gap-52 w-full ml-1 pt-2 pb-2 items-center justify-around">
            <label 
              htmlFor='message'
              className='flex text-xl text-stone-950 dark:text-sky-300'>
                Plaintext
            </label>
            <div className="relative">
              <input
                name='message'
                id='message' 
                type='text'
                className='flex p-2 
                  dark:text-lime-400 
                  focus:border-blue-500 border-2
                  dark:bg-stone-500 
                  font-medium rounded'
              />
              <span
                className='absolute left-1.5 top-1.5 text-xl text-neutral-500 dark:text-blue-900'
              >
                Message
              </span>
            </div>
          </div>
          
          <div className='flex flex-row gap-52 w-full pt-2 pb-2 justify-center'>
            <label 
              htmlFor='cover'
              className='flex text-xl dark:text-sky-300 text-stone-950'
            >
              Upload Cover Image
            </label>
            <input
              id='cover' 
              type='file' 
              placeholder='Upload Cover Image'
              className='max-w-52 font-serif text-stone-800 dark:text-slate-400' 
            />
          </div> 
          <div className="flex flex-row gap-48 w-full pt-2 pb-2 justify-center">
            <label className='text-xl dark:text-sky-300 text-stone-950'>
              Select Encryption Algorithm
            </label>
            <Menu>
              <MenuButton className={'inline-flex dark:text-cyan-100 text-stone-900 rounded w-fit p-1 items-center text-xl gap-2 outline-black/5 hover:opacity-100 focus:outline-none data-open:bg-slate-500 dark:data-open:bg-stone-500 data-focus:bg-slate-500 dark:data-focus:bg-stone-500 dark:bg-stone-500 bg-slate-500 opacity-60'}>
                Default (AES)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 flex-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </MenuButton>
              <MenuItems 
                transition
                anchor="bottom end"
                className={'w-72 origin-top-right p-1 rounded-xl bg-slate-700 dark:bg-stone-700 transition duration-100 ease-out outline-black/50 dark:outline-white/10 focus:outline-none data-closed:outline-none'}
              >
                <MenuItem>
                  <button
                   className='group rounded-xl w-full justify-center text-cyan-200 dark:text-emerald-400 hover:bg-slate-500 dark:hover:bg-stone-600'
                   >
                    RSA
                  </button>
                </MenuItem>
                <div className='my-1 h-px bg-slate-200/20 dark:bg-stone-400/25'/>
                <MenuItem>
                  <button
                    className='group rounded-xl w-full justify-center text-cyan-200 dark:text-emerald-400 hover:bg-slate-500 dark:hover:bg-stone-600'
                  >
                    Ceasar Cipher
                  </button>
                </MenuItem>
                <div className='my-1 h-px bg-slate-200/20 dark:bg-stone-400/25'/>
                <MenuItem>
                  <button
                    className='group rounded-xl w-full justify-center flex text-cyan-200 dark:text-emerald-400 hover:bg-slate-500 dark:hover:bg-stone-600'
                  >
                    Blowfish
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>     
        </form>
      </div>
    </div>
  )
}

export default Encrypt;