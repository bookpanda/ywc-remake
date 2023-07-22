import { cheese, cream, milk } from "$public/images/ingredients/dairy";
import {
    apple,
    mango,
    orange,
    watermelon,
} from "$public/images/ingredients/fruits";
import { corn, flour, noodles, rice } from "$public/images/ingredients/grains";
import {
    beef,
    chicken,
    crab,
    fish,
    lamb,
    pork,
    shrimp,
} from "$public/images/ingredients/meat";
import { paprika, peppercorn, salt } from "$public/images/ingredients/spices";
import {
    carrot,
    morningGlory,
    potato,
    tomato,
} from "$public/images/ingredients/vegetables";
import { Ingredient } from "../types";
import { Category } from "../types";

export const Ingredients: Ingredient[] = [
    {
        id: 1,
        image: beef,
        category: Category.Meat,
        name: "beef",
        unit: "kg",
    },
    {
        id: 2,
        image: chicken,
        category: Category.Meat,
        name: "chicken",
        unit: "kg",
    },
    { id: 3, image: pork, category: Category.Meat, name: "pork", unit: "kg" },
    { id: 4, image: lamb, category: Category.Meat, name: "lamb", unit: "kg" },
    { id: 5, image: fish, category: Category.Meat, name: "fish", unit: "kg" },
    {
        id: 6,
        image: shrimp,
        category: Category.Meat,
        name: "shrimp",
        unit: "kg",
    },
    { id: 7, image: crab, category: Category.Meat, name: "crab", unit: "kg" },

    {
        id: 11,
        image: apple,
        category: Category.Fruits,
        name: "apple",
        unit: "kg",
    },
    {
        id: 12,
        image: orange,
        category: Category.Fruits,
        name: "orange",
        unit: "kg",
    },
    {
        id: 13,
        image: watermelon,
        category: Category.Fruits,
        name: "watermelon",
        unit: "kg",
    },
    {
        id: 14,
        image: mango,
        category: Category.Fruits,
        name: "mango",
        unit: "kg",
    },

    {
        id: 21,
        image: carrot,
        category: Category.Vegatables,
        name: "carrot",
        unit: "kg",
    },
    {
        id: 22,
        image: potato,
        category: Category.Vegatables,
        name: "potato",
        unit: "kg",
    },
    {
        id: 23,
        image: tomato,
        category: Category.Vegatables,
        name: "tomato",
        unit: "kg",
    },
    {
        id: 24,
        image: morningGlory,
        category: Category.Vegatables,
        name: "morning glory",
        unit: "kg",
    },

    {
        id: 31,
        image: milk,
        category: Category.Dairy,
        name: "milk",
        unit: "kg",
    },
    {
        id: 32,
        image: cheese,
        category: Category.Dairy,
        name: "cheese",
        unit: "kg",
    },
    {
        id: 33,
        image: cream,
        category: Category.Dairy,
        name: "cream",
        unit: "kg",
    },

    {
        id: 41,
        image: rice,
        category: Category.Grains,
        name: "rice",
        unit: "kg",
    },
    {
        id: 42,
        image: noodles,
        category: Category.Grains,
        name: "noodles",
        unit: "kg",
    },
    {
        id: 43,
        image: corn,
        category: Category.Grains,
        name: "corn",
        unit: "kg",
    },
    {
        id: 44,
        image: flour,
        category: Category.Grains,
        name: "flour",
        unit: "kg",
    },

    {
        id: 51,
        image: peppercorn,
        category: Category.Spices,
        name: "peppercorn",
        unit: "kg",
    },
    {
        id: 52,
        image: salt,
        category: Category.Spices,
        name: "salt",
        unit: "kg",
    },
    {
        id: 53,
        image: paprika,
        category: Category.Spices,
        name: "paprika",
        unit: "kg",
    },
];
