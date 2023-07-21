import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";
import { Item } from "@/core/types";
import { Card, Flex } from "@chakra-ui/react";
import { FC } from "react";

interface ItemsRowProps {
    item: Item;
}

export const ItemsCard: FC<ItemsRowProps> = ({ item }) => {
    const ingredient = Ingredients.find((i) => i.id === item.ingredientId);

    return (
        ingredient && (
            <Card>
                {item.ingredientId} {ingredient.name}
            </Card>
        )
    );
};
