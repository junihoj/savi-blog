import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false
});

export default function () {
  return (
    <MdEditor
      placeholder="Type in the box using markdown to format your description as you want"
      style={{ height: "500px" }}
      shortcuts={true}
      renderHTML={(text) => <ReactMarkdown children={text} />}
    />
  );
}