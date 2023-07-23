import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Countdown } from "./Countdown";

interface DisplayImageProps {
    image: StaticImageData;
    deadline: Date;
}

export const DisplayImage: FC<DisplayImageProps> = ({ image, deadline }) => {
    return (
        <Box
            w={{ base: "80%", sm: "72%", md: "50%", lg: "40%" }}
            h={{ base: "40%", lg: "100%" }}
        >
            <Image
                alt="ingredient"
                src={image}
                style={{
                    objectFit: "cover",
                    flexShrink: 0,
                    minWidth: "100%",
                    minHeight: "90%",
                    maxHeight: "90%",
                    borderRadius: "0.5rem",
                }}
            />
            <Countdown deadline={deadline} />
        </Box>
    );
};
