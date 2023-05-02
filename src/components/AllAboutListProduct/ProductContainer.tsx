import { useState, useMemo, ChangeEvent } from "react";
import Header from "../../Layouts/Header/Header";
import {
  ListProduct,
  ListProps,
} from "../AllAboutListProduct/AllListProductOnSale";

function ProductContainer({
  product,
  nameProduct,
  gender,
}: {
  product: ListProduct;
  nameProduct: string;
  gender?: string;
}) {
  const shouldRender = useMemo(
    () => product.category === nameProduct && product.gender === gender,
    [product.category, nameProduct, product.gender, gender]
  );
  if (!shouldRender) {
    return null;
  }
  return (
    <div className="col">
      <div className="p-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={product.src}
            className="card-img-top"
            alt="img"
            style={{ width: "287px", height: "200px" }}
          />
          {product.category}
          <div className="card-body" style={{ height: "220px" }}>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
            <a className="btn btn-primary stretched-link">
              {product.stocked ? "Yes" : "No"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PartsOfProductContainer({
  products,
  nameProduct,
  gender,
}: ListProps) {
  const [filterText, setFilterText] = useState("");

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      ),
    [products, filterText]
  );

  const filteredLists = filteredProducts.map((product) => (
    <ProductContainer
      product={product}
      key={product.id}
      nameProduct={nameProduct}
      gender={gender}
    />
  ));
  return (
    <>
      <Header ActualValue={filterText} setActualValue={setFilterText} />
      <div className="container px-4 text-center">
        <div className="row gx-5">{filteredLists}</div>
      </div>
    </>
  );
}
