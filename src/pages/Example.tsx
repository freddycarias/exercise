import Header from "../Layouts/Header/Header";
import BodyExample2 from "../components/Example/BodyExample2";
import Footer from "../Layouts/Footer/Footer";
import { LISTPRODUCTSEXAMPLE } from "../components/Example/BodyExample2";

export default function Example() {
  return (
    <>
      <Header />
      <BodyExample2 listProduct={LISTPRODUCTSEXAMPLE}/>
      <Footer />
    </>
  );
}
