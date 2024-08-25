import { createContext, useState } from "react";

export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [selectedplan, setSelectedPlan] = useState({});
  const[addons,setAddons]=useState({})

  return (
    <PlanContext.Provider value={{ selectedplan, setSelectedPlan,addons,setAddons }}>
      {children}
    </PlanContext.Provider>
  );
};
