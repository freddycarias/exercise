import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Example from "../pages/Example";

export default function RoutesPage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/example" element={<Example/>}/>
        </Routes>
    </BrowserRouter>
  )
}
