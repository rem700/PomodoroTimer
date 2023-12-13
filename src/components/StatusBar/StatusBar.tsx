import React from "react";

import "./styles/StatusBar.scss";

interface IStatusBar {
  style: string;
  iconSrc: string;
  timerMessage: string;
}

const StatusBar: React.FC<IStatusBar> = ({ style, iconSrc, timerMessage }) => (
  <div className={style}>
    <img className="status-bar__icon" alt="icon" src={iconSrc} />
    <span className="status-bar__text">{timerMessage}</span>
  </div>
);

export default StatusBar;
