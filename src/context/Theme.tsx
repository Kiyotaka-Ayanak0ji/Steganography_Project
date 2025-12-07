import React, { createContext, useEffect, useState } from "react";

//Create the interface for the context props...
interface ThemeContextProps {
    theme: string
    setTheme: (color: string) => void
}

//Create a Context using React's context API
//Initialize with default value of light...
const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    setTheme: () => {}
});

const ThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [theme,setTheme] = useState(localStorage.getItem("theme")??'light');
    
    useEffect(() => {
                
        if(theme === 'dark'){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("theme",theme);
        
    },[theme])

    const valueToShare = {
        theme,
        setTheme
    };

    return(
        <ThemeContext.Provider value={valueToShare}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext , ThemeProvider };