import { cheese } from "$public/images/ingredients/dairy";
import { apple } from "$public/images/ingredients/fruits";
import { corn } from "$public/images/ingredients/grains";
import { beef } from "$public/images/ingredients/meat";
import { paprika } from "$public/images/ingredients/spices";
import { carrot } from "$public/images/ingredients/vegetables";
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
        image: beef,
        category: Category.Meat,
        name: "chicken",
        unit: "kg",
    },
    { id: 3, image: beef, category: Category.Meat, name: "pork", unit: "kg" },
    { id: 4, image: beef, category: Category.Meat, name: "lamb", unit: "kg" },
    { id: 5, image: beef, category: Category.Meat, name: "fish", unit: "kg" },
    { id: 6, image: beef, category: Category.Meat, name: "shrimp", unit: "kg" },
    { id: 7, image: beef, category: Category.Meat, name: "crab", unit: "kg" },

    {
        id: 11,
        image: apple,
        category: Category.Fruits,
        name: "apple",
        unit: "kg",
    },
    {
        id: 12,
        image: apple,
        category: Category.Fruits,
        name: "orange",
        unit: "kg",
    },
    {
        id: 13,
        image: apple,
        category: Category.Fruits,
        name: "watermelon",
        unit: "kg",
    },
    {
        id: 14,
        image: apple,
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
        image: carrot,
        category: Category.Vegatables,
        name: "potato",
        unit: "kg",
    },
    {
        id: 23,
        image: carrot,
        category: Category.Vegatables,
        name: "tomato",
        unit: "kg",
    },
    {
        id: 24,
        image: carrot,
        category: Category.Vegatables,
        name: "morning glory",
        unit: "kg",
    },

    {
        id: 31,
        image: cheese,
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
        image: cheese,
        category: Category.Dairy,
        name: "cream",
        unit: "kg",
    },

    {
        id: 41,
        image: corn,
        category: Category.Grains,
        name: "rice",
        unit: "kg",
    },
    {
        id: 42,
        image: corn,
        category: Category.Grains,
        name: "wheat",
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
        image: corn,
        category: Category.Grains,
        name: "flour",
        unit: "kg",
    },

    {
        id: 51,
        image: paprika,
        category: Category.Spices,
        name: "pepper",
        unit: "kg",
    },
    {
        id: 52,
        image: paprika,
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
