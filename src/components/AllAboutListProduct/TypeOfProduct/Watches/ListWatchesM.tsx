import ProductContainer from "../../ProductContainer";
import { LISTPRODUCTS } from "../../AllListProductOnSale";
export default function BodyWatchesM() {
  return (
    <div>
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <ProductContainer products={LISTPRODUCTS} productName="Watches"  watchesFor="men"/>
        </div>
      </div>
    </div>
  );
}
