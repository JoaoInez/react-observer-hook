# react-observer-hook

Simple hook that returns whether the element is in view or not.
## Example

```javascript
import React, { useRef, useEffect } from "react";
import { useObserver } from "./hooks/observer";

const App = () => {
  const elem = useRef();
  const [setElem, visible] = useObserver();

  useEffect(() => {
    setElem(elem.current);
  }, []);

  useEffect(() => {
    if (visible) {
      console.log(`I'm visible`);
    }
  }, [visible]);

  return (
    <>
      <div style={{ height: "100vh" }} />
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1
          style={{
            transform: visible ? "translateY(0)" : "translateY(100px)",
            opacity: visible ? 1 : 0,
            transition: `all ${visible ? "1s" : "0s"} ease-in-out`
          }}
          ref={elem}
        >
          Hello
        </h1>
      </div>
    </>
  );
};

export default App;
```
