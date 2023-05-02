import { LISTPRODUCTS } from "../../AllListProductOnSale";
import ProductContainer from "../../ProductContainer";
export default function BodyHeadPhones() {
  return (
    <>
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <ProductContainer products={LISTPRODUCTS} productName="HeadPhones" />
        </div>
      </div>
    </>
  );
}
