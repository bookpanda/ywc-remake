import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";
import { Flex, Grid, Text, useMediaQuery } from "@chakra-ui/react";
import { FC } from "react";
import { textSizes } from "@/core/utils/fontSizes";
import { ItemsGridCard } from "./ItemGridCard";

interface ItemsGridProps {
    category: string;
}

export const ItemsGrid: FC<ItemsGridProps> = ({ category }) => {
    const [isExceedMd] = useMediaQuery("(min-width: 48em)");
    const [isExceedXl] = useMediaQuery("(min-width: 80em)");
    const { items } = useAppContext();
    let selectedItems = items.filter(
        (item) =>
            Ingredients.find((i) => i.id === item.ingredientId)?.category ===
            category
    );
    const repeat = isExceedXl ? 7 : isExceedMd ? 4 : 2;
    return (
        <Flex w="100%" direction="column">
            <Text fontSize={textSizes} mt={"2vh"}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
            <Grid templateColumns={`repeat(${repeat}, 1fr)`} gap={6}>
                {selectedItems.map((item, index) => (
                    <ItemsGridCard key={index} item={item} />
                ))}
            </Grid>
        </Flex>
    );
};
