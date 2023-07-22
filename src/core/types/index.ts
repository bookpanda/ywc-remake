import { StaticImageData } from "next/image";

export interface Ingredient {
    id: number;
    category: Category;
    name: string;
    unit: string;
    image: StaticImageData;
}

export enum Category {
    Meat = "meat",
    Vegatables = "vegetables",
    Fruits = "fruits",
    Grains = "grains",
    Dairy = "dairy",
    Spices = "spices",
}

export interface Item {
    ingredientId: number;
    price: number;
    currentAmount: number;
    goal: number;
    deadline: Date;
}

export interface Order {
    ingredientId: number;
    amount: number;
    price: number;
}
