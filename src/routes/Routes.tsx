import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Example from "../pages/Example";
import LogIn from "../pages/LogIn";
import CheckIn from "../pages/CheckIn";
import MainPage from "../pages/MainPage";
import Phone from "../pages/Phones";
import HeadPhones from "../pages/HeadPhones";

export default function RoutesPage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/checkin" element={<CheckIn/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/phones" element={<Phone/>}/>
            <Route path="/headphones" element={<HeadPhones/>}/>
            <Route path="/example" element={<Example/>}/>
        </Routes>
    </BrowserRouter>
  )
}
