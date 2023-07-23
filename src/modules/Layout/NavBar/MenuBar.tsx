"use client";

import { Button, Flex, Icon, Spacer } from "@chakra-ui/react";
import { FC } from "react";
import { avatar, basket } from "../../../../public/images";
import Image from "next/image";
import Link from "next/link";

export const MenuBar: FC = () => {
    const gap = { base: 5, lg: 10, xl: 12 };
    return (
        <Flex
            w={{ base: "50%", lg: "40%", xl: "30%" }}
            gap={gap}
            hideBelow="md"
        >
            <Button color="primary.500" variant="link">
                <Link href="/">Home</Link>
            </Button>
            <Button color="primary.500" variant="link">
                <Link href="/browse">All Products</Link>
            </Button>
            <Button color="primary.500" variant="link">
                About
            </Button>
            <Flex gap={5}>
                <Button p={0} variant="link">
                    <Link href="/checkout">
                        <Image alt="basket" src={basket} />
                    </Link>
                </Button>
                <Button p={0} variant="link">
                    <Image alt="avatar" src={avatar} />
                </Button>
            </Flex>
        </Flex>
    );
};
