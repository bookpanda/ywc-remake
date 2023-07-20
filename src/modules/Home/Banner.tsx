import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC, useState } from "react";
import { bannerPic } from "../../../public/images";

export const Banner: FC = () => {
    const [load, setLoad] = useState(false);
    return (
        <Box>
            <Skeleton isLoaded={load}>
                <Flex>
                    <Image
                        alt="banner"
                        src={bannerPic}
                        height={500}
                        unoptimized
                        loading="lazy"
                        onLoadingComplete={() => setLoad(true)}
                    />
                </Flex>
            </Skeleton>
            <Box>
                <Text fontSize="6xl" fontWeight="bold" textAlign="center">
                    “ SHAREKAN ” THIS IS WORTH TO SHARE
                </Text>
            </Box>
        </Box>
    );
};
