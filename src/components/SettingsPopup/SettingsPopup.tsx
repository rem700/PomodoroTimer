import CloseButton from "../CloseButton/CloseButton";
import ApplySettingsButton from "../ApplySettingsButton/ApplySettingsButton";
import SettingsInput from "../SettingsInput/SettingsInput";

import "./styles/SettingsPopup.scss";
import SettingsCheckboxInput from "../SettingsCheckboxInput/SettingsCheckboxInput";

interface ISettingsPopup {
    isPopupOpen: boolean;
    isOnFocusTimer: boolean;
    handlePopupClose: (event: React.MouseEvent) => void;
    focusTime: number;
    restTime: number;
    sessionCount: number;
    timerMessage: string;
    setFocusTime: (value: number) => void;
    setRestTime: (value: number) => void;
    setSessionCount: (value: number) => void;
    handleApplySettings: () => void;
    handleCounterChange: (field: string, increment: boolean) => void;
    handleSoundMute: () => void;
    isSoundOn: boolean;
}

const SettingsPopup: React.FC<ISettingsPopup> = ({
    isPopupOpen,
    isOnFocusTimer,
    handlePopupClose,
    focusTime,
    restTime,
    sessionCount,
    timerMessage,
    setFocusTime,
    setRestTime,
    setSessionCount,
    handleApplySettings,
    handleCounterChange,
    handleSoundMute,
    isSoundOn
}) => {
    const labelClass = `input-label ${isOnFocusTimer ? "input-label-on-focus-time" : "input-label-on-rest-time"}`;

    const inputClass = `input ${isOnFocusTimer ? "input-on-focus-time" : "input-on-rest-time"}`;

    const inputCheckboxClass = `input-checkbox ${isOnFocusTimer ? "input-checkbox-on-focus-time" : "input-checkbox-on-rest-time"}`;

    return (
        <div
            className={`popup-overlay ${isPopupOpen ? "active" : ""}`}
            onClick={handlePopupClose}
        >
            <div
                className={`popup ${isOnFocusTimer ? "popup-on-focus-time" : "popup-on-rest-time"
                    }`}
            >
                <CloseButton
                    handlePopupClose={handlePopupClose}
                    timerMessage={timerMessage}
                />
                <SettingsCheckboxInput labelClass={labelClass} inputCheckboxClass={inputCheckboxClass} isSoundOn={isSoundOn} handleSoundMute={handleSoundMute}/>
                <SettingsInput
                    label="Focus time length"
                    inputId="focus-time"
                    inputClass={inputClass}
                    labelClass={labelClass}
                    value={focusTime}
                    onChange={setFocusTime}
                    timerMessage={timerMessage}
                    handleCounterChange={handleCounterChange}
                />
                <SettingsInput
                    label="Rest time length"
                    inputId="rest-time"
                    inputClass={inputClass}
                    labelClass={labelClass}
                    value={restTime}
                    onChange={setRestTime}
                    timerMessage={timerMessage}
                    handleCounterChange={handleCounterChange}
                />
                <SettingsInput
                    label="Number of sessions"
                    inputId="periods"
                    inputClass={inputClass}
                    labelClass={labelClass}
                    value={sessionCount}
                    onChange={setSessionCount}
                    timerMessage={timerMessage}
                    handleCounterChange={handleCounterChange}
                />
                <ApplySettingsButton
                    isOnFocusTimer={isOnFocusTimer}
                    handleApplySettings={handleApplySettings}
                />
            </div>
        </div>
    );
};

export default SettingsPopup;
