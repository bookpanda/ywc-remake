import { basketWhite } from "$public/images";
import { Item } from "@/core/types";
import {
    Button,
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC, useState } from "react";

interface BuyItemProps {
    item: Item;
}

export const BuyItem: FC<BuyItemProps> = ({ item }) => {
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
