import Footer from "../Layouts/Footer/Footer";
import { LISTPRODUCTS } from "../components/AllAboutListProduct/AllListProductOnSale";
import PartsOfProductContainer from "../components/AllAboutListProduct/ProductContainer";

export default function MainPage() {
  return (
    <>
      <div className="container text-center">
        <PartsOfProductContainer products={LISTPRODUCTS} productHome="allProducts"/>
        <Footer />
      </div>
    </>
  );
}
