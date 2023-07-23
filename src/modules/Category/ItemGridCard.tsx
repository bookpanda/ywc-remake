import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";
import { Item } from "@/core/types";
import { body2Sizes } from "@/core/utils/fontSizes";
import { Card, Flex, Progress, Spacer, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FC } from "react";

interface ItemsGridCardProps {
    item: Item;
}

export const ItemsGridCard: FC<ItemsGridCardProps> = ({ item }) => {
    const { push } = useRouter();
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
                onClick={() => push(`/item/${item.id}`)}
                display={
                    ingredient.name.includes(searchText.toLowerCase())
                        ? "flex"
                        : "none"
                }
            >
                <Image
                    alt="ingredient"
                    src={ingredient.image}
                    style={{
                        objectFit: "cover",
                        flexShrink: 0,
                        minWidth: "100%",
                        minHeight: "50%",
                        maxHeight: "50%",
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
                                item.deadline.getTime() - new Date().getTime()
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
            </Card>
        )
    );
};
