import Footer from "../Layouts/Footer/Footer";
import BodyHome from "./Home/Body/BodyHome";

export default function MainPage() {
  return (
    <>
      <div className="container text-center">
        <BodyHome />
        <Footer />
      </div>
    </>
  );
}
