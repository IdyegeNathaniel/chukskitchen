import {
  variant1,
  variant2,
  variant3,
  variant4,
  variant5,
  variant6,
  variant7,
  variant8,
  variant9,
  variantx,
  variantxi,
  variantxii,
  variantxiii,
  variantxiv,
} from "./assets";

interface PopularItem {
  id: number;
  name: string;
  text?: string;
  image: string;
}

export const popularItems: PopularItem[] = [
  {
    id: 1,
    name: "Jollof Delights",
    image: variant1,
  },
  {
    id: 2,
    name: "Swallow & Soup",
    image: variant2,
  },
  {
    id: 3,
    name: "Grills & BBQ",
    image: variant3,
  },
  {
    id: 4,
    name: "Sweet Treats",
    image: variant4,
  },
  {
    id: 5,
    name: "Jollof Delights",
    image: variant5,
  },
  {
    id: 6,
    name: "Jollof Delights",
    image: variant6,
  },
];

export const chefItems: PopularItem[] = [
  {
    id: 1,
    name: "Spicy Tilapia Pepper Soup",
    text: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
    image: variant7,
  },
  {
    id: 2,
    name: "Jollof Rice & Fried Chicken",
    text: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    image: variant1,
  },
  {
    id: 3,
    name: "Jollof Rice & Fried Chicken",
    text: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    image: variant1,
  },
  {
    id: 4,
    name: "Jollof Rice & Fried Chicken",
    text: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    image: variant1,
  },
  {
    id: 5,
    name: "Jollof Rice & Fried Chicken",
    text: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    image: variant1,
  },
  {
    id: 6,
    name: "Egusi Soup & Pounded Yam",
    text: "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
    image: variant6,
  },
];

export const explorePopular: PopularItem[] = [
  {
    id: 1,
    name: "Jollof Rice & Fried Chicken",
    text: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    image: variant1,
  },
  {
    id: 2,
    name: "Eba & Egusi Soup (Goat Meat)",
    text: "Hearty Egusi soup with tender goat meat, served with soft Eba.",
    image: variantxii,
  },
  {
    id: 3,
    name: "Pounded Yam & Edikaikong",
    text: "Traditional pounded yam with rich, leafy Edikaikong soup.",
    image: variantxi,
  },
  {
    id: 4,
    name: "Peppered Snail",
    text: "Spicy and savory peppered snail, perfect as a starter.",
    image: variantx,
  },
  {
    id: 5,
    name: "Grilled Tilapia Fish",
    text: "Whole grilled tilapia seasoned with our special spices.",
    image: variant9,
  },
  {
    id: 6,
    name: "Jollof Rice & Fried Chicken",
    text: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    image: variant1,
  },
];

export const jollof: PopularItem[] = [
    {
    id: 1,
    name: "Jollof Rice & Smoked Fish",
    text: "Flavorful jollof rice served with perfectly smoked fish.",
    image: variant5,
  },
  {
    id: 2,
    name: "Party Jollof Rice (Veg)",
    text: "Vegetarian party jollof, full of rich flavors.",
    image: variant1,
  },
  {
    id: 3,
    name: "Party Jollof Rice (Veg)",
    text: "Vegetarian party jollof, full of rich flavors.",
    image: variant1,
  },
]
export const swallow: PopularItem[] = [
    {
    id: 1,
    name: "Amala with Gbegiri & Ewedu",
    text: "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
    image: variantxiii,
  },
  {
    id: 2,
    name: "Fufu & Okra Soup (Fish)",
    text: "Light Fufu served with fresh okra soup and tilapia fish.",
    image: variantxiv,
  },
  {
    id: 3,
    name: "Fufu & Okra Soup (Fish)",
    text: "Light Fufu served with fresh okra soup and tilapia fish.",
    image: variantxiv,
  }
]