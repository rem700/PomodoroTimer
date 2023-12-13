import "./styles/ApplySettingsButton.scss";

interface IApplySettingsButton {
  isOnFocusTimer: boolean;
  handleApplySettings: () => void;
}

const ApplySettingsButton: React.FC<IApplySettingsButton> = ({
  isOnFocusTimer,
  handleApplySettings,
}) => {
  return (
    <button
      className={`apply-button ${isOnFocusTimer
          ? "apply-button-on-focus-time"
          : "apply-button-on-rest-time"
        }`}
      onClick={handleApplySettings}
    >
      APPLY SETTINGS
    </button>
  );
};

export default ApplySettingsButton;
