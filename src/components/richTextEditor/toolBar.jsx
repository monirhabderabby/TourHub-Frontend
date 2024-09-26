"use client";

import {
    AlignCenter,
    AlignLeft,
    AlignRight,
    Bold,
    Heading1,
    Heading2,
    Heading3,
    Highlighter,
    Italic,
    List,
    ListOrdered,
    Minus,
    Strikethrough,
    Underline,
    Upload,
} from "lucide-react";
import { Toggle } from "../ui/toggle";

const ToolBar = ({ editor }) => {
    if (!editor) return null;

    const addImage = () => {
        const url = window.prompt("URL");
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    const options = [
        {
            icon: <Heading1 className="size-4" />,
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 1 }).run(),
            preesed: editor.isActive("heading", { level: 1 }),
        },
        {
            icon: <Heading2 className="size-4" />,
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 2 }).run(),
            preesed: editor.isActive("heading", { level: 2 }),
        },
        {
            icon: <Heading3 className="size-4" />,
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 3 }).run(),
            preesed: editor.isActive("heading", { level: 3 }),
        },
        {
            icon: <Underline className="size-4" />,
            onClick: () => editor.commands.toggleUnderline(),
            preesed: editor.isActive("underline"),
        },
        {
            icon: <Minus className="size-4" />,
            onClick: () => editor.commands.setHorizontalRule(),
            preesed: editor.isActive("horizontalRule"),
        },
        {
            icon: <Bold className="size-4" />,
            onClick: () => editor.chain().focus().toggleBold().run(),
            preesed: editor.isActive("bold"),
        },
        {
            icon: <Italic className="size-4" />,
            onClick: () => editor.chain().focus().toggleItalic().run(),
            preesed: editor.isActive("italic"),
        },
        {
            icon: <Strikethrough className="size-4" />,
            onClick: () => editor.chain().focus().toggleStrike().run(),
            preesed: editor.isActive("strike"),
        },
        {
            icon: <AlignLeft className="size-4" />,
            onClick: () => editor.chain().focus().setTextAlign("left").run(),
            preesed: editor.isActive({ textAlign: "left" }),
        },
        {
            icon: <AlignCenter className="size-4" />,
            onClick: () => editor.chain().focus().setTextAlign("center").run(),
            preesed: editor.isActive({ textAlign: "center" }),
        },
        {
            icon: <AlignRight className="size-4" />,
            onClick: () => editor.chain().focus().setTextAlign("right").run(),
            preesed: editor.isActive({ textAlign: "right" }),
        },
        {
            icon: <List className="size-4" />,
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            preesed: editor.isActive("bulletList"),
        },
        {
            icon: <ListOrdered className="size-4" />,
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            preesed: editor.isActive("orderedList"),
        },
        {
            icon: <Highlighter className="size-4" />,
            onClick: () => editor.chain().focus().toggleHighlight().run(),
            preesed: editor.isActive("highlight"),
        },
        {
            icon: <Upload className="size-4" />,
            onClick: () => addImage(),
            preesed: editor.isActive("image"),
        },
    ];

    return (
        <div className="border bg-slate-50 rounded-md p-1 mb-1 space-x-1">
            {options.map((option, i) => (
                <Toggle
                    key={i}
                    size="sm"
                    pressed={option.preesed}
                    onClick={option.onClick}
                    onChange={option.onClick}
                    aria-label="Toggle bold"
                >
                    {option.icon}
                </Toggle>
            ))}
        </div>
    );
};

export default ToolBar;
