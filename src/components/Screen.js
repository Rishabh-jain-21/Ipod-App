import React from "react";
import "./DesignWheel.css";
import { SideComponent } from "./SideComponent";
const Screen = (props) => {
  return (
    <div className="Screen-body">
      <div className="Main-Screen">
        <SideComponent activeState={props.activeState} />
      </div>
    </div>
  );
};
export default Screen;
