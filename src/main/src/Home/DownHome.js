// DownHome.js
import React, { useState } from "react";
import BS1 from "./components/BS1";

const DownHome = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <p>DownHome.JS</p>
      <button onClick={toggleBottomSheet} style={{ marginLeft: "1rem" }}>
        Open Bottom Sheet
      </button>
      <BS1 isOpen1={isBottomSheetVisible} toggleSheet={toggleBottomSheet} />
    </div>
  );
};

export default DownHome;
