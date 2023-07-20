"use client";

import { readMore } from "$public/images";
import { headerSizes, subHeaderSizes } from "@/core/utils/fontSizes";
import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

export const ReadMore: FC = () => {
    return (
        <Flex
            justify="center"
            align="center"
            mt={{ base: "10vh", lg: "20vh" }}
            px={{ base: "12%", xl: "15%" }}
            direction={{ base: "column", xl: "row" }}
        >
            <Flex direction="column" mb={10}>
                <Text fontSize={subHeaderSizes}>
                    หัวใจของธุรกิจร้านอาหารคือ
                </Text>
                <Text
                    fontSize={headerSizes}
                    fontWeight="bold"
                    color="primary.500"
                >
                    วัตถุดิบที่มีคุณภาพ
                </Text>
                <Text fontSize={subHeaderSizes}>
                    แต่มีหลายคนที่ไม่สามารถ <br />
                    เข้าถึงมัน
                </Text>
                <Button size="lg" w={52} mt={7}>
                    อ่านเพิ่มเติม
                </Button>
            </Flex>
            <Spacer />
            <Image
                alt="banner"
                src={readMore}
                height={400}
                style={{ objectFit: "cover" }}
                unoptimized
                loading="lazy"
            />
        </Flex>
    );
};
