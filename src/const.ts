import { variant1, variant2, variant3, variant4, variant5, variant6, variant7 } from "./assets";

interface PopularItem {
    id: number,
    name: string,
    text?:string,
    image: string,
}

export const popularItems:PopularItem[] = [
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
]

export const chefItems:PopularItem[] = [
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
]