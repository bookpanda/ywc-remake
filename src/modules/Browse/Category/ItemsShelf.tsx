import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { ItemsRow } from "./ItemsRow";
import { Category } from "@/core/types";

export const ItemsShelf: FC = () => {
    return (
        <Flex>
            <ItemsRow category={Category.Meat} />
            <ItemsRow category={Category.Vegatables} />
            <ItemsRow category={Category.Fruits} />
            <ItemsRow category={Category.Grains} />
            <ItemsRow category={Category.Dairy} />
            <ItemsRow category={Category.Spices} />
        </Flex>
    );
};
