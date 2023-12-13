import CounterButtons from "../CounterButtons/CounterButtons";

import "./styles/SettingsInput.scss";

interface ISettingsInput {
    label: string;
    inputId: string;
    labelClass: string;
    inputClass: string;
    value: number;
    onChange: (value: number) => void;
    timerMessage: string;
    handleCounterChange: (field: string, increment: boolean) => void;
}

const SettingsInput: React.FC<ISettingsInput> = ({
    label,
    inputId,
    labelClass,
    inputClass,
    value,
    onChange,
    timerMessage,
    handleCounterChange,
}) => {
    const isPeriods = inputId === "periods";
    return (
        <div className="input-wrapper">
            <label htmlFor={inputId} className={labelClass}>
                {label}
            </label>
            <input
                id={inputId}
                className={inputClass}
                value={isPeriods ? Math.min(99, value) : Math.min(60, value / 60)}
                onChange={(e) =>
                    onChange(Math.max(0, (parseInt(e.target.value) || 0) * 60))
                }
            />
            <CounterButtons
                timerMessage={timerMessage}
                handleCounterChange={(field, increment) =>
                    handleCounterChange(field, increment)
                }
                field={inputId}
            />
        </div>
    );
};

export default SettingsInput;
