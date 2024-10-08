import "./App.scss";
import Addons from "./components/Addons/Addons";
import Button from "./components/Button/Button";
import FinishUp from "./components/FinishUp/FinishUp";
import Home from "./components/Home/Home";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import { PlanProvider } from "./context/PlanContext";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
