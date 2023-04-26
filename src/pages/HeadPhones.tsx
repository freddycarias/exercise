import ListHeadPhone from "../components/AllAboutListProduct/TypeOfProduct/HeadPhones/ListHeadPhone";
import Footer from "../Layouts/Footer/Footer";
import Header from "../Layouts/Header/Header";

export default function HeadPhones() {
  return (
    <>
      <div className="container text-center">
        <Header />
        <ListHeadPhone />
        <Footer />
      </div>
    </>
  );
}
