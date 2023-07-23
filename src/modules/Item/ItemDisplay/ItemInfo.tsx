import { FC } from "react";
import { Button, Flex, Progress, Spacer, Text } from "@chakra-ui/react";
import { body2Sizes, subHeaderSizes, textSizes } from "@/core/utils/fontSizes";
import { Ingredient, Item } from "@/core/types";
import { basketWhite, people } from "$public/images";
import Image from "next/image";
import { Social } from "./Social";

interface ItemInfoProps {
    item: Item;
    ingredient: Ingredient;
}

export const ItemInfo: FC<ItemInfoProps> = ({ item, ingredient }) => {
    return (
        <Flex
            w={{ base: "100%", lg: "50%" }}
            h="100%"
            p="2%"
            direction="column"
            borderRadius="lg"
            border="1px"
            borderColor="tertiary.700"
        >
            <Text fontSize={subHeaderSizes}>{ingredient.name}</Text>
            <Text fontSize={body2Sizes}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores expedita tempora at amet, officia ea quis sed
                incidunt quos distinctio! Eos, vero quaerat tempore corrupti
                enim quidem sunt fuga maiores! Porro unde culpa ducimus ab sint
                libero quae ad.
            </Text>
            <Flex mt={5} gap={5} align="baseline">
                <Text
                    fontSize={textSizes}
                    fontWeight="bold"
                    textDecoration={
                        item.currentAmount < item.goal ? "line-through" : "none"
                    }
                >
                    {item.price} บาท
                </Text>
                {item.currentAmount < item.goal && (
                    <Text
                        fontSize={subHeaderSizes}
                        fontWeight="bold"
                        color="primary.500"
                    >
                        {item.price} บาท
                    </Text>
                )}
            </Flex>
            <Flex mt={4}>
                <Text mt={2} fontSize={body2Sizes} color="primary.500">
                    {item.currentAmount}/{item.goal} {ingredient.unit}
                </Text>
                <Spacer />
                <Image alt="people" src={people} style={{ marginTop: 4 }} />
                <Text ml={2} mt={2} fontSize={body2Sizes} color="primary.500">
                    {Math.ceil(Math.random() * 10)} คนกำลังรวมพลังเพื่อดีลนี้
                </Text>
            </Flex>
            <Progress
                mt={2}
                value={(item.currentAmount / item.goal) * 100}
                borderRadius="xl"
                bgColor="tertiary.600"
            />
            <Button
                leftIcon={
                    <Image alt="basket" src={basketWhite} color="white" />
                }
                py={2}
                mt={10}
                borderRadius="3xl"
                w={40}
            >
                หยิบใส่ตะกร้า
            </Button>
            <Text mt={5} fontSize={body2Sizes} color="tertiary.900">
                แชร์ดีลนี้เพื่อราคาที่ดีที่สุด
            </Text>
            <Social />
        </Flex>
    );
};
