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
        const ordersCache = localStorage.getItem("orders");
        if (ordersCache) {
            setOrders(() => JSON.parse(ordersCache));
        } else {
            setOrders(() => []);
            localStorage.setItem("orders", JSON.stringify([]));
        }
        const itemsCache = localStorage.getItem("items");
        if (itemsCache) {
            setItems(() => JSON.parse(itemsCache));
        } else {
            setItems(() => initialItems);
            localStorage.setItem("items", JSON.stringify(initialItems));
        }
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
        localStorage.setItem("orders", JSON.stringify([]));
        localStorage.setItem("items", JSON.stringify(newItems));
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
            localStorage.setItem("orders", JSON.stringify(orders));
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
