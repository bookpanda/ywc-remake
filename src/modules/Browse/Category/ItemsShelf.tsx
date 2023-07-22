import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { ItemsRow } from "./ItemsRow";
import { Category } from "@/core/types";
import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";

export const ItemsShelf: FC = () => {
    const { searchText } = useAppContext();
    const categories = [
        Category.Meat,
        Category.Vegatables,
        Category.Fruits,
        Category.Grains,
        Category.Dairy,
        Category.Spices,
    ];
    return (
        <Flex direction="column" gap={5} mt={10}>
            {categories.map((c, index) => {
                const ingredientsInCat = Ingredients.filter(
                    (i) => i.category === c
                );
                const searchedIngredients = ingredientsInCat.filter((i) =>
                    i.name.includes(searchText.toLowerCase())
                );

                return (
                    searchedIngredients.length > 0 && (
                        <ItemsRow key={index} category={c} />
                    )
                );
            })}
        </Flex>
    );
};
