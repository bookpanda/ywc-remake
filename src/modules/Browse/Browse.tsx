import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { OrderNow } from "../Home/Items";
import { SearchBar } from "./SearchBar";

export const Browse: FC = () => {
    return (
        <>
            <Box hideFrom="md">
                <OrderNow />
                <SearchBar />
            </Box>
            <Box hideBelow="md">
                <SearchBar />
                <OrderNow />
            </Box>
        </>
    );
};
