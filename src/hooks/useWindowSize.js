// hooks/useWindowSize.js
import { useState, useEffect } from 'react';

const useWindowSize = () => {
  // Initial state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
  });
  
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const width = window.innerWidth;
      
      // Update window size state
      setWindowSize({
        width: width,
        height: window.innerHeight,
        isMobile: width < 576,
        isTablet: width >= 576 && width < 992,
        isLaptop: width >= 992 && width < 1200,
        isDesktop: width >= 1200,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount
  
  return windowSize;
};

export default useWindowSize;