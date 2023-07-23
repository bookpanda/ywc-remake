"use client";

import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { CheckoutHeader } from "./CheckoutHeader";
import { ShopsMap } from "./ShopsMap";
import { Receipt } from "./Receipt";
import { ConfirmPurchase } from "./ConfirmPurchase";

export const Checkout: FC = () => {
    return (
        <Box>
            <CheckoutHeader />
            <ShopsMap />
            <Receipt />
            <ConfirmPurchase />
        </Box>
    );
};
