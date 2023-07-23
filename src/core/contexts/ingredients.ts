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
        name: "เนื้อวัว",
        unit: "kg",
    },
    {
        id: 2,
        image: chicken,
        category: Category.Meat,
        name: "เนื้อไก่",
        unit: "kg",
    },
    {
        id: 3,
        image: pork,
        category: Category.Meat,
        name: "เนื้อหมู",
        unit: "kg",
    },
    {
        id: 4,
        image: lamb,
        category: Category.Meat,
        name: "เนื้อแกะ",
        unit: "kg",
    },
    { id: 5, image: fish, category: Category.Meat, name: "ปลา", unit: "kg" },
    {
        id: 6,
        image: shrimp,
        category: Category.Meat,
        name: "กุ้ง",
        unit: "kg",
    },
    { id: 7, image: crab, category: Category.Meat, name: "ปู", unit: "kg" },

    {
        id: 11,
        image: apple,
        category: Category.Fruits,
        name: "แอปเปิ้ล",
        unit: "kg",
    },
    {
        id: 12,
        image: orange,
        category: Category.Fruits,
        name: "ส้ม",
        unit: "kg",
    },
    {
        id: 13,
        image: watermelon,
        category: Category.Fruits,
        name: "แตงโม",
        unit: "kg",
    },
    {
        id: 14,
        image: mango,
        category: Category.Fruits,
        name: "มะม่วง",
        unit: "kg",
    },

    {
        id: 21,
        image: carrot,
        category: Category.Vegatables,
        name: "แครอท",
        unit: "kg",
    },
    {
        id: 22,
        image: potato,
        category: Category.Vegatables,
        name: "มันฝรั่ง",
        unit: "kg",
    },
    {
        id: 23,
        image: tomato,
        category: Category.Vegatables,
        name: "มะเขือเทศ",
        unit: "kg",
    },
    {
        id: 24,
        image: morningGlory,
        category: Category.Vegatables,
        name: "ผักบุ้ง",
        unit: "kg",
    },

    {
        id: 31,
        image: milk,
        category: Category.Dairy,
        name: "นม",
        unit: "kg",
    },
    {
        id: 32,
        image: cheese,
        category: Category.Dairy,
        name: "ชีส",
        unit: "kg",
    },
    {
        id: 33,
        image: cream,
        category: Category.Dairy,
        name: "ครีม",
        unit: "kg",
    },

    {
        id: 41,
        image: rice,
        category: Category.Grains,
        name: "ข้าวสวย",
        unit: "kg",
    },
    {
        id: 42,
        image: noodles,
        category: Category.Grains,
        name: "เส้นก๋วยเตี๋ยว",
        unit: "kg",
    },
    {
        id: 43,
        image: corn,
        category: Category.Grains,
        name: "ข้าวโพด",
        unit: "kg",
    },
    {
        id: 44,
        image: flour,
        category: Category.Grains,
        name: "แป้งสาลี",
        unit: "kg",
    },

    {
        id: 51,
        image: peppercorn,
        category: Category.Spices,
        name: "เมล็ดพริกไทย",
        unit: "kg",
    },
    {
        id: 52,
        image: salt,
        category: Category.Spices,
        name: "เกลือ",
        unit: "kg",
    },
    {
        id: 53,
        image: paprika,
        category: Category.Spices,
        name: "ผงปาปริก้า",
        unit: "kg",
    },
];
