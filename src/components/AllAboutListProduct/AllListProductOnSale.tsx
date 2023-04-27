export interface ListProps {
  products: ListProduct[];
  nameProduct: string;
  gender?: string;
}

export interface ListProduct {
  id: number;
  category: string;
  name: string;
  price: number;
  stocked: boolean;
  src: string;
  gender?: string;
}

export const LISTPRODUCTS: ListProduct[] = [
  {
    id: 1,
    category: "HeadPhones",
    name: "A",
    price: 500,
    stocked: true,
    src: "https://wallpapers.com/images/featured/ztbad1qj8vdjqe0p.jpg",
  },
  {
    id: 2,
    category: "Phone",
    name: "B",
    price: 500,
    stocked: false,
    src: "https://andro4all.com/hero/2020/05/Samsung-Galaxy-Z-Flip-pantalla-de-inicio.jpg?width=1200",
  },
  {
    id: 3,
    category: "Watches",
    name: "C",
    price: 700,
    stocked: true,
    src: "https://d2chqqff64diva.cloudfront.net//eyJidWNrZXQiOiJjbXMuc3RyYXBpLmZlc3RpbmFncm91cCIsImtleSI6InJlbG9qZXNfbXVqZXJfMDM5ZjYzMDdjZi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiaW5zaWRlIn19fQ==",
    gender: "femenine",
  },
  {
    id: 4,
    category: "Watches",
    name: "D",
    price: 700,
    stocked: true,
    src: "https://media.gq.com.mx/photos/63471cd850c7ecd84ad8790b/16:9/w_2560%2Cc_limit/relojes-de-colores-para-look-casual-de-hombre.png",
    gender: "masculine",
  },
  {
    id: 5,
    category: "Watches",
    name: "E",
    price: 800,
    stocked: true,
    src: "https://static.abc.es/media/summum/2020/08/24/zenithwatches-kjtH--1200x630@abc.jpg",
    gender: "unixes",
  },
  {
    id: 6,
    category: "HeadPhones",
    name: "F",
    price: 400,
    stocked: true,
    src: "https://wallpapers.com/images/featured/ztbad1qj8vdjqe0p.jpg",
  },
  {
    id: 7,
    category: "Phone",
    name: "G",
    price: 400,
    stocked: false,
    src: "https://andro4all.com/hero/2020/05/Samsung-Galaxy-Z-Flip-pantalla-de-inicio.jpg?width=1200",
  },
  {
    id: 8,
    category: "Watches",
    name: "H",
    price: 600,
    stocked: true,
    src: "https://d2chqqff64diva.cloudfront.net//eyJidWNrZXQiOiJjbXMuc3RyYXBpLmZlc3RpbmFncm91cCIsImtleSI6InJlbG9qZXNfbXVqZXJfMDM5ZjYzMDdjZi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiaW5zaWRlIn19fQ==",
    gender: "femenine",
  },
  {
    id: 9,
    category: "Watches",
    name: "I",
    price: 600,
    stocked: true,
    src: "https://media.gq.com.mx/photos/63471cd850c7ecd84ad8790b/16:9/w_2560%2Cc_limit/relojes-de-colores-para-look-casual-de-hombre.png",
    gender: "masculine",
  },
  {
    id: 10,
    category: "Watches",
    name: "J",
    price: 700,
    stocked: true,
    src: "https://static.abc.es/media/summum/2020/08/24/zenithwatches-kjtH--1200x630@abc.jpg",
    gender: "unixes",
  },
  {
    id: 11,
    category: "HeadPhones",
    name: "K",
    price: 600,
    stocked: true,
    src: "https://wallpapers.com/images/featured/ztbad1qj8vdjqe0p.jpg",
  },
  {
    id: 12,
    category: "Phone",
    name: "L",
    price: 600,
    stocked: false,
    src: "https://andro4all.com/hero/2020/05/Samsung-Galaxy-Z-Flip-pantalla-de-inicio.jpg?width=1200",
  },
  {
    id: 13,
    category: "Watches",
    name: "M",
    price: 800,
    stocked: true,
    src: "https://d2chqqff64diva.cloudfront.net//eyJidWNrZXQiOiJjbXMuc3RyYXBpLmZlc3RpbmFncm91cCIsImtleSI6InJlbG9qZXNfbXVqZXJfMDM5ZjYzMDdjZi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiaW5zaWRlIn19fQ==",
    gender: "femenine",
  },
  {
    id: 14,
    category: "Watches",
    name: "N",
    price: 800,
    stocked: true,
    src: "https://media.gq.com.mx/photos/63471cd850c7ecd84ad8790b/16:9/w_2560%2Cc_limit/relojes-de-colores-para-look-casual-de-hombre.png",
    gender: "masculine",
  },
  {
    id: 15,
    category: "Watches",
    name: "Ñ",
    price: 900,
    stocked: true,
    src: "https://static.abc.es/media/summum/2020/08/24/zenithwatches-kjtH--1200x630@abc.jpg",
    gender: "unixes",
  },
  {
    id: 16,
    category: "HeadPhones",
    name: "O",
    price: 500,
    stocked: true,
    src: "https://wallpapers.com/images/featured/ztbad1qj8vdjqe0p.jpg",
  },
  {
    id: 17,
    category: "Phone",
    name: "P",
    price: 500,
    stocked: false,
    src: "https://andro4all.com/hero/2020/05/Samsung-Galaxy-Z-Flip-pantalla-de-inicio.jpg?width=1200",
  },
  {
    id: 18,
    category: "Watches",
    name: "Q",
    price: 700,
    stocked: true,
    src: "https://d2chqqff64diva.cloudfront.net//eyJidWNrZXQiOiJjbXMuc3RyYXBpLmZlc3RpbmFncm91cCIsImtleSI6InJlbG9qZXNfbXVqZXJfMDM5ZjYzMDdjZi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiaW5zaWRlIn19fQ==",
    gender: "femenine",
  },
  {
    id: 19,
    category: "Watches",
    name: "R",
    price: 700,
    stocked: true,
    src: "https://media.gq.com.mx/photos/63471cd850c7ecd84ad8790b/16:9/w_2560%2Cc_limit/relojes-de-colores-para-look-casual-de-hombre.png",
    gender: "masculine",
  },
  {
    id: 20,
    category: "Watches",
    name: "S",
    price: 800,
    stocked: true,
    src: "https://static.abc.es/media/summum/2020/08/24/zenithwatches-kjtH--1200x630@abc.jpg",
    gender: "unixes",
  },
];
