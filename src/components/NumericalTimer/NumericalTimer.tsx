import { useState, useEffect, useCallback, Fragment, useRef } from "react";
import { useData } from "../data/useData";

import SettingsPopup from "../SettingsPopup/SettingsPopup";
import ContolButton from "../ControlButton/ControlButton";
import StatusBar from "../StatusBar/StatusBar";

import switchModeSound from "../../audio/bell.wav";

import "./styles/NumericalTimer.scss";

const NumericalTimer = () => {
    const data = useData();
    const [focusTime, setFocusTime] = useState(data.startFocusTime);
    const [restTime, setRestTime] = useState(data.startRestTime);
    const [sessionCount, setSessionCount] = useState(data.startSessions);
    const [time, setTime] = useState(focusTime);
    const [isActive, setIsActive] = useState(false);
    const [isOnFocusTimer, setIsOnFocusTimer] = useState(true);
    const [timerMessage, setTimerMessage] = useState(data.timerMessageList.focus);
    const [completedSessions, setCompletedSessions] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [audio] = useState(new Audio(switchModeSound));
    const [isSoundOn, setIsSoundOn] = useState(true);

    useEffect(() => {
        if (isActive) {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => Math.max(0, prevTime - 1));
            }, 1000);
        } else {
            clearInterval(timerRef.current as NodeJS.Timeout);
        }

        return () => clearInterval(timerRef.current as NodeJS.Timeout);
    }, [isActive, time]);

    const handlerStartTimer = useCallback(() => {
        setIsActive(true);
    }, []);

    const handlerStopTimer = useCallback(() => {
        setIsActive(false);
    }, []);

    const handleApplySettings = () => {
        setIsActive(false);
        setCompletedSessions(0);

        if (isOnFocusTimer) {
            setTime(focusTime);
            setTimerMessage(data.timerMessageList.focus);
        } else {
            setTime(restTime);
            setTimerMessage(data.timerMessageList.break);
        }
        setIsPopupOpen(false);
    };

    const handlerPopupOpen = () => {
        if (!isPopupOpen) {
            setIsPopupOpen(true);
            setIsActive(false);
        }
    };

    const handlerPopupClose = (event: React.MouseEvent) => {
        if (isPopupOpen) {
            if (event.target === event.currentTarget) {
                setIsPopupOpen(false);
                setIsActive(true);
            }
        }
    };

    const handleSessionCompletion = () => {
        setIsActive(false);

        if (isOnFocusTimer) {
            setTime(restTime);
            setTimerMessage(data.timerMessageList.break);
            setIsActive(true);
        } else {
            setTime(focusTime);
            setTimerMessage(data.timerMessageList.focus);
            setCompletedSessions(completedSessions + 1);
            setIsActive(true);

            if (completedSessions === sessionCount - 1) {
                setTimerMessage(data.timerMessageList.complete);
                setCompletedSessions(0);
                setIsActive(false);
            }
        }
        setIsOnFocusTimer(!isOnFocusTimer);
        isSoundOn ? audio.play() : (audio.pause())
    };

    const handleGetTitleIcon = () => {
        if (timerMessage === data.timerMessageList.focus) {
            return data.brainBlack;
        } else if (timerMessage === data.timerMessageList.break) {
            return data.coffeeGreen;
        } else return data.sleepBlack;
    };


    useEffect(() => {
        if (time === 0) {
            handleSessionCompletion();
        }
    }, [time, isOnFocusTimer, completedSessions]);

    const handleSoundMute = () => {
        isSoundOn ? setIsSoundOn(false) : setIsSoundOn(true)
    }

    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    const handleCounterChange = (field: string, increment: boolean) => {
        if (field === "focus-time") {
            setFocusTime((prevFocusTime) =>
                Math.max(0, prevFocusTime + (increment ? 60 : -60))
            );
        } else if (field === "rest-time") {
            setRestTime((prevRestTime) =>
                Math.max(0, prevRestTime + (increment ? 60 : -60))
            );
        } else if (field === "periods") {
            setSessionCount((prevSessionCount) =>
                Math.max(0, Math.min(10, prevSessionCount + (increment ? 1 : -1)))
            );
        }
    };

    const sideButtonStyle = `side-button ${isOnFocusTimer ? "side-button-on-focus-time" : "side-button-on-rest-time"
        }`;

    const centerButtonStyle = `center-button ${isOnFocusTimer
            ? "center-button-on-focus-time"
            : "center-button-on-rest-time"
        }`;

    const statusBarStyle = `numerical-timer__status-bar status-bar ${isOnFocusTimer
        ? "status-bar-on-focus-time"
        : "status-bar-on-rest-time"
    }`
    return (
        <Fragment>
            <div
                className={`numerical-timer ${isOnFocusTimer
                        ? "numerical-timer-on-focus-time"
                        : "numerical-timer-on-rest-time"
                    }`}
            >
                <StatusBar iconSrc={handleGetTitleIcon()} timerMessage={timerMessage} style={statusBarStyle}/>
                
                <div className="numerical-timer__time time">
                    <p>{formattedMinutes}</p>
                    <p>{formattedSeconds}</p>
                </div>
                <div className="numerical-timer__button-group">
                    <ContolButton
                        onClick={handlerPopupOpen}
                        timerMessage={timerMessage}
                        controlButtonStyle={sideButtonStyle}
                        iconDark={data.settings}
                        iconGreen={data.settingsGreen}
                        altText="settings"
                    />
                    <ContolButton
                        onClick={handlerStartTimer}
                        timerMessage={timerMessage}
                        controlButtonStyle={centerButtonStyle}
                        iconDark={data.play}
                        iconGreen={data.playGreen}
                        altText="play"
                    />
                    <ContolButton
                        onClick={handlerStopTimer}
                        timerMessage={timerMessage}
                        controlButtonStyle={sideButtonStyle}
                        iconDark={data.stop}
                        iconGreen={data.stopGreen}
                        altText="stop"
                    />
                </div>
            </div>

            <SettingsPopup
                isPopupOpen={isPopupOpen}
                isOnFocusTimer={isOnFocusTimer}
                handlePopupClose={handlerPopupClose}
                focusTime={focusTime}
                restTime={restTime}
                sessionCount={sessionCount}
                setFocusTime={setFocusTime}
                setRestTime={setRestTime}
                setSessionCount={setSessionCount}
                handleApplySettings={handleApplySettings}
                timerMessage={timerMessage}
                handleCounterChange={handleCounterChange}
                isSoundOn={isSoundOn}
                handleSoundMute={handleSoundMute}
            />
        </Fragment>
    );
};

export default NumericalTimer;
