import { useEffect, useState } from 'react';


export const useDarkMode = () => {
    const [theme, setTheme] = useState('pink');
    const [mountedComponent, setMountedComponent]=useState(false);
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'pink' ? setMode('dark') : setMode('pink')
      };
      const themeSetter =({theme}) =>{
          setMode(theme)
      }
    const themePink =()=>{
        setMode('pink')
    }

    const themeDark =()=>{
        setMode('dark')
    }
    const themeWhite =()=>{
        setMode('white')
    }
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme):setMode('pink')
        setMountedComponent(true)
    }, []);
    return [theme, themeToggler,themePink,themeDark, themeWhite, mountedComponent]
};

// if(theme === 'pink'){
//     setMode('dark');
//     setTheme('dark')
//   }
//   if(theme === 'white'){
    
//     setMode('pink')
//     setTheme('pink')
//   if(theme === 'dark'){
    
//     setMode('white')
//     setTheme('white')
//   }