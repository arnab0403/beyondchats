import React, { createContext, useState } from "react";
export const DataProvider = createContext();
function DataContext({ children }) {
  const [aiSideBar, setAiSideBar] = useState(false);
  const [text, setText] = useState("");
  return (
    <DataProvider.Provider value={{ aiSideBar, setAiSideBar, text, setText }}>
      {children}
    </DataProvider.Provider>
  );
}

export default DataContext;
