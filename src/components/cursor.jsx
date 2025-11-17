import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.top = e.pageY - 5 + "px";
      cursorRef.current.style.left = e.pageX - 5 + "px";
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
}
