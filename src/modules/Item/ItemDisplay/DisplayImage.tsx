import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { Box } from "@chakra-ui/react";

interface DisplayImageProps {
    image: StaticImageData;
}

export const DisplayImage: FC<DisplayImageProps> = ({ image }) => {
    return (
        <Box w={{ base: "40%", lg: "40%" }} h={{ base: "40%", lg: "100%" }}>
            <Image
                alt="ingredient"
                src={image}
                style={{
                    objectFit: "cover",
                    flexShrink: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                    borderRadius: "0.5rem",
                }}
            />
        </Box>
    );
};
