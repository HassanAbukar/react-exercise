import { useState, useEffect } from 'react';

const WindowWidthTracker = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // 1) Add event listener on mount
    window.addEventListener('resize', handleResize);

    // 2) Cleanup: remove event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Only runs once on mount

  return <p>Window width: {width}px</p>;
};

export default WindowWidthTracker;
