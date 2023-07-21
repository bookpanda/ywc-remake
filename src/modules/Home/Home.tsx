import { FC } from "react";
import { Banner } from "./Banner";
import { Box, Flex } from "@chakra-ui/react";
import { OrderNow, ReadMore, WorthShare } from "./Items";

export const Home: FC = () => {
    return (
        <Box>
            <Flex justify="center" mt={{ base: "0", lg: "5vh" }}>
                <Banner />
            </Flex>
            <WorthShare />
            <ReadMore />
            <OrderNow />
        </Box>
    );
};
