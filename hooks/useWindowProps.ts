import { useState, useEffect } from "react";

type WindowProps = {
  width: number;
  height: number;
  orientation: string;
  isMobile: boolean;
};

const useWindowProps = (): WindowProps => {
  const getSize = () => ({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    orientation:
      typeof window !== "undefined" && window.innerWidth > window.innerHeight
        ? "landscape"
        : "portrait",
    isMobile:
      typeof window !== "undefined" &&
      window.innerWidth < window.innerHeight &&
      window.innerWidth < 768,
  });

  const [windowSize, setWindowSize] = useState<WindowProps>(getSize);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize(getSize());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
};

export default useWindowProps;
