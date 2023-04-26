import ProductContainer from "../../ProductContainer";
import { LISTPRODUCTS } from "../../AllListProductOnSale";

export default function BodyWatchesF() {
  return (
    <div>
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <ProductContainer products={LISTPRODUCTS} nameProduct="Watches"  gender="femenine"/>
        </div>
      </div>
    </div>
  );
}
