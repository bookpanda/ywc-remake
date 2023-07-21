"use client";

import { Sdg8, SdgGoals } from "$public/images";
import { Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

export const Sdg: FC = () => {
    return (
        <Flex
            w="100%"
            justify="center"
            align="center"
            mt="10vh"
            px="20%"
            direction={{ base: "column", lg: "row" }}
        >
            <Image
                alt="SdgGoals"
                src={SdgGoals}
                height={120}
                style={{ objectFit: "contain", marginTop: 20 }}
                unoptimized
                loading="lazy"
            />
            <Spacer />
            <Image
                alt="Sdg8"
                src={Sdg8}
                height={120}
                style={{ objectFit: "contain", marginTop: 20 }}
                unoptimized
                loading="lazy"
            />
        </Flex>
    );
};
