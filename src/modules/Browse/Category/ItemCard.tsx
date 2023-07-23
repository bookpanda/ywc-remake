import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/ingredients";
import { Item } from "@/core/types";
import { Card } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ItemsRowProps {
    item: Item;
}

export const ItemsCard: FC<ItemsRowProps> = ({ item }) => {
    const { push } = useRouter();
    const { searchText } = useAppContext();
    const ingredient = Ingredients.find((i) => i.id === item.ingredientId);

    return (
        ingredient && (
            <Card
                w={{ base: "25%", lg: "11%" }}
                h="100%"
                overflow="hidden"
                filter="auto"
                onClick={() => push(`/item/${item.id}`)}
                _hover={{
                    brightness: "80%",
                    transition: "0.3s",
                    cursor: "pointer",
                }}
                display={
                    ingredient.name.includes(searchText.toLowerCase())
                        ? "block"
                        : "none"
                }
            >
                <Image
                    alt="ingredient"
                    src={ingredient.image}
                    style={{
                        objectFit: "cover",
                        flexShrink: 0,
                        minWidth: "100%",
                        minHeight: "100%",
                    }}
                />
            </Card>
        )
    );
};
