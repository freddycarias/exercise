import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
import BodyExample4 from "../components/Example/BodyExample4";
import { PRODUCTS } from "../components/Example/ListExample";

export default function Example() {
  return (
    <>
      <Header />
      <BodyExample4 products={PRODUCTS} />
      <Footer />
    </>
  );
}
