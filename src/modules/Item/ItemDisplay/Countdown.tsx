import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { body1Sizes } from "@/core/utils/fontSizes";

interface CountdownProps {
    deadline: Date;
}

type timeType = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const calculateTimeLeft = (
    deadline: Date,
    setTime: Dispatch<SetStateAction<timeType>>
) => {
    const x = setInterval(() => {
        const now = new Date().getTime();
        const distance = deadline.getTime() - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTime({ days, hours, minutes, seconds });
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
};

export const Countdown: FC<CountdownProps> = ({ deadline }) => {
    const [time, setTime] = useState<timeType>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    useEffect(() => {
        calculateTimeLeft(deadline, setTime);
    }, [deadline]);

    return (
        <Flex
            h={{ base: "10%", lg: "10%" }}
            justify={{ base: "center", lg: "start" }}
        >
            <Text mt={4} fontSize={body1Sizes}>
                เหลือเวลา {time.days} วัน {time.hours} ชม {time.minutes} นาที{" "}
                {time.seconds} วินาที
            </Text>
        </Flex>
    );
};
