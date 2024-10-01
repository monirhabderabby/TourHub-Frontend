import Category from "./components/category";

const CategoryPage = ({ params }) => {
    return (
        <div>
            <Category categoryId={params.categoryId} />
        </div>
    );
};

export default CategoryPage;
