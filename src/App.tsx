import { useState } from "react";
import React, { ReactNode } from "react";
import "./App.css";

import { MyFooter } from "./components/MyFooter";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnotherPage from "./pages/AnotherPage";

function App({ children }: { children: ReactNode }) {
  return (
    <>
      <Router>
        <div className="h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/another" element={<AnotherPage />} />
            {/* 添加其他页面的Route规则 */}
          </Routes>
          {children}

          <MyFooter />
        </div>
      </Router>
    </>
  );
}

export default App;
