"use client";

import { Box, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { logoSm } from "../../../../public/images";
import { MenuDrawer } from "./MenuDrawer";
import { MenuBar } from "./MenuBar";

export const NavBar: FC = () => {
    return (
        <Flex
            h={[91]}
            px={"5%"}
            align="center"
            borderBottom="3px"
            borderColor="gray"
        >
            <Box>
                <Image alt="logo" src={logoSm} width={50} />
            </Box>
            <Spacer />
            <MenuBar />
            <MenuDrawer />
        </Flex>
    );
};
