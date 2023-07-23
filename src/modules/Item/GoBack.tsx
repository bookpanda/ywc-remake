import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { body2Sizes } from "@/core/utils/fontSizes";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const GoBack: FC = () => {
    const { back } = useRouter();
    return (
        <Flex
            onClick={() => back()}
            mt={{ base: "2vh", md: "5vh" }}
            _hover={{ cursor: "pointer" }}
            align="center"
        >
            <ChevronLeftIcon boxSize={6} />
            <Text fontSize={body2Sizes}>Go back</Text>
        </Flex>
    );
};
