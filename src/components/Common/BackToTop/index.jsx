import React, { useEffect, useState } from "react";
import "./styles.css";

import { ArrowUpwardRounded } from "@mui/icons-material";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Set isVisible state based on scroll position
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="back-to-top-btn"
          id="myBtn"
          onClick={() => topFunction()}
        >
          <ArrowUpwardRounded
            className="icon"
            style={{ color: "var(--blue)" }}
          />
        </div>
      )}
    </>
  );
};

export default BackToTop;
