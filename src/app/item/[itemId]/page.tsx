"use client";

import { Item } from "@/modules/Item";
import { NextPage } from "next";

interface CategoryPageProps {
    params: {
        itemId: string;
    };
}

const ItemPage: NextPage<CategoryPageProps> = ({ params }) => {
    return (
        <>
            <Item itemId={params.itemId} />
        </>
    );
};

export default ItemPage;
