import "./App.css";

import { MyFooter } from "./components/MyFooter";
import { AxiosProvider } from "./lib/axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import LoginPage from "./pages/Login";
import Singup from "./pages/Singup";
import Singup2 from "./pages/Singup2";
import Profile from "./pages/Profile";
import RoomTypePicker from "./pages/RoomTypePicker";
import TestPage from "./pages/Test";

function App() {
  return (
    <>
      <Router basename="/hexschool-TS-Hw">
        <AxiosProvider>
          <div className="h-screen">
            {/* <Nav /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/another" element={<AnotherPage />} /> */}
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Singup" element={<Singup />} />
              <Route path="/Singup2" element={<Singup2 />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/RoomTypePicker" element={<RoomTypePicker />} />
              <Route path="/Test" element={<TestPage />} />
            </Routes>
            <MyFooter />
          </div>
        </AxiosProvider>
      </Router>
    </>
  );
}

export default App;
