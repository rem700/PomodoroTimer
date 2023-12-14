import React from "react";

import "./styles/StatusBar.scss";

interface IStatusBar {
  style: string;
  iconSrc: string;
  timerMessage: string;
  onFocusTimer: boolean;
  currentPeriod: number;
}

const StatusBar: React.FC<IStatusBar> = ({ style, iconSrc, timerMessage, onFocusTimer, currentPeriod}) => (
  <div className={style}>
    <img className="status-bar__icon" alt="icon" src={iconSrc} />
    <span className="status-bar__text">{onFocusTimer ? `${timerMessage} #${currentPeriod}` : timerMessage}</span>
  </div>
);

export default StatusBar;
