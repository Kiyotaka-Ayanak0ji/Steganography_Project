import React from "react";

const Card:React.FC = ({image , content }) => {
    return (
        <div className='flex flex-col gap-2 h-80 w-80 items-center 
        bg-slate-600 text-gray-800 rounded-lg hover:shadow-xl dark:bg-stone-700 dark:text-lime-400'
        >
            <div className='flex mt-2 mb-3 w-1/2 h-1/2 object-cover'>
                <img src={image} alt='Card Image'/>
            </div>
            <div className='flex text-xl text-left ml-2.5 w-11/12 justify-center'>
                {content}
            </div>
        </div>
    )
}

export default Card;