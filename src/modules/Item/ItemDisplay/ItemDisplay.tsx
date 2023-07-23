import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { body2Sizes, subHeaderSizes, textSizes } from "@/core/utils/fontSizes";
import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";
import { DisplayImage } from "./DisplayImage";
import { ItemInfo } from "./ItemInfo";

interface ItemDisplayProps {
    itemId: string;
}

export const ItemDisplay: FC<ItemDisplayProps> = ({ itemId }) => {
    const { items } = useAppContext();
    const item = items.find((i) => i.id.toString() === itemId);
    const ingredient = Ingredients.find((i) => i.id === item?.ingredientId);
    return (
        item &&
        ingredient && (
            <Flex
                mt={{ base: "2vh", md: "5vh" }}
                h={{ base: "85vh", lg: "80vh", xl: "70vh" }}
                px={{ base: "0%", xl: "10%" }}
                align="center"
                justify="center"
                direction={{ base: "column", lg: "row" }}
                bg="lightblue"
                gap={"5%"}
            >
                <DisplayImage image={ingredient.image} />
                <ItemInfo item={item} ingredient={ingredient} />
            </Flex>
        )
    );
};
