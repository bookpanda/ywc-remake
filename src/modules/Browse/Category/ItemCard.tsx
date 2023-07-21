import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";
import { Item } from "@/core/types";
import { Card, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

interface ItemsRowProps {
    item: Item;
}

export const ItemsCard: FC<ItemsRowProps> = ({ item }) => {
    const ingredient = Ingredients.find((i) => i.id === item.ingredientId);

    return (
        ingredient && (
            <Card
                w={{ base: "25%", lg: "10%" }}
                h="100%"
                overflow="hidden"
                filter="auto"
                _hover={{
                    brightness: "80%",
                    transition: "0.3s",
                    cursor: "pointer",
                }}
            >
                <Image
                    alt="ingredient"
                    src={ingredient.image}
                    style={{
                        objectFit: "cover",
                        flexShrink: 0,
                        minWidth: "100%",
                        minHeight: "100%",
                    }}
                />
            </Card>
        )
    );
};
