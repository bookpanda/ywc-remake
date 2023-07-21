import { FC } from "react";
import { Banner } from "./Banner";
import { Box, Flex } from "@chakra-ui/react";
import { BlurBanner, OrderNow, ReadMore, Sdg, WorthShare } from "./Items";

export const Home: FC = () => {
    return (
        <Box pb="15vh">
            <Flex justify="center" mt={{ base: "0", lg: "5vh" }}>
                <Banner />
            </Flex>
            <WorthShare />
            <ReadMore />
            <OrderNow />
            <BlurBanner />
            <Sdg />
        </Box>
    );
};
