export const handleButtonIcon = (
  message: string,
  timerMessage: string,
  iconBlack: string,
  iconGreen: string
) => {
  return timerMessage === message ? iconGreen : iconBlack;
};
