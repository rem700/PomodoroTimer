import "./styles/SettingsCheckboxInput.scss";

interface ISettingsCheckboxInput {
    labelClass: string;
    inputCheckboxClass: string;
    isSoundOn: boolean;
    handleSoundMute: () => void;
}

const SettingsCheckboxInput: React.FC<ISettingsCheckboxInput> = ({
    labelClass,
    inputCheckboxClass,
    isSoundOn,
    handleSoundMute,
}) => {

    return (
        <div className="input-wrapper">
            <label htmlFor='sound-toggle' className={labelClass}>
                Mute sound
            </label>
            <div className="custom-checkbox">
                <input
                    id='sound-toggle'
                    type="checkbox"
                    className={inputCheckboxClass}
                    checked={!isSoundOn}
                    onChange={(e) => handleSoundMute()}
                />
                <div className="span checkmark"></div>
            </div>
        </div>
    );
};

export default SettingsCheckboxInput;
