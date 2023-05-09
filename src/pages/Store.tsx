import Footer from "../Layouts/Footer/Footer";
import { LISTPRODUCTS } from "../components/AllAboutListProduct/AllListProductOnSale";
import PartsOfProductContainer from "../components/AllAboutListProduct/ProductContainer";
import CarIcon from "../components/CarIcon/CarIcon";

export default function MainPage() {
  return (
    <>
      <CarIcon/>
      <div className="container text-center">
        <PartsOfProductContainer
          products={LISTPRODUCTS}
          productHome="allProducts"
        />
        <Footer />
      </div>
    </>
  );
}
