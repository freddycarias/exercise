import { ListProduct, ListProps } from "./AllListProductOnSale";

function ProductContainer({
  product,
  nameProduct,
  gender,
}: {
  product: ListProduct;
  nameProduct: string;
  gender?: string;
}) {
  if (product.category === nameProduct && product.gender === gender) {
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
            <div className="card-body">
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
  return <></>;
}

export default function PartsOfProductContainer({
  products,
  nameProduct,
  gender,
}: ListProps) {
  const lists = products.map((product) => (
    <ProductContainer
      product={product}
      key={product.id}
      nameProduct={nameProduct}
      gender={gender}
    />
  ));
  return (
    <div className="container px-4 text-center">
      <div className="row gx-5">{lists}</div>
    </div>
  );
}
