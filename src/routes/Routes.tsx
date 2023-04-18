import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Example from "../pages/Example";
import LogIn from "../pages/LogIn";
import CheckIn from "../pages/CheckIn";

export default function RoutesPage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/checkin" element={<CheckIn/>}/>
            <Route path="/example" element={<Example/>}/>
        </Routes>
    </BrowserRouter>
  )
}
