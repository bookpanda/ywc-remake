import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";
import { Flex, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import { FC } from "react";
import { ItemsCard } from "./ItemCard";
import { textSizes } from "@/core/utils/fontSizes";
import Link from "next/link";

interface ItemsRowProps {
    category: string;
}

export const ItemsRow: FC<ItemsRowProps> = ({ category }) => {
    const [isExceedLg] = useMediaQuery("(min-width: 62em)");
    const { items } = useAppContext();
    let selectedItems = items.filter(
        (item) =>
            Ingredients.find((i) => i.id === item.ingredientId)?.category ===
            category
    );
    if (!isExceedLg) selectedItems = selectedItems.slice(0, 4);
    return (
        <Flex w="100%" direction="column">
            <Flex>
                <Text fontSize={textSizes} mt={"2vh"}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </Text>
                <Spacer />
                <Link href={`/browse/${category}`} target="_blank">
                    <Text fontSize={textSizes} mt={"2vh"} color="primary.500">
                        View All
                    </Text>
                </Link>
            </Flex>
            <Flex w="100%" h="20vh" gap={5} overflow="clip" bgColor="red">
                {selectedItems.map((item, index) => (
                    <ItemsCard key={index} item={item} />
                ))}
            </Flex>
        </Flex>
    );
};
