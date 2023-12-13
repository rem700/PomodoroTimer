import { useData } from "../data/useData";
import { handleButtonIcon } from "../utils/iconUtils";

import "./styles/ControlButton.scss";

interface IControlButton {
    onClick: () => void;
    timerMessage: string;
    controlButtonStyle: string;
    iconDark: string;
    iconGreen: string;
    altText: string;
}

const ContolButton: React.FC<IControlButton> = ({
    onClick,
    iconDark,
    iconGreen,
    timerMessage,
    controlButtonStyle,
    altText,
}) => {
    const data = useData();
    const icon = handleButtonIcon(
        timerMessage,
        data.timerMessageList.break,
        iconDark,
        iconGreen
    );

    return (
        <button className={controlButtonStyle} onClick={onClick}>
            <img src={icon} className="side-button__image" alt={altText} />
        </button>
    );
};

export default ContolButton;
