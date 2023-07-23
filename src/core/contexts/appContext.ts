"use client";

import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { Item, Order } from "../types";

interface IAppContext {
    items: Item[];
    setItems: Dispatch<SetStateAction<Item[]>>;
    orderItems: () => void;
    searchText: string;
    setSearchText: Dispatch<SetStateAction<string>>;
    orders: Order[];
    addToCart: (itemId: number, amount: number) => void;
}

export const AppContext = createContext<IAppContext>({
    items: [],
    setItems: () => {},
    orderItems: () => {},
    searchText: "",
    setSearchText: () => {},
    orders: [],
    addToCart: () => {},
});

export function useAppContext() {
    return useContext(AppContext);
}
