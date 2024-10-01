import News from "./components/news";

const NewsPage = ({ params }) => {
    return (
        <div>
            <News newsId={params.newsId} />
        </div>
    );
};

export default NewsPage;
