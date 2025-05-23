import React, { createContext, useState } from "react";
export const DataProvider = createContext();
function DataContext({ children }) {
  const [aiSideBar, setAiSideBar] = useState();
  return (
    <DataProvider.Provider value={{ aiSideBar, setAiSideBar }}>
      {children}
    </DataProvider.Provider>
  );
}

export default DataContext;
