"use client";

import { Category } from "@/modules/Category";
import { NextPage } from "next";

interface CategoryPageProps {
    params: {
        category: string;
    };
}

const CategoryPage: NextPage<CategoryPageProps> = ({ params }) => {
    return (
        <>
            <Category category={params.category} />
        </>
    );
};

export default CategoryPage;
