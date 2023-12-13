import React from "react";
import { handleButtonIcon } from "../utils/iconUtils";
import { useData } from "../data/useData";

import close from "../../img/buttons/close.png";
import closeGreen from "../../img/buttons/close-green.png";

import "./styles/CloseButton.scss";

interface ICloseButton {
    handlePopupClose: (event: React.MouseEvent) => void;
    timerMessage: string;
}

const CloseButton: React.FC<ICloseButton> = ({
    handlePopupClose,
    timerMessage,
}) => {
    const data = useData();
    const icon = handleButtonIcon(
        timerMessage,
        data.timerMessageList.break,
        close,
        closeGreen
    );

    return (
        <button className="close-button">
            <img
                src={icon}
                onClick={handlePopupClose}
                className="center-button__image"
                alt="close"
            />
        </button>
    );
};

export default CloseButton;
