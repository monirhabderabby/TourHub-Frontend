import dynamic from "next/dynamic";

const CategoryForm = dynamic(() => import("./components/categoryForm"), {
    ssr: false,
});

const CategoryPage = () => {
    return (
        <div>
            <CategoryForm />
        </div>
    );
};

export default CategoryPage;
