import React, { useLayoutEffect, useState } from "react";

const useWindowSize = (): { width: number; height: number } => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const [width, height] = size;
  return { width, height };
};

export { useWindowSize };
