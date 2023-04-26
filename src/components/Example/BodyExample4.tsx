import { Props } from "./ListExample";

export default function BodyExample4(props: Props) {
  const lists = props.products.map((product) => (
    <div className="col" key={product.id}>
      <div className="p-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={product.src}
            className="card-img-top"
            alt="img"
            style={{ width: "287px", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
            <a href="#" className="btn btn-primary stretched-link">
              {product.stocked ? "Yes" : "No"}
            </a>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container px-4 text-center">
      <div className="row gx-5">{lists}</div>
    </div>
  );
}
