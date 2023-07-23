"use client";

import { Category } from "@/modules/Category";
import { NextPage } from "next";

interface CategoryPageProps {
    params: {
        itemId: string;
    };
}

const ItemPage: NextPage<CategoryPageProps> = ({ params }) => {
    return (
        <>
            <Category category={params.itemId} />
        </>
    );
};

export default ItemPage;
