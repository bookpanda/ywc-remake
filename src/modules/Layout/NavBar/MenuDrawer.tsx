"use client";

import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Input,
    useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC, useRef } from "react";

export const MenuDrawer: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null);
    return (
        <>
            <Button
                ref={btnRef}
                onClick={onOpen}
                px={1}
                hideFrom="md"
                bgColor="transparent"
            >
                <HamburgerIcon boxSize={10} color="tertiary.700" />
            </Button>
            <Drawer
                size={"xs"}
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Flex direction={"column"} align={"start"} gap={10}>
                            <Button color="primary.500" variant="link">
                                <Link href="/">Home</Link>
                            </Button>
                            <Button color="primary.500" variant="link">
                                <Link href="/browse">All Products</Link>
                            </Button>
                            <Button color="primary.500" variant="link">
                                <Link href="/checkout">My Cart</Link>
                            </Button>
                            <Button color="primary.500" variant="link">
                                About
                            </Button>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};
