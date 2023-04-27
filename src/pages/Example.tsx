import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
import FilteredList from "../components/Example/BodyExample4";
import { LISTPRODUCTS } from "../components/AllAboutListProduct/AllListProductOnSale";

export default function Example() {
  return (
    <>
      <Header />
      <FilteredList nameProduct="Phone" products={LISTPRODUCTS}/>
      <Footer />
    </>
  );
}
