import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { GoBack } from "./GoBack";
import { ItemDisplay } from "./ItemDisplay";

interface ItemProps {
    itemId: string;
}

export const Item: FC<ItemProps> = ({ itemId }) => {
    return (
        <Box>
            <GoBack />
            <ItemDisplay itemId={itemId} />
        </Box>
    );
};
