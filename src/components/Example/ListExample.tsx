export interface Props1 {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}

export interface Props {
  products: Product[];
}

export interface Product {
  id: number;
  category: string;
  name: string;
  price: string;
  stocked: boolean;
  src: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    category: "Fruits",
    name: "Carlos",
    price: "34",
    stocked: true,
    src: "https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1",
  },
  {
    id: 2,
    category: "Vegetables",
    name: "Mark",
    price: "23",
    stocked: false,
    src: "https://i.blogs.es/ceda9c/dalle/450_1000.jpg",
  },
  {
    id: 3,
    category: "Food",
    name: "Julia",
    price: "25",
    stocked: true,
    src: "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: 4,
    category: "Chef",
    name: "Julio",
    price: "26",
    stocked: false,
    src: "https://images.unsplash.com/photo-1601625463687-25541fb72f62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  },
];
