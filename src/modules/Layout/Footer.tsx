import { facebook, line, logoWhite, youtube } from "$public/images";
import { body1Sizes, textSizes } from "@/core/utils/fontSizes";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
    return (
        <Box w="100%" bgColor="primary.500" p="7%">
            <Flex
                w="100%"
                justify="space-between"
                direction={{ base: "column", md: "row" }}
            >
                <Box w={{ base: "50%", md: "25%" }} mb="5vh">
                    <Image
                        alt="logoWhite"
                        src={logoWhite}
                        height={300}
                        style={{ objectFit: "cover" }}
                        unoptimized
                        loading="lazy"
                    />
                    <Text fontSize={body1Sizes} mt={"2vh"} color="white">
                        ที่ตั้ง <br /> sharekan@gmail.com <br /> 00-000-0000
                    </Text>
                </Box>
                <Box w={{ base: "50%", md: "15%" }} mb="5vh">
                    <Text fontSize={textSizes} color="white" fontWeight="bold">
                        Support
                    </Text>
                    <Text fontSize={body1Sizes} mt={"2vh"} color="white">
                        นโยบาย <br /> นโยบาย <br /> นโยบาย
                    </Text>
                </Box>
                <Box w={{ base: "50%", md: "15%" }} mb="5vh">
                    <Text fontSize={textSizes} color="white" fontWeight="bold">
                        FAQ
                    </Text>
                    <Text fontSize={body1Sizes} mt={"2vh"} color="white">
                        คำถาม <br /> คำถาม <br /> คำถาม
                    </Text>
                </Box>
                <Box w={{ base: "50%", md: "20%" }} mb="5vh">
                    <Text fontSize={textSizes} color="white" fontWeight="bold">
                        Follow Us
                    </Text>
                    <Flex align="center" gap={5}>
                        <Link
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                        >
                            <Image alt="facebook" src={facebook} width={40} />
                        </Link>
                        <Link
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                        >
                            <Image alt="youtube" src={youtube} width={50} />
                        </Link>
                        <Link
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                        >
                            <Image alt="line" src={line} width={50} />
                        </Link>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};
