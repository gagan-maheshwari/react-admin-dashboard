import react, {useEffect} from 'react';

import ThemeSettings from '../components/ThemeSettings';
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettingsParent = () => {
	const {setThemeSettings } = useStateContext();

    const closeOnClick = (e) => {
        setThemeSettings(false);
    };

    const handleEscapeKey = (event) => {
        if (event.code === 'Escape') {
          setThemeSettings(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscapeKey);
        
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        }
    }, []);   

    return (
        <>
            <div className='bg-half-transparent w-full h-screen fixed nav-item top-0 right-0' onClick={closeOnClick}></div>
            <ThemeSettings />
        </>
    );
}

export default ThemeSettingsParent;
