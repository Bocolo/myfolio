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

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme):setMode('pink')
        setMountedComponent(true)
    }, []);
    return [theme, themeToggler, mountedComponent]
};