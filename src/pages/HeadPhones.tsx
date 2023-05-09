import ListHeadPhone from "../components/AllAboutListProduct/TypeOfProduct/HeadPhones/ListHeadPhone";
import CarIcon from "../components/CarIcon/CarIcon";
import Footer from "../Layouts/Footer/Footer";

export default function HeadPhones() {
  return (
    <>
      <CarIcon/>
      <div className="container text-center">
        <ListHeadPhone />
        <Footer />
      </div>
    </>
  );
}
