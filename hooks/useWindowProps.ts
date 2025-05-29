import { useState, useEffect } from "react";

type WindowProps = {
  width: number;
  height: number;
  orientation: string;
  isMobile: boolean;
};

const useWindowProps = (): WindowProps => {
  const [windowSize, setWindowSize] = useState<WindowProps>({
    width: 0,
    height: 0,
    orientation: "portrait",
    isMobile: false,
  });

  useEffect(() => {
    const getSize = (): WindowProps => ({
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait",
      isMobile: window.innerWidth < window.innerHeight && window.innerWidth < 768,
    });

    const handleResize = () => {
      setWindowSize(getSize());
    };

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowProps;