import React, { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.top = e.pageY + "px";
      cursorRef.current.style.left = e.pageX + "px";
    };

    const checkHover = (e) => {
      const target = e.target;
      // Si l'élément est cliquable
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.classList.contains("clickable")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousemove", checkHover);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousemove", checkHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${hovering ? "cursor-hover" : ""}`}
    ></div>
  );
}
