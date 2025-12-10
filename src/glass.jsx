import { useRef, useEffect } from "react";

const Glass = ({ containerRef }) => {
  const glassRef = useRef(null);

  const posX = useRef(0);
  const posY = useRef(0);

  const offsetX = useRef(0);
  const offsetY = useRef(0);

  const containerRectRef = useRef(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    isDragging.current = true;

    containerRectRef.current = containerRef.current.getBoundingClientRect();

    const glassRect = glassRef.current.getBoundingClientRect();

    offsetX.current = e.clientX - glassRect.left;
    offsetY.current = e.clientY - glassRect.top;

    posX.current = glassRect.left - containerRectRef.current.left;
    posY.current = glassRect.top - containerRectRef.current.top;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    glassRef.current.classList.add("dragging");

    const containerRect = containerRectRef.current;
    const glassRect = glassRef.current.getBoundingClientRect();

    let newX = e.clientX - containerRect.left - offsetX.current;
    let newY = e.clientY - containerRect.top - offsetY.current;

    // left
    if (newX < 0) newX = 0;

    // top
    if (newY < 0) newY = 0;

    // right
    if (newX > containerRect.width - glassRect.width) {
      newX = containerRect.width - glassRect.width;
    }

    // left
    if (newY > containerRect.height - glassRect.height) {
      newY = containerRect.height - glassRect.height;
    }

    posX.current = newX;
    posY.current = newY;

    glassRef.current.style.left = newX + "px";
    glassRef.current.style.top = newY + "px";
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    glassRef.current.classList.remove("dragging");
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className="glass"
      ref={glassRef}
      onMouseDown={handleMouseDown}
      style={{ left: 0, top: 0 }}
    />
  );
};

export default Glass;
