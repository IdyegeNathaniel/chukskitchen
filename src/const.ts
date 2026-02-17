import { variant1, variant2, variant3, variant4, variant5, variant6 } from "./assets";

interface PopularItem {
    id: number,
    name: string,
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