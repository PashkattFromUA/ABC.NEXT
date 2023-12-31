import { useEffect, useState } from 'react';

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState({
        width: undefined
    });

    useEffect(() => {

        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        setWindowWidth(window.innerWidth);
    
        window.addEventListener('resize', handleResize);

        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return windowWidth;
};

export default useWindowWidth;
