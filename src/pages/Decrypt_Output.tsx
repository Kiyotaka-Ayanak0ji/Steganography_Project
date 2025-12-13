import React from 'react'
import toast from 'react-hot-toast';

interface DecryptOutputProps{
    text: string;
}

const Decrypt_Output:React.FC<DecryptOutputProps> = ({Text}) => {
    const handleClick = () => {
        //Fetch the text element..
        var text:HTMLInputElement = document.getElementById('decrypt-text');

        //Select the text..
        text.select();
        text.setSelectionRange(0,99999); //For mobile devices

        //Copy the text to the clipboard..
        navigator.clipboard.writeText(text.value);

        //Alert the copied text..
        // alert("Copied");
        toast.success("Copied" + text.value,{
            className: 'font-semibold'
        });
    }
  return (
    <div className='relative flex flex-col gap-10 h-screen w-screen items-center justify-center'>
        <div className="flex w-1/2 items-center justify-center">
            <span className='flex flex-row gap-10 '>
                <p className='dark:text-cyan-200 text-neutral-600 text-2xl'>The decrypted text is</p>
                <input disabled id="decrypt-text" type="text" value={Text} 
                className='rounded-lg cursor-none w-30 text-center bg-slate-600 
                dark:bg-stone-600 text-xl dark:text-amber-300 text-white'/>
            </span>
        </div>
        <div className="flex pt-2">
            <button onClick={() => handleClick()} className='bg-blue-400 hover:bg-blue-600
            w-24 h-12 md:rounded-lg lg:rounded-xl transition duration-300
            text-white dark:shadow-lg hover:dark:shadow-stone-500 text-center'>
                <div className='flex flex-row gap-2 justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                    </svg>
                    Copy
                </div>
            </button>
        </div>
    </div>
  )
}

export default Decrypt_Output