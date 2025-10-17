import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";

export default function CursorTrail() {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const move = (e) => {
      const { clientX, clientY } = e;
      setTrail((prev) => [...prev.slice(-15), { x: clientX, y: clientY }]); 
      // sirf last 15 positions rakhta hai (lehro jaisi line)
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {trail.map((pos, index) => (
        <motion.div
          key={index}
          className="trail-dot"
          animate={{
            x: pos.x - 10,
            y: pos.y - 10,
            opacity: 1 - index / trail.length, // gradually fade
          }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
          style={{
            scale: 1 - index * 0.05, // small se small
          }}
        />
      ))}
    </>
  );
}
