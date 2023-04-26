import Footer from "../Layouts/Footer/Footer";
import Header from "../Layouts/Header/Header";
import ListPhone from "../components/AllAboutListProduct/TypeOfProduct/Phone/ListPhone";

export default function Phones() {
  return (
    <>
      <div className="container text-center">
        <Header />
        <ListPhone />
        <Footer />
      </div>
    </>
  );
}
