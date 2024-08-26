import { createContext, useState } from "react";

export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [selectedplan, setSelectedPlan] = useState({});
  const [addons, setAddons] = useState({});
  const [time, setTime] = useState("monthly");
  return (
    <PlanContext.Provider
      value={{
        selectedplan,
        setSelectedPlan,
        addons,
        setAddons,
        time,
        setTime,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};
