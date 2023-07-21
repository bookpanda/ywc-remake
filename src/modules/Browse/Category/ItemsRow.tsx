import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";
import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { ItemsCard } from "./ItemCard";

interface ItemsRowProps {
    category: string;
}

export const ItemsRow: FC<ItemsRowProps> = ({ category }) => {
    const { items } = useAppContext();
    const selectedItems = items.filter(
        (item) =>
            Ingredients.find((i) => i.id === item.ingredientId)?.category ===
            category
    );
    return (
        <Flex direction="column">
            {selectedItems.map((item, index) => (
                <ItemsCard key={index} item={item} />
            ))}
        </Flex>
    );
};
