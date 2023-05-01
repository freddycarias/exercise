import { useState } from "react";
export interface ListPropExample {
  listProduct: ListProductsExample[];
}

export interface ListProductsExample {
  id: number;
  name: string;
  price: number;
  description: string;
  stocked: boolean;
  color: string;
  img: string;
}

export function ShowMyFilteredProductList({
  listProduct,
}: {
  listProduct: ListProductsExample;
}) {
  return (
    <>
      <div className="col">
        <div className="p-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={listProduct.img}
              className="card-img-top"
              alt={listProduct.name}
              style={{ width: "287px", height: "200px" }}
            />
            <div className="card-body" style={{height: "200px"}}>
              <h5 className="card-title">{listProduct.name}</h5>
              <p className="card-text">{listProduct.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">${listProduct.price}</li>
              <li className="list-group-item">{listProduct.color}</li>
              <li className="list-group-item">
                {listProduct.stocked ? "In stock" : "Spent"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default function BodyExample2({ listProduct }: ListPropExample) {
  const [ActualValue, setActualValue] = useState("");

  const filteredProducts = listProduct.filter((product) =>
  product.name.toLowerCase().includes(ActualValue.toLowerCase())
);

  const list = filteredProducts.map((product) => (
    <ShowMyFilteredProductList listProduct={product} key={product.id} />
  ));
  return (
    <>
      <InputSearch ActualValue={ActualValue} setActualValue={setActualValue} />
      <div className="container px-4 text-center">
        <div className="row gx-5">{list}</div>
      </div>
    </>
  );
}

export function InputSearch({
  ActualValue,
  setActualValue,
}: {
  ActualValue: string;
  setActualValue: any;
}) {
  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActualValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <input type="text" value={ActualValue} onChange={valueChange} />
    </>
  );
}

export const LISTPRODUCTSEXAMPLE: ListProductsExample[] = [
  {
    id: 0,
    name: "Pencil",
    price: 1,
    description:
      "pencil (also called: graphite pencil) is a writing utensil with a graphite lead embedded in a wooden shaft",
    stocked: true,
    color: "Yellow and Black",
    img: "https://www.officewarehouse.com.ph/__resources/_web_data_/products/products/images/212.jpg",
  },
  {
    id: 1,
    name: "Pen",
    price: 2,
    description: "an ink-filled tool that you use for writing or drawing",
    stocked: false,
    color: "Black",
    img: "https://pyxis.nymag.com/v1/imgs/186/c5b/4d0e282e5fdfb67fd60b54a4b2d6eeadd0-platinum-3776.2x.rhorizontal.w600.jpg",
  },
  {
    id: 2,
    name: "Crayons",
    price: 5,
    description:
      "versatile coloring instruments that allow many creative possibilities.",
    stocked: false,
    color: "Red",
    img: "https://www.thoughtco.com/thmb/mHQZvLxbc7SfatjrgO4n2z7iFT0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1055965132-9989ff7a5fb94515b1d1982bdfc69b62.jpg",
  },
  {
    id: 3,
    name: "Book",
    price: 15,
    description:
      " a short summary of a book's story or content that is designed to “hook” a reader and lead to a sale.",
    stocked: true,
    color: "Blue",
    img: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 4,
    name: "Notebook",
    price: 5,
    description:
      "a book or binder of blank, often ruled, pages on which to write, especially one used by students to take notes in class",
    stocked: true,
    color: "Blue",
    img: "https://www.officewarehouse.com.ph/__resources/_web_data_/products/products/images/6848.jpg",
  },
  {
    id: 5,
    name: "Backpack",
    price: 100,
    description:
      "Is a bag put on somebody's back. It usually has two straps that go over the shoulders. It is used to carry things in it, and it often has many pockets or compartments to carry things.",
    stocked: false,
    color: "Grey",
    img: "https://media.istockphoto.com/id/1141208525/photo/yellow-open-backpack.jpg?s=612x612&w=0&k=20&c=k0NOqN9FnIGdkaUNx6-fMIBG2IfWwLT_AbDVefqJT_0=",
  },
];
