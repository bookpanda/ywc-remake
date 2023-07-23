import { FC } from "react";
import { Flex } from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";
import { facebookOri, lineOri, link, twitter } from "$public/images";

export const Social: FC = () => {
    return (
        <Flex align="center" gap={4} mt={2}>
            <Link
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
            >
                <Image
                    alt="facebook"
                    src={facebookOri}
                    width={40}
                    unoptimized
                />
            </Link>
            <Link
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
            >
                <Image alt="youtube" src={lineOri} width={40} unoptimized />
            </Link>
            <Link
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
            >
                <Image alt="line" src={twitter} width={40} />
            </Link>
            <Link
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
            >
                <Image alt="line" src={link} width={40} />
            </Link>
        </Flex>
    );
};
