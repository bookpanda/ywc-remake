import { FC, PropsWithChildren } from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};
