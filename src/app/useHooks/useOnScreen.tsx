"use client";

import { useEffect, useState } from "react";

export const useOnScreen = (ref: { current: any; }) => {
  const [isOnScreen, setOnScreen] = useState(false);

  useEffect(() => {
    // Check if IntersectionObserver is available (client-side only)
    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => setOnScreen(entry.isIntersecting),
        {
          threshold: [0.25, 0.5, 0.75],
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.disconnect();
        }
      };
    }
  }, [ref]); // Ensure ref is included in the dependency array

  return isOnScreen;
};
