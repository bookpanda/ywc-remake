import { FC } from "react";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { textSizes } from "@/core/utils/fontSizes";
import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";
import { Item } from "@/core/types";
import { ItemsGridCard } from "../Category/ItemGridCard";

interface RelatedItemsProps {
    itemId: string;
}

function shuffle(array: Item[]) {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

export const RelatedItems: FC<RelatedItemsProps> = ({ itemId }) => {
    const [isExceedLg] = useMediaQuery("(min-width: 62em)");
    const [isExceedMd] = useMediaQuery("(min-width: 48em)");
    const { items } = useAppContext();
    const ingredientId =
        items.find((i) => i.id.toString() === itemId)?.ingredientId ?? 1;
    const category = Ingredients.find((i) => i.id === ingredientId)?.category;
    const relatedIngredients = Ingredients.filter(
        (i) => i.category === category && i.id !== ingredientId
    );
    console.log(relatedIngredients);
    const allItems = relatedIngredients.map(
        (i) => items.find((item) => item.ingredientId === i.id) ?? items[0]
    );
    let relatedItems = shuffle(allItems).slice(0, 3);
    if (!isExceedLg) relatedItems = relatedItems.slice(0, 2);
    if (!isExceedMd) relatedItems = relatedItems.slice(0, 1);

    return (
        <Flex
            mt={{ base: "2vh", md: "5vh" }}
            h={{ base: "50vh", lg: "60vh", xl: "70vh" }}
            direction="column"
            gap={"2%"}
        >
            <Text fontSize={textSizes} fontWeight="bold">
                สินค้าที่เกี่ยวข้อง
            </Text>
            <Flex w="100%" h="70%" gap={5} overflow="clip">
                {relatedItems.map((item, index) => (
                    <ItemsGridCard key={index} item={item} />
                ))}
            </Flex>
        </Flex>
    );
};
