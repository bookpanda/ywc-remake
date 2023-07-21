"use client";

import { FC, PropsWithChildren } from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Container } from "@chakra-ui/react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <NavBar />
            <Container bgColor="pink.100" maxW={"90%"}>
                {children}
            </Container>
            <Footer />
        </>
    );
};
