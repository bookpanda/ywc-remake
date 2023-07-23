import { FC } from "react";
import { Flex } from "@chakra-ui/react";
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
                h={{ base: "105vh", md: "90vh", lg: "70vh", xl: "60vh" }}
                px={{ base: "0%", xl: "10%" }}
                align="center"
                justify="center"
                direction={{ base: "column", lg: "row" }}
                gap={"5%"}
            >
                <DisplayImage
                    image={ingredient.image}
                    deadline={item.deadline}
                />
                <ItemInfo item={item} ingredient={ingredient} />
            </Flex>
        )
    );
};
