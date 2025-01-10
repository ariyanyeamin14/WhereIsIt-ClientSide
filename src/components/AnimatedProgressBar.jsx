import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null); // Reference to the progress bar container

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startProgress(); // Start progress when the element is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  const startProgress = () => {
    setProgress(0); // Reset progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {          // Percentage value
          clearInterval(timer);
          return 100;               // Percentage value
        }
        return prev + 10; // Increment progress by 10% every 300ms
      });
    }, 300);
  };

  return (
    <div
      ref={progressRef} // Attach the ref to the container
      style={{
        width: "100%",
        height: "20px",
        background: "black",
        borderRadius: "5px",
        overflow: "hidden",
        margin: "50px 0", // Add some margin for better visibility during scrolling
      }}
    >
      <motion.div
        style={{
          height: "100%",
          background: "#ec570d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "bold",
        }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      >
        {progress}%
      </motion.div>
    </div>
  );
};

export default AnimatedProgressBar;
