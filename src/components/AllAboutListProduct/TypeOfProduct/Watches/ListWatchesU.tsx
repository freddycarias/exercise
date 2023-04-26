import ProductContainer from "../../ProductContainer";
import { LISTPRODUCTS } from "../../AllListProductOnSale";

export default function BodyWatchesU() {
  return (
    <div>
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <ProductContainer products={LISTPRODUCTS} nameProduct="Watches"  gender="unixes" />
        </div>
      </div>
    </div>
  );
}
