import React, { useState, useEffect } from "react";
import IntroUp from "./IntroUp"; // Ensure the path is correct based on your file structure
import IntroDown from "./IntroDown"; // Ensure the path is correct based on your file structure

const Introduction = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 615);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 615);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobileView ? (
        <>
          <div style={{ height: "50vh", backgroundColor: "pink" ,padding:0}}>
            <IntroUp />
          </div>
          <div style={{ height: "50vh", backgroundColor: "pink",padding:0 }}>
            <IntroDown />
          </div>
        </>
      ) : (
        "desktop"
      )}
    </div>
  );
};

export default Introduction;
