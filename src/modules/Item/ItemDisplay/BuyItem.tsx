import { basketWhite } from "$public/images";
import { useAppContext } from "@/core/contexts";
import { Ingredient, Item } from "@/core/types";
import {
    Button,
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC, useState } from "react";

interface BuyItemProps {
    ingredient: Ingredient;
    item: Item;
}

export const BuyItem: FC<BuyItemProps> = ({ item, ingredient }) => {
    const { addToCart } = useAppContext();
    const toast = useToast();
    const [amount, setAmount] = useState(5);
    const format = (val: string) => {
        if (val === "NaN") return "0 kg";
        return val + ` kg`;
    };
    return (
        <Flex
            gap={5}
            align={{ base: "center", md: "start" }}
            mt={10}
            direction={{ base: "column", md: "row" }}
        >
            <NumberInput
                defaultValue={amount}
                min={0}
                max={100}
                onChange={(valueString) =>
                    setAmount(parseInt(valueString.replace("kg", "")))
                }
                value={format(amount.toString())}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Button
                onClick={() => {
                    addToCart(item.id, amount);
                    toast({
                        title: "เพิ่มสินค้าเข้าตะกร้าเรียนร้อย",
                        description: `${
                            ingredient.name
                        } ${amount} กิโลกรัม ราคา ${amount * item.price} บาท`,
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                    });
                }}
                leftIcon={
                    <Image alt="basket" src={basketWhite} color="white" />
                }
                py={2}
                borderRadius="3xl"
                w={40}
            >
                หยิบใส่ตะกร้า
            </Button>
        </Flex>
    );
};
