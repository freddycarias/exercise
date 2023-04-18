import Header from "../components/GeneralHeader&&Footer/Header";
import LogIn from "./LogIn";
import CheckIn from "./CheckIn";
import Footer from "../components/GeneralHeader&&Footer/Footer";

export default function Example() {
  return (
    <>
    <div className="container text-center">
        <Header title="Example"/>
        <LogIn/>
        <CheckIn/>
        <Footer/>
    </div>
    </>
  )
}
