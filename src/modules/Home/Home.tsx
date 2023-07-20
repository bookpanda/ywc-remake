import { FC } from "react";
import { Banner } from "./Banner";
import { Flex } from "@chakra-ui/react";

export const Home: FC = () => {
    return (
        <>
            <Flex justify="center">
                <Banner />
            </Flex>
        </>
    );
};
