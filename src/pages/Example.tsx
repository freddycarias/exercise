import Header from "../components/GeneralHeader&&Footer/Header/Header";
import Footer from "../components/GeneralHeader&&Footer/Footer/Footer";
import BodyExample from "../components/Example/BodyExample";
import BodyPhones from "../components/BodyCards/Phones/BodyPhones";


export default function Example() {
  return (
    <>
    <div className="container text-center">
        <Header/>
        <BodyExample/>
        <BodyPhones/>
        <Footer/>
    </div>
    </>
  )
}
