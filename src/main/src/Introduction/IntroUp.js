// IntroUp.js
import React from "react";
import AboutUp from "./components/AboutUp";
import AskUp from "./components/AskUp";

const IntroUp = () => {
    const text = "Tell me about yourself, but in Lakshay's cool vibe! 🌟";


  const thinkingBoxImage = "https://i.ibb.co/r3rxTt4/1.png"; 
  const mood = "thinking"; 

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#385aed", display: "flex", justifyContent: "center", alignItems: "center" }}>
 <AboutUp text={text} thinkingBoxImage={thinkingBoxImage} mascotImage={mood} mood={mood}/>
 {/* <AskUp text={text} thinkingBoxImage={thinkingBoxImage} mascotImage={mood} mood={mood}/> */}
    </div>
  );
};

export default IntroUp;
