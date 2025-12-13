import React, { useState } from 'react';

interface ListboxProps{
    selected: string,
    setSelected: (arg:string) => void
}

const ListBox:React.FC<ListboxProps> = ({selected,setSelected}) => {
    const [open, setOpen] = useState(false);

    const encryption_algorithms = [
        { id: 1, name: 'Default(AES)' },
        { id: 2, name: 'Caesar Cipher' },
    ];

    const handleChange = (name: string) => {
        setSelected(name);
        setOpen(false);
    };

    return (
        <div className="relative w-48 flex flex-col gap-1">
            <button type='button'
                className="w-40 flex flex-row gap-3 rounded-lg 
                bg-slate-200 dark:bg-stone-800 dark:border-slate-100 border-[1px] 
                dark:text-cyan-200 p-2 justify-around"
                onClick={() => setOpen(!open)}
            >
                {selected}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            <ul
                className={`absolute top-full left-0 bg-slate-400 rounded-lg mt-1 w-full z-20
                ${open ? 'flex flex-col gap-2' : 'hidden'}`}
            >
                {encryption_algorithms.map((algo) => (
                    <li 
                        key={algo.id}
                        className="rounded-lg hover:bg-slate-500 cursor-pointer p-1"
                        onClick={() => handleChange(algo.name)}
                    >
                        {algo.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ListBox;
