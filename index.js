import { useState, useEffect, useRef } from "react";

const useObserver = () => {
  const [visible, setVisible] = useState(false);
  const [elem, setElem] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting)
    );

    elem && observer.current.observe(elem);

    return () => observer.current.disconnect();
  }, [elem]);

  return [setElem, visible];
};

export { useObserver };
