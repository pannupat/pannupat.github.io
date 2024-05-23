import { useState, useEffect } from "react";
import { useCursorify } from "@cursorify/react";
import Disable from "./CursorImage/spookyCursor.gif";
import Pointer from "./CursorImage/spookyClick.gif";
import Click from "./CursorImage/spookyPointer.gif";

const Cursor = () => {
  const { mouseState, style } = useCursorify();
  const [disabled] = useState(false);
  const [flip, setFlip] = useState(false);
  const [prevMouseX, setPrevMouseX] = useState(window.innerWidth / 2);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (event.clientX < prevMouseX) {
        setFlip(true);
      } else if (event.clientX > prevMouseX) {
        setFlip(false);
      }
      setPrevMouseX(event.clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [prevMouseX]);

  return (
    <div
      style={{
        width: 60,
        height: 60,
        fontSize: 30,
      }}
    >
      {(() => {
        if (disabled) {
          return (
            <img
              src={Disable}
              alt=""
              style={{
                transform: flip ? "scaleX(-1)" : "scaleX(1)",
              }}
            />
          );
        }
        if (mouseState === "mouseDown") return <img src={Click} alt="" />;

        if (style === "pointer")
          return (
            <div className="-mx-2">
              {" "}
              <img src={Pointer} alt="" />
            </div>
          );
        return (
          <img
            src={Disable}
            alt=""
            style={{
              transform: flip ? "scaleX(-1)" : "scaleX(1)",
            }}
          />
        );
      })()}
    </div>
  );
};

export default Cursor;
