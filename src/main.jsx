import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import CarRental from "./pages/CarRental";
import Flight from "./pages/Flight";
import Stay from "./pages/Stay";
import './index.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="signin" element={<Signin/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="carrental" element={<CarRental/>} />
      <Route path="flight" element={<Flight/>} />
      <Route path="stay" element={<Stay/>} />
    </Routes>
  </BrowserRouter>
);
