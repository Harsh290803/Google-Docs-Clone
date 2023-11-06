import React, { useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italics", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

export default function TextEditor() {
  useEffect(() => {
    const editor = document.createElement("div");
    document.getElementById("container").append(editor);
    new Quill(editor, { theme: "snow", modules: {toolbar: TOOLBAR_OPTIONS} });

    return () => {
      document.getElementById("container").innerHTML = "";
    };
  }, []);
  return <div id="container"></div>;
}
