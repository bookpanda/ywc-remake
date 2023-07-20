"use client";

import { Button, Flex, Icon, Spacer } from "@chakra-ui/react";
import { FC } from "react";
import { avatar, basket } from "../../../../public/images";
import Image from "next/image";

export const MenuBar: FC = () => {
    const gap = { base: 5, lg: 10, xl: 12 };
    return (
        <Flex
            w={{ base: "50%", lg: "40%", xl: "30%" }}
            gap={gap}
            hideBelow="md"
        >
            <Button color="orange" variant="link">
                Home
            </Button>
            <Button color="orange" variant="link">
                All Products
            </Button>
            <Button color="orange" variant="link">
                About
            </Button>
            <Flex gap={5}>
                <Button p={0}>
                    <Image alt="basket" src={basket} />
                </Button>
                <Button p={0}>
                    <Image alt="avatar" src={avatar} />
                </Button>
            </Flex>
        </Flex>
    );
};