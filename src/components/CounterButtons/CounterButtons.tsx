import { handleButtonIcon } from "../utils/iconUtils";
import { useData } from "../data/useData";

import arrowUp from "../../img/buttons/arrow-up.png";
import arrowUpGreen from "../../img/buttons/arrow-up-green.png";

import arrowDown from "../../img/buttons/arrow-down.png";
import arrowDownGreen from "../../img/buttons/arrow-down-green.png";

import "./styles/CounterButtons.scss";

interface ICounterButtons {
    timerMessage: string;
    handleCounterChange: (field: string, increment: boolean) => void;
    field: string;
}

const CounterButtons: React.FC<ICounterButtons> = ({
    timerMessage,
    handleCounterChange,
    field,
}) => {
    const data = useData();

    return (
        <div className="counter-wrapper">
            <button className="button-increment">
                <img
                    src={handleButtonIcon(
                        timerMessage,
                        data.timerMessageList.break,
                        arrowUp,
                        arrowUpGreen
                    )}
                    alt="arrow-up"
                    onClick={() => handleCounterChange(field, true)}
                />
            </button>
            <button className="button-decrement">
                <img
                    src={handleButtonIcon(
                        timerMessage,
                        data.timerMessageList.break,
                        arrowDown,
                        arrowDownGreen
                    )}
                    alt="arrow-up"
                    onClick={() => handleCounterChange(field, false)}
                />
            </button>
        </div>
    );
};

export default CounterButtons;
