"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const RichTextViewer = ({ content }) => {
    // Initialize the editor with the content (can be JSON or HTML)
    const editor = useEditor({
        extensions: [StarterKit],
        content, // This can be the HTML or JSON content from your database
        editable: false, // Make it non-editable if you just want to display content
    });

    return (
        <div>
            {/* Use EditorContent to render the content */}
            <EditorContent editor={editor} />
        </div>
    );
};

export default RichTextViewer;
