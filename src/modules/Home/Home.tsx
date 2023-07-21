import { FC } from "react";
import { Banner } from "./Banner";
import { Box, Flex } from "@chakra-ui/react";
import { BlurBanner, OrderNow, ReadMore, Sdg, WorthShare } from "./Items";

export const Home: FC = () => {
    return (
        <Box>
            <Banner />
            <WorthShare />
            <ReadMore />
            <OrderNow />
            <BlurBanner />
            <Sdg />
        </Box>
    );
};
