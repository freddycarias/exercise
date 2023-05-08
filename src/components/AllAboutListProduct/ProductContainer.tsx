import { useState, useMemo } from "react";
import Header from "../../Layouts/Header/Header";
import {
  ListProduct,
  ListProps,
} from "../AllAboutListProduct/AllListProductOnSale";

function ProductContainer({
  product,
  categoryName,
  watchesFor,
  productHome
}: {
  product: ListProduct;
  categoryName?: string;
  watchesFor?: string;
  productHome?: string
}) {
  const shouldRender = useMemo(
    () => product.category === categoryName && product.watchesFor === watchesFor || product.productHome === productHome,
    [product.category, categoryName, product.watchesFor, watchesFor,product.productHome,productHome]
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
          <div className="card-body" style={{ height: "200px" }}>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{product.price}</li>
            <li className="list-group-item">
              {product.stocked ? (
                <button className="btn btn-outline-info">In stock</button>
              ) : (
                <button className="btn btn-outline-secondary" disabled>
                  Spent
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function PartsOfProductContainer({
  products,
  categoryName,
  watchesFor,
  productHome
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
      categoryName={categoryName}
      watchesFor={watchesFor}
      productHome={productHome}
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
