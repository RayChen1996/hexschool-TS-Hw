import "./App.css";

import { MyFooter } from "./components/MyFooter";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnotherPage from "./pages/AnotherPage";
import LoginPage from "./pages/Login";

import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <div className="h-screen">
          <Nav />
          <Routes>
            <Route path="/hexschool-TS-Hw" element={<HomePage />} />
            <Route path="/hexschool-TS-Hw/another" element={<AnotherPage />} />
            <Route path="/hexschool-TS-Hw/Login" element={<LoginPage />} />

            {/* 添加其他页面的Route规则 */}
          </Routes>

          <MyFooter />
        </div>
      </Router>
    </>
  );
}

export default App;
