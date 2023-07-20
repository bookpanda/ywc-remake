import { headerSizes, subHeaderSizes } from "@/core/utils/fontSizes";
import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const WorthShare: FC = () => {
    return (
        <Flex justify="center" mt={"10vh"} direction="column">
            <Text fontSize={headerSizes} fontWeight="bold" textAlign="center">
                “ SHAREKAN ” <br />
                THIS IS WORTH SHARING
            </Text>
            <Text fontSize={subHeaderSizes} textAlign="center" mt={"2vh"}>
                แชร์กันซื้อวัตถุดิบคุณภาพในราคาถูกกว่าท้องตลาด
            </Text>
        </Flex>
    );
};
