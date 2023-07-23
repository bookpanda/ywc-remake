import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";
import { body1Sizes, body2Sizes } from "@/core/utils/fontSizes";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Receipt: FC = () => {
    const { orders, items } = useAppContext();
    let totalSum = 0;
    return (
        <Flex w="100%" justify="center">
            <Flex
                direction="column"
                mt={6}
                borderRadius="xl"
                border="1px"
                borderColor="tertiary.700"
                p={5}
                w={{ base: "100%", md: "80%", lg: "65%", xl: "50%" }}
            >
                <Text fontSize={body1Sizes} fontWeight="bold">
                    รวมการสั่งซื้อ
                </Text>
                {orders.length === 0 && (
                    <Text fontSize={body1Sizes}>ไม่มีการสั่งซื้อ</Text>
                )}
                {orders.map((o) => {
                    const item =
                        items.find((i) => i.id === o.itemId) ?? items[0];
                    const ingredient =
                        Ingredients.find((i) => i.id === item.ingredientId) ??
                        Ingredients[0];
                    totalSum +=
                        item.currentAmount >= item.goal
                            ? o.price * 0.7
                            : o.price;
                    return (
                        <Flex key={o.id}>
                            <Text fontSize={body2Sizes} mr={5}>
                                {ingredient.name}
                            </Text>
                            <Text fontSize={body2Sizes}>
                                {o.amount}
                                {ingredient.unit}
                            </Text>
                            <Spacer />
                            <Text
                                fontSize={body2Sizes}
                                textDecoration={
                                    item.currentAmount >= item.goal
                                        ? "line-through"
                                        : "none"
                                }
                            >
                                {o.price}
                            </Text>
                            {item.currentAmount >= item.goal && (
                                <Text
                                    fontSize={body2Sizes}
                                    fontWeight="bold"
                                    color="primary.500"
                                >
                                    {Math.floor(o.price * 0.7)}
                                </Text>
                            )}
                            <Text fontSize={body2Sizes} ml={2}>
                                บาท
                            </Text>
                        </Flex>
                    );
                })}
                <Flex mt={5}>
                    <Text fontSize={body1Sizes} fontWeight="bold">
                        ยอดการชำระทั้งหมด
                    </Text>
                    <Spacer />
                    <Text fontSize={body1Sizes} fontWeight="bold">
                        {totalSum.toFixed(2)} บาท
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
