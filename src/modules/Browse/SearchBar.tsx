import { FC } from "react";
import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useAppContext } from "@/core/contexts";

export const SearchBar: FC = () => {
    const { setSearchText } = useAppContext();
    return (
        <Flex mt="10vh" justify="center">
            <InputGroup w={{ base: "100%", lg: "70%", xl: "50%" }}>
                <Input
                    placeholder="ค้นหาวัตถุดิบ"
                    size="lg"
                    bgColor="white"
                    borderRadius="full"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <InputRightElement pointerEvents="none">
                    <SearchIcon color="black" mt={2} mr={5} />
                </InputRightElement>
            </InputGroup>
        </Flex>
    );
};
