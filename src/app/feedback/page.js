import dynamic from "next/dynamic";

const FeedbackForm = dynamic(() => import("./components/feedback-form"), {
    ssr: false,
});

const FeedbackPage = () => {
    return (
        <div className="mt-20 md:mt-[60px] lg:mt-20 xl:mt-[60px]">
            <div className="flex justify-center items-center md:h-[calc(100vh-60px)]">
                <div>
                    {/* Feedback form */}
                    <FeedbackForm />
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;
