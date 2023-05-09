import ListWatchesM from "../components/AllAboutListProduct/TypeOfProduct/Watches/ListWatchesM";
import CarIcon from "../components/CarIcon/CarIcon";
import Footer from "../Layouts/Footer/Footer";

export default function Masculine() {
  return (
    <>
      <CarIcon/>
      <div className="container text-center">
        <ListWatchesM />
        <Footer />
      </div>
    </>
  );
}
