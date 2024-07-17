import React, { useState, useEffect } from "react";
import DownHome from "./DownHome";
import UpHome from "./UpHome";

const HomePage = () => {
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
          <UpHome/>
          </div>
          <div style={{ height: "50vh", backgroundColor: "pink",padding:0 }}>
         <DownHome/>
          </div>
        </>
      ) : (
        "desktop"
      )}
    </div>
  );
};

export default HomePage;
