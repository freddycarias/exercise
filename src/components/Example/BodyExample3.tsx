import { Props, Props1, Product, PRODUCTS } from "./ListExample";
import { useState } from "react";

// Se puede hacer de esta manera tambien { product }: Example
function ProductRow({ product }: { product: Product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ opacity: "0.2" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>
        {product.stocked ? (
          product.price
        ) : (
          <span style={{ opacity: "0.2" }}>{product.price}</span>
        )}
      </td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }: Props1) {
  const rows: JSX.Element[] = [];
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    rows.push(<ProductRow product={product} key={product.name} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (text: string) => void;
  onInStockOnlyChange: (value: boolean) => void;
}) {
  const handleInStockOnlyButtonClick = () => {
    onInStockOnlyChange(!inStockOnly);
  };

  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <button type="button" onClick={handleInStockOnlyButtonClick}>
        {inStockOnly ? "Show All Products" : "Show Only In Stock"}
      </button>
    </form>
  );
}

function FilterableProductTable({ products }: { products: Product[] }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default function BodyExample3(props: Props) {
  const lists = props.products.map((product) => (
    <div className="col" key={product.id}>
      <div className="p-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={product.src} className="card-img-top" alt="img" />
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

export function Exe() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}
