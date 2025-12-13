import React, { useState } from 'react';
import ListBox from '../components/ListBox';
import './Encrypt.css';
import toast from 'react-hot-toast';

//Response type..
type EncryptResponse = 
  {success: true, type: "image", output_image_url: string} |
  {success: true, type: "text", ciphertext: string} |
  {error: string};

const Encrypt:React.FC = () => {

  //Manage state for form data...
  const [algorithm, setAlgorithm] = useState("Default(AES)"); // Pass as prop to Listbox to track changes...
  const [plaintext,setPlaintext] = useState("");
  const [key,setKey] = useState("");
  const [imageFile,setImageFile] = useState<File|null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    //Initial debug
    console.log(algorithm);
    e.preventDefault();

    const formData = new FormData();
    formData.append("algoritm",algorithm);
    formData.append("plaintext",plaintext);
    formData.append("key",key);
    if(imageFile){
      formData.append("image",imageFile);
    }
    //Debug
    for (let p of formData.entries()){
      console.log(p)
    }

    //Middleware..
    const response = await fetch('http://localhost:500/api/encrypt', {
      method: "POST",
      body: formData
    });

    const data:EncryptResponse = await response.json();

    if("error" in data){
      toast.error(data.error);

      //Toast the error...
      return;
    }
  }

  return(
    <div className="flex flex-col w-full h-auto justify-center items-center">
      <h1 className='text-6xl pt-16 pb-6 dark:text-slate-200 text-zinc-600'>
        Encrypt Plaintext
      </h1>
      <div className='pt-10 flex flex-col gap-5 w-1/2 justify-center'>
        <form onSubmit={handleSubmit} className='bg-slate-600 dark:bg-stone-700 rounded-xl p-5 hover:shadow-2xl transition ease-in-out'>
          <div className="flex flex-row gap-52 w-full pt-2 pb-2 items-center justify-evenly">
            <label 
              htmlFor='plaintext'
              className='flex text-xl text-stone-950 dark:text-sky-300'>
                Plaintext
            </label>

            <input
              required
              name='plaintext'
              id='plaintext' 
              type='text'
              onChange={(e) => setPlaintext(e.target.value)}
              className='flex p-2 
                dark:text-lime-400 
                focus:border-blue-500 border-2
                dark:bg-stone-500
                w-52  
                font-medium rounded-lg outline-none px-6
                transition duration-300'
            />
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
              name='key'
              type='text'
              onChange={(e) => setKey(e.target.value)} 
              className='flex p-2 dark:text-lime-400 
              focus:border-blue-500 border-2 dark:bg-stone-500 
              font-medium w-52 rounded-lg outline-none
              pl-6' 
            />
          </div>

          <div className="flex flex-row gap-32 w-full pb-2 justify-around items-center">
            <label className='text-xl dark:text-sky-300 text-stone-950'>
              Select Encryption Algorithm
            </label>
            <ListBox selected={algorithm} setSelected={setAlgorithm}/>
          </div>

          <div className='flex flex-row gap-44 w-full pt-2 pb-2 justify-evenly items-center'>
            <label 
              htmlFor='image'
              className='flex text-xl dark:text-sky-300 text-stone-950'
            >
              Upload Cover Image
            </label>
            <input
              id='image'
              name='cover_image'
              onChange={(e) => {
                if(e.target.files && e.target.files[0]){
                  setImageFile(e.target.files[0]);
                }
              }} 
              type='file' 
              className='hidden max-w-56 font-serif text-stone-800 dark:text-slate-400' 
            />

            <label 
              htmlFor="image"
              className="
                cursor-pointer
                bg-blue-500 
                hover:bg-blue-600 
                text-white 
                dark:bg-stone-600 
                dark:hover:bg-stone-500
                dark:text-amber-200
                text-lg
                px-4 py-2 
                rounded-lg 
                transition
                duration-300
                max-w-56
                text-center">
              Choose File
            </label>
          </div>

          <div className="w-full text-center">
            <button type='submit' className='text-xl w-28 font-semibold transition ease-in-out text-white hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-stone-500 dark:text-blue-600 dark:bg-white/50 dark:hover:bg-white bg-blue-400 hover:bg-blue-600 rounded-lg p-2'>
              Encrypt  
            </button> 
          </div>     
        </form>
      </div>
    </div>
  )
}

export default Encrypt;