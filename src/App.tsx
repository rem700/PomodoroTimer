import { Fragment } from "react";
import NumericalTimer from "./components/NumericalTimer/NumericalTimer";
import HelmetComponent from "./components/HelmetComponent/HelmetComponent";

function App() {
  return (
    <Fragment>
      <HelmetComponent />
      <NumericalTimer />
    </Fragment>
  );
}

export default App;
