"use client";

import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { OrderNow } from "../Home/Items";
import { SearchBar } from "./SearchBar";
import { ItemsShelf } from "./Category";

export const Browse: FC = () => {
    return (
        <>
            <Box hideFrom="md">
                <SearchBar />
                <ItemsShelf />
                <OrderNow />
            </Box>
            <Box hideBelow="md">
                <SearchBar />
                <OrderNow />
                <ItemsShelf />
            </Box>
        </>
    );
};
