import { bannerPic } from "$public/images";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

export const Banner: FC = () => {
    return (
        <Flex justify="center" mt={{ base: "0", lg: "5vh" }}>
            <Flex>
                <Image
                    alt="banner"
                    src={bannerPic}
                    height={500}
                    unoptimized
                    loading="lazy"
                />
            </Flex>
        </Flex>
    );
};
