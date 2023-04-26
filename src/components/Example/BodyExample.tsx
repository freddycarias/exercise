import { useState } from "react";

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

type Props = {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
};

// type Example = {
//   product: Product;
//   category: string;
// }

// Se puede hacer de esta manera tambien { category }: Example
function ProductCategoryRow({ category }: { category: string }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
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

function ProductTable({ products, filterText, inStockOnly }: Props) {
  const rows: JSX.Element[] = [];

  // formas de hacerlo :

  // 1. Que la coloquemos en type Props y le demos el valor lastCategory en ProductTable
  //<ProductTable
  // lastCategory ={''} />

  //2. let lastCategory = null; pero dara error pero correra
  let lastCategory = "";

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
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

const PRODUCTS: Product[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Phones", price: "$1000", stocked: false, name: "Phone1" },
  { category: "Phones", price: "$1500", stocked: true, name: "Phone4" },
  { category: "Phones", price: "$1300", stocked: true, name: "Phone2" },
  { category: "Phones", price: "$1200", stocked: false, name: "Phone3" },
  { category: "HeadPhones", price: "$20", stocked: true, name: "HeadPhone1" },
  { category: "HeadPhones", price: "$30", stocked: false, name: "HeadPhone2" },
  { category: "HeadPhones", price: "$500", stocked: true, name: "HeadPhone3" },
  { category: "Watches", price: "$700", stocked: false, name: "Watch1" },
  { category: "Watches", price: "$600", stocked: true, name: "Watch2" },
  { category: "Watches", price: "$750", stocked: false, name: "Watch3" },
];

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
export default function BodyExample() {
  return <FilterableProductTable products={PRODUCTS} />;
}
