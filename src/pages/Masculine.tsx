import ListWatchesM from "../components/AllAboutListProduct/TypeOfProduct/Watches/ListWatchesM";
import Footer from "../Layouts/Footer/Footer";
import Header from "../Layouts/Header/Header";

export default function Masculine() {
  return (
    <>
      <div className="container text-center">
        <Header />
        <ListWatchesM />
        <Footer />
      </div>
    </>
  );
}
