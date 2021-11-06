import React, { useState } from "react";
import "./DesignWheel.css";
import Screen from "./Screen";
import ZingTouch from "zingtouch";

const DesignWheel = () => {
  const [activeState, setactiveState] = useState("nowPlaying");
  const rotateWheel = () => {
    var containerElement = document.getElementById("container-wheel");
    var activeRegion = ZingTouch.Region(containerElement);
    activeRegion.bind(containerElement, "rotate", function (event) {
      var newAngle = event.detail.distanceFromLast;
      console.log(newAngle);
    });
  };

  return (
    <>
      <Screen activeState={activeState} />
      <div className="wheel-body">
        <div
          className="outer-wheel"
          id="container-wheel"
          onMouseOver={rotateWheel}
        >
          <span className="position wheel-text-1">MENU</span>
          <span className="position wheel-text-2">
            <i className="fa fa-fast-forward" style={{ fontSize: "23px" }} />
          </span>
          <span className="position wheel-text-3">
            <i className="fa fa-play " style={{ fontSize: "19px" }} />
            <i className="fa fa-pause " style={{ fontSize: "19px" }} />
          </span>
          <span className="position wheel-text-4">
            <i className="fa fa-fast-backward " style={{ fontSize: "23px" }} />
          </span>
          <div className="inner-wheel"></div>
        </div>
      </div>
    </>
  );
};

export default DesignWheel;
