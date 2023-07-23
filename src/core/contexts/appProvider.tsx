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

    const orderItems = () => {
        let newItems = items;
        for (const order of orders) {
            const item =
                newItems.find((item) => item.id === order.itemId) ??
                newItems[0];
            item.currentAmount += order.amount;
            newItems = [
                ...newItems.filter((item) => item.id !== order.itemId),
                item,
            ];
        }
        setItems(() => newItems);
        setOrders(() => []);
        // const { amount, id, itemId, price } =
        //     orders.find((order) => order.id === orderId) || {};
        // if (itemId && amount && price && id) {
        //     const item = items.find((item) => item.id === itemId);
        //     if (item) {
        //         const finalAmount = Math.max(0, item.currentAmount + amount);
        //         setItems((prev) => {
        //             const finalItems = [
        //                 ...prev.filter((item) => item.id !== itemId),
        //                 {
        //                     ...item,
        //                     currentAmount: finalAmount,
        //                 },
        //             ];
        //             setOrders((prev) => [
        //                 ...prev.filter((o) => o.id !== orderId),
        //             ]);

        //             return finalItems;
        //         });
        //     }
        // }
    };

    const addToCart = (itemId: number, amount: number) => {
        const item = items.find((item) => item.id === itemId);
        if (item) {
            setOrders((prev) => [
                ...prev,
                {
                    id: orders.length + 1,
                    price: amount * item.price,
                    itemId: item.id,
                    amount,
                },
            ]);
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
                addToCart,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
