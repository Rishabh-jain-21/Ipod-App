import React from "react";
import ScreenNavbar from "./ScreenNavbar";
export const SideComponent = (props) => {
  return (
    <div
      style={{
        width: "65%",
        height: "100%",
        zIndex: 5,
        backgroundColor: "white",
      }}
    >
      <ScreenNavbar activeState={props.activeState} />
    </div>
  );
};
