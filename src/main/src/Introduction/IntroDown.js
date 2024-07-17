// IntroUp.js
import React from "react";
import AskDown from "./components/AskDown";
import AboutDown from "./components/AboutDown";

const IntroDown = () => {
  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* <p>INTRODOWN.JS</p> */}
      {/* <AskDown/> */}
      <AboutDown/>
    </div>
  );
};

export default IntroDown;
