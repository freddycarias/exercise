import { LISTPRODUCTS } from "../../AllListProductOnSale";
import ProductContainer from "../../ProductContainer";
export default function BodyPhones() {
  return (
    <div>
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <ProductContainer products={LISTPRODUCTS} categoryName="Phone" />
        </div>
      </div>
    </div>
  );
}
