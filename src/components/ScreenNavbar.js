import React from "react";
import chargingico from "./smartphone-charger.png";

const ScreenNavbar = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="topComponent">
        iPod
        <img style={{ width: 20 }} src={chargingico} alt="chargin-Photu" />
      </div>
      <ul style={{ listStyle: "none" }} className="list-item">
        <li className={props.activeState === "nowPlaying" ? "active" : ""}>
          Now Playing
          {props.activeState === "nowPlaying" ? (
            <span
              style={{
                float: "right",
                fontWeight: "bold",
                paddingRight: "5px",
              }}
            >
              &gt;
            </span>
          ) : (
            ""
          )}
        </li>
        <li className="">Muisc</li>
        <li className="">Games</li>
        <li className="">Settings</li>
      </ul>
    </div>
  );
};

export default ScreenNavbar;
