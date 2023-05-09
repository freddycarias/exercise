import Footer from "../Layouts/Footer/Footer";
import ListPhone from "../components/AllAboutListProduct/TypeOfProduct/Phone/ListPhone";
import CarIcon from "../components/CarIcon/CarIcon";

export default function Phones() {
  return (
    <>
      <CarIcon/>
      <div className="container text-center">
        <ListPhone />
        <Footer />
      </div>
    </>
  );
}
