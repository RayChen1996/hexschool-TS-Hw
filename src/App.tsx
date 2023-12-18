import "./App.css";

import { MyFooter } from "./components/MyFooter";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnotherPage from "./pages/AnotherPage";
import LoginPage from "./pages/Login";
import Singup from "./pages/Singup";
import Singup2 from "./pages/Singup2";

function App() {
  return (
    <>
      <Router>
        <div className="h-screen">
          {/* <Nav /> */}
          <Routes>
            <Route path="/hexschool-TS-Hw" element={<HomePage />} />
            <Route path="/hexschool-TS-Hw/another" element={<AnotherPage />} />
            <Route path="/hexschool-TS-Hw/Login" element={<LoginPage />} />
            <Route path="/hexschool-TS-Hw/Singup" element={<Singup />} />
            <Route path="/hexschool-TS-Hw/Singup2" element={<Singup2 />} />
          </Routes>
          <MyFooter />
        </div>
      </Router>
    </>
  );
}

export default App;
