export interface ListProps {
  products: ListProduct[];
  categoryName: string;
  watchesFor?: string;
}

export interface ListProduct {
  id: number;
  category: string;
  name: string;
  price: number;
  stocked: boolean;
  src: string;
  watchesFor?: string;
}

export const LISTPRODUCTS: ListProduct[] = [
  {
    id: 1,
    category: "HeadPhones",
    name: "Gear Beats Fit Pro",
    price: 500,
    stocked: true,
    src: "https://media.wired.com/photos/618c00da12143eb34d938e26/master/w_1600,c_limit/Gear-Beats-Fit-Pro-top.jpg",
  },
  {
    id: 2,
    category: "Phone",
    name: "Samsung Galaxy Z Flip",
    price: 500,
    stocked: true,
    src: "https://andro4all.com/hero/2020/05/Samsung-Galaxy-Z-Flip-pantalla-de-inicio.jpg?width=1200",
  },
  {
    id: 3,
    category: "Watches",
    name: "luxury Watches Feature",
    price: 700,
    stocked: true,
    src: "https://static.theceomagazine.net/wp-content/uploads/2022/03/03120646/luxury-watches-feature-image.jpg",
    watchesFor: "women",
  },
  {
    id: 4,
    category: "Watches",
    name: "HOROLOGICAL MACHINE N°9 ",
    price: 700,
    stocked: false,
    src: "https://elitetraveler.com/wp-content/uploads/sites/8/2021/12/MBandF_HM9_SV_RG_Blue_Wristshot_HRES_CMYK-min-scaled-e1639735791776.jpg",
    watchesFor: "men",
  },
  {
    id: 5,
    category: "Watches",
    name: "SHOP KRISTEN SHIRLEY’S FAVORITE LUXURY WATCHES",
    price: 800,
    stocked: true,
    src: "https://hips.hearstapps.com/hmg-prod/images/1-kristen-shirley-la-patiala-watch-gift-guide-index-comp-1670263075.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    watchesFor: "unixes",
  },
  {
    id: 6,
    category: "HeadPhones",
    name: "Wireless Headphone",
    price: 400,
    stocked: true,
    src: "https://hips.hearstapps.com/hmg-prod/images/wireless-headphone-display-in-the-store-royalty-free-image-1678138342.jpg",
  },
  {
    id: 7,
    category: "Phone",
    name: "Samsung Galaxy S22",
    price: 400,
    stocked: false,
    src: "https://i.insider.com/622a29256ec7c20019cd7ddd?width=1200&format=jpeg",
  },
  {
    id: 8,
    category: "Watches",
    name: "Nordgreen Infinity",
    price: 600,
    stocked: false,
    src: "https://cdn.shopify.com/s/files/1/0027/5536/2879/collections/Collection_-_Besteller_women_January_2020_f1859153-b109-4d29-9deb-d978626372d9_970x.jpg?v=1641184551",
    watchesFor: "women",
  },
  {
    id: 9,
    category: "Watches",
    name: "Nordgreen Native",
    price: 600,
    stocked: false,
    src: "https://cdn.shopify.com/s/files/1/0027/5536/2879/collections/CP_Male_Native_961fa23a-161f-4a6d-ad4d-fc4ca0ddec96_970x.webp?v=1673502035",
    watchesFor: "men",
  },
  {
    id: 10,
    category: "Watches",
    name: "Tudor Black Bay",
    price: 700,
    stocked: true,
    src: "https://cdn.shopify.com/s/files/1/0249/7003/5297/articles/Untitled_design_9_1200x.png?v=1664979311",
    watchesFor: "unixes",
  },
  {
    id: 11,
    category: "HeadPhones",
    name: "Auriculares Bluetooth Bose QuietComfort Earbuds",
    price: 600,
    stocked: false,
    src: "https://cdn.thewirecutter.com/wp-content/media/2022/10/runningheadphones-2048px-2406.jpg",
  },
  {
    id: 12,
    category: "Phone",
    name: "iPhone 14 pro",
    price: 600,
    stocked: false,
    src: "https://i.pcmag.com/imagery/reviews/03POP0TjDjuXonJXI16Omn2-1..v1663720055.jpg",
  },
  {
    id: 13,
    category: "Watches",
    name: "Mujer Casio Collection Reloj Ltp-E155MR-9BEF",
    price: 800,
    stocked: false,
    src: "https://d2chqqff64diva.cloudfront.net//eyJidWNrZXQiOiJjbXMuc3RyYXBpLmZlc3RpbmFncm91cCIsImtleSI6InJlbG9qZXNfbXVqZXJfMDM5ZjYzMDdjZi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiaW5zaWRlIn19fQ==",
    watchesFor: "women",
  },
  {
    id: 14,
    category: "Watches",
    name: "Breitling Endurance Pro",
    price: 800,
    stocked: true,
    src: "https://media.gq.com.mx/photos/63471cd850c7ecd84ad8790b/16:9/w_2560%2Cc_limit/relojes-de-colores-para-look-casual-de-hombre.png",
    watchesFor: "men",
  },
  {
    id: 15,
    category: "Watches",
    name: "ZENITH-ELITE",
    price: 900,
    stocked: true,
    src: "https://static.abc.es/media/summum/2020/08/24/zenithwatches-kjtH--1200x630@abc.jpg",
    watchesFor: "unixes",
  },
  {
    id: 16,
    category: "HeadPhones",
    name: "Sony WH-1000XM4",
    price: 500,
    stocked: true,
    src: "https://cdn.thewirecutter.com/wp-content/media/2022/05/bluetoothheadphones-2048px-1134.jpg",
  },
  {
    id: 17,
    category: "Phone",
    name: "One Plus 11",
    price: 500,
    stocked: true,
    src: "https://www.zdnet.com/a/img/resize/a599efb452885d4f668855aea18aae668867a960/2023/02/06/10e9ac75-29ce-4e6c-b2fb-8df48e1e40b0/oneplus-11-never-settle.jpg?auto=webp&fit=crop&height=900&width=1200",
  },
  {
    id: 18,
    category: "Watches",
    name: "Vacheron Constantin Traditionnelle Ewiger Kalender extra-flash 4305T/000",
    price: 700,
    stocked: true,
    src: "https://media.thepeakmagazine.com.sg/public/2022/05/Tradition-FI.jpg?compress=true&quality=80&w=400&dpr=2.6",
    watchesFor: "women",
  },
  {
    id: 19,
    category: "Watches",
    name: "GUCCI G-TIMELESS PVD GREEN & RED BEE WATCH",
    price: 700,
    stocked: false,
    src: "https://cdn.shopify.com/s/files/1/0063/5165/0905/articles/mens-gucci-watches-for-sale-that-is-worth-it-562855.jpg?v=1659676055",
    watchesFor: "men",
  },
  {
    id: 20,
    category: "Watches",
    name: "Seiko Kuroshio Panda Series 287 5th Anniversary",
    price: 800,
    stocked: true,
    src: "https://i.ebayimg.com/images/g/8o8AAOSwRVRj9gvA/s-l1600.jpg",
    watchesFor: "unixes",
  },
];
