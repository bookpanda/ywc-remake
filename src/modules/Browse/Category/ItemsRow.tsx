import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";
import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ItemsCard } from "./ItemCard";
import { textSizes } from "@/core/utils/fontSizes";

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
        <Flex w="100%" direction="column">
            <Text fontSize={textSizes} mt={"2vh"}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
            <Flex w="100%" h="20vh" gap={5} overflow="clip">
                {selectedItems.map((item, index) => (
                    <ItemsCard key={index} item={item} />
                ))}
            </Flex>
            {/* //carousel? */}
        </Flex>
    );
};
