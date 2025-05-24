import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import DataContext from "./Components/DataContext";

function App() {
  return (
    <>
      <DataContext>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/chat/:name" element={<Navbar />}></Route>
        </Routes>
      </DataContext>
    </>
  );
}

export default App;
