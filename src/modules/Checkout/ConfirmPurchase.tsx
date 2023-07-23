import { FC } from "react";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/core/contexts";

export const ConfirmPurchase: FC = () => {
    const { orderItems } = useAppContext();
    const { back } = useRouter();

    return (
        <Flex w="100%" justify="center">
            <Flex w={{ base: "100%", md: "80%", lg: "60%", xl: "50%" }} mt={10}>
                <Button
                    variant="outline"
                    color="primary.500"
                    _hover={{ bgColor: "primary.300" }}
                    w="45%"
                    onClick={() => back()}
                >
                    ย้อนกลับ
                </Button>
                <Spacer />
                <Button
                    variant="solid"
                    _hover={{ bgColor: "primary.700" }}
                    w="45%"
                    onClick={() => orderItems()}
                >
                    ยืนยัน
                </Button>
            </Flex>
        </Flex>
    );
};
