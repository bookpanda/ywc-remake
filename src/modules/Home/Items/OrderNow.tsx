import { orderNow } from "$public/images";
import { textSizes } from "@/core/utils/fontSizes";
import { Button, Flex, Progress, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

export const OrderNow: FC = () => {
    return (
        <Flex justify="center">
            <Flex
                justify="center"
                align="center"
                mt={"10vh"}
                w={{
                    base: "90vw",
                    md: "75vw",
                    lg: "70vw",
                    xl: "65vw",
                    "2xl": "55vw",
                }}
                bgColor="tertiary.500"
                borderRadius="2xl"
                p={{ base: "10%", lg: "5%" }}
                direction={{ base: "column", xl: "row" }}
            >
                <Image
                    alt="orderNow"
                    src={orderNow}
                    height={300}
                    style={{ objectFit: "cover" }}
                    unoptimized
                    loading="lazy"
                />
                <Spacer />
                <Flex direction="column">
                    <Text fontSize={textSizes} mt={"2vh"}>
                        ขออีก 10 คนแชร์ <br /> เนื้อวากิวโคราชละลายในปากชิ้นนี้
                        <br />
                        จะมีราคา .... บาท
                    </Text>
                    <Progress value={65} bgColor="tertiary.700" />
                    <Flex mt={8} w={"100%"}>
                        <Button
                            variant="outline"
                            color="primary.500"
                            _hover={{ bgColor: "primary.300" }}
                            w="45%"
                        >
                            ดูรายละเอียด
                        </Button>
                        <Spacer />
                        <Button variant="solid" w="45%">
                            สั่งเลย
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
