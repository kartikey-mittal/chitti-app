import React from "react";
import AboutUp from "./components/AboutUp";

const IntroUp = () => {
  const text = "hey lakshay what are you doing";
  const thinkingBoxImage = "https://i.ibb.co/r3rxTt4/1.png"; 
  const mood = "happy"; 
  
  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#385AEB", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <AboutUp text={text} thinkingBoxImage={thinkingBoxImage} mascotImage={mood} mood={mood}/>
    </div>
  );
};

export default IntroUp;
