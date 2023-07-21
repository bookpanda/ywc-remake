"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";

import { AppContext } from "./appContext";
import { Item, Order } from "../types";
import { initialItems } from "./items";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const [items, setItems] = useState<Item[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        setItems(() => initialItems);
    }, []);

    const orderItems = (
        shopId: number,
        ingredientId: number,
        amount: number
    ) => {
        const item = items.find((item) => item.ingredientId === ingredientId);
        if (item) {
            const finalAmount = Math.max(0, item.amount - amount);
            setItems((prev) => {
                const finalItems = [
                    ...prev.filter(
                        (item) => item.ingredientId !== ingredientId
                    ),
                    {
                        ...item,
                        amount: finalAmount,
                    },
                ];
                setOrders((prev) => [
                    ...prev,
                    {
                        price: amount * item.price,
                        ingredientId: item.ingredientId,
                        amount,
                    },
                ]);

                return finalItems;
            });
        }
    };

    return (
        <AppContext.Provider
            value={{
                items,
                setItems,
                orderItems,
                searchText,
                setSearchText,
                orders,
                setOrders,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
