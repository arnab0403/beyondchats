import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/chat/:name" element={<Navbar />}></Route>
      </Routes>
    </>
  );
}

export default App;
