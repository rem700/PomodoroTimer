import coffeeGreen from "../../img/cup-green.png";
import brainBlack from "../../img/brain.png";
import sleepBlack from "../../img/sleep.png";

import settings from "../../img/settings.png";
import settingsGreen from "../../img/settings-green.png";

import play from "../../img/play.png";
import playGreen from "../../img/play-green.png";

import stop from "../../img/stop.png";
import stopGreen from "../../img/stop-green.png";

export function useData() {
    const timerMessageList = {
        focus: "Focus on work",
        break: "Have a rest",
        complete: "Session complete",
    };

    const startFocusTime = 25 * 60;
    const startRestTime = 5 * 60;
    const startSessions = 1;

    return {
        timerMessageList,
        coffeeGreen,
        brainBlack,
        sleepBlack,
        settings,
        settingsGreen,
        play,
        playGreen,
        stop,
        stopGreen,
        startFocusTime,
        startRestTime,
        startSessions,
    };
}
