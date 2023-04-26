import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Example from "../Pages/Example";
import LogIn from "../Pages/LogIn/LogIn";
import CheckIn from "../Pages/CheckIn/CheckIn";
import MainPage from "../Pages/Store";
import Phone from "../Pages/Phones";
import HeadPhones from "../Pages/HeadPhones";
import Masculine from "../Pages/Masculine";
import Femenine from "../Pages/Femenine";
import Unixes from "../Pages/Unixes";

export default function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/store" element={<MainPage />} />
        <Route path="/phones" element={<Phone />} />
        <Route path="/headphones" element={<HeadPhones />} />
        <Route path="/masculine" element={<Masculine />} />
        <Route path="/femenine" element={<Femenine />} />
        <Route path="/unixes" element={<Unixes />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}
