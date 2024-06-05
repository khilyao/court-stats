import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize, true);

    return () => window.removeEventListener("resize", handleResize, true);
  }, []);

  return { windowWidth, handleResize };
};

export const useMediaQuery = (maxWidth: number) => {
  const { windowWidth, handleResize } = useWindowWidth();
  const [isMedia, setIsMedia] = useState(false);

  useEffect(() => {
    if (windowWidth <= maxWidth) {
      setIsMedia(true);
    } else {
      setIsMedia(false);
    }
  }, [handleResize, maxWidth, windowWidth]);

  return isMedia;
};
