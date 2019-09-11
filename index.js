import { useState, useEffect, useRef } from "react";

const useObserver = (once = false) => {
  const [visible, setVisible] = useState(false);
  const elem = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], _observer) => {
      if (entry.intersectionRatio > 0) {
        setVisible(true);
        once && _observer.disconnect();
      } else {
        setVisible(false);
      }
    });

    elem && elem.current && observer.observe(elem.current);

    return () => observer.disconnect();
  }, [once]);

  return [elem, visible];
};

export { useObserver };
