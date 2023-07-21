"use client";

import { blurBanner } from "$public/images";
import { smallHeaderSizes, textSizes } from "@/core/utils/fontSizes";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

export const BlurBanner: FC = () => {
    return (
        <Flex w="100%" justify="center" mt="5vh">
            <Flex
                w={{ base: "100%", md: "90%", xl: "80%", "2xl": "70%" }}
                pos="relative"
            >
                <Image
                    alt="blurBanner"
                    src={blurBanner}
                    style={{ objectFit: "cover" }}
                    unoptimized
                    loading="lazy"
                />
                <Flex
                    justify="center"
                    align="center"
                    flexDirection="column"
                    pos="absolute"
                    top="50%"
                    left="50%"
                    transform={"translate(-50%, -50%)"}
                >
                    <Text
                        fontSize={smallHeaderSizes}
                        color="white"
                        fontWeight="bold"
                    >
                        เพื่อนคู่คิด คนตัวเล็ก
                    </Text>
                    <Text
                        fontSize={textSizes}
                        color="white"
                        textAlign="center"
                        fontWeight="bold"
                    >
                        เพื่อให้พวกคุณได้สินค้า <br /> ในราคาที่คุ้มค่าที่สุด
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
