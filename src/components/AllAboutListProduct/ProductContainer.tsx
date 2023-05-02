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
          <div className="card-body" style={{ height: "220px" }}>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{product.price}</li>
            <li className="list-group-item">{product.category}</li>
            <li className="list-group-item">
              {product.stocked ? "In stock" : "Spent"}
            </li>
          </ul>
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
