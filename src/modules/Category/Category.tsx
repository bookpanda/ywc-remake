import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { SearchBar } from "../Browse/SearchBar";
import { ItemsGrid } from "./ItemsGrid";

interface CategoryProps {
    category: string;
}

export const Category: FC<CategoryProps> = ({ category }) => {
    return (
        <Box>
            <SearchBar />
            <ItemsGrid category={category} />
        </Box>
    );
};
