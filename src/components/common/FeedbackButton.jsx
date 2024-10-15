import { MessageSquare } from "lucide-react"; // Optional icon
import Link from "next/link";

export default function FeedbackButton() {
    return (
        <div className="fixed bottom-4 right-24">
            <Link href="/feedback">
                <button className="bg-blue-600 text-white py-3 px-4 rounded-full shadow-lg flex items-center hover:bg-blue-700 transition  animate-bounce">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Feedback
                </button>
            </Link>
        </div>
    );
}
