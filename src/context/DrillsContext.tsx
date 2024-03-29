import React, { useState } from "react";

const DrillsContext = React.createContext({});

const DrillsProvider = ({ children }) => {
  const [selectedDrills, setSelectedDrills] = useState({});
  return (
    <DrillsContext.Provider
      value={{
        selectedDrills,
        changeSelectedDrills: setSelectedDrills,
      }}
    >
      {children}
    </DrillsContext.Provider>
  );
};

export default DrillsContext;
export { DrillsProvider };
