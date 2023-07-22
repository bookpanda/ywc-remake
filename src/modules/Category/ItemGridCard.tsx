import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";
import { Item } from "@/core/types";
import { body2Sizes } from "@/core/utils/fontSizes";
import { Card, Flex, Progress, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

interface ItemsGridCardProps {
    item: Item;
}

export const ItemsGridCard: FC<ItemsGridCardProps> = ({ item }) => {
    const { searchText } = useAppContext();
    const ingredient = Ingredients.find((i) => i.id === item.ingredientId);

    return (
        ingredient && (
            <Card
                w={"100%"}
                h="100%"
                p={2}
                overflow="hidden"
                filter="auto"
                _hover={{
                    brightness: "80%",
                    transition: "0.3s",
                    cursor: "pointer",
                }}
                display={
                    ingredient.name.includes(searchText.toLowerCase())
                        ? "block"
                        : "none"
                }
            >
                <Flex direction="column">
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
                    <Text mt={2} fontSize={body2Sizes}>
                        {ingredient.name.charAt(0).toUpperCase() +
                            ingredient.name.slice(1)}
                    </Text>
                    <Text mt={2} fontSize={body2Sizes} fontWeight="bold">
                        {item.price} ฿/{ingredient.unit}
                    </Text>
                    <Progress
                        value={(item.currentAmount / item.goal) * 100}
                        bgColor="tertiary.700"
                    />
                    <Flex>
                        <Text mt={2} fontSize={body2Sizes}>
                            เหลือ{" "}
                            {Math.ceil(
                                Math.abs(
                                    item.deadline.getTime() -
                                        new Date().getTime()
                                ) /
                                    (1000 * 60 * 60 * 24)
                            )}{" "}
                            วัน
                        </Text>
                        <Spacer />
                        <Text mt={2} fontSize={body2Sizes}>
                            {item.currentAmount}/{item.goal} {ingredient.unit}
                        </Text>
                    </Flex>
                </Flex>
            </Card>
        )
    );
};