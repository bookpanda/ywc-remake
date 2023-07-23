import { body1Sizes } from "@/core/utils/fontSizes";
import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const CheckoutHeader: FC = () => {
    return (
        <Flex direction="column" mt={6}>
            <Text
                fontSize={body1Sizes}
                py={2}
                px={5}
                borderRadius="3xl"
                border="1px"
                borderColor="tertiary.700"
            >
                ที่อยู่ร้านค้าผู้รับ
            </Text>
            <Text
                fontSize={body1Sizes}
                py={2}
                px={5}
                borderRadius="3xl"
                border="1px"
                borderColor="tertiary.700"
                mt={2}
            >
                ร้านค้าร่วมดีลใกล้คุณ
            </Text>
        </Flex>
    );
};
