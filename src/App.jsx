import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import DataContext from "./Components/DataContext";

function App() {
  return (
    <>
      <DataContext>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chat/:name" element={<Home />}></Route>
        </Routes>
      </DataContext>
    </>
  );
}

export default App;
