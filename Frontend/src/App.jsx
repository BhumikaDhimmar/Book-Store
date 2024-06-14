import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div classNmae="dark:bg-slate-900 dark:text-white">
        {/* <Home />
      <Course /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
