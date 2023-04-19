import Header from "../components/GeneralHeader&&Footer/Header/Header";
import Footer from "../components/GeneralHeader&&Footer/Footer";
import BodyHome from "../components/Home/BodyHome";

export default function MainPage() {
  return (
    <>
    <div className="container text-center">
        <Header/>
        <BodyHome/>
        <Footer/>
    </div>
    </>
  )
}
