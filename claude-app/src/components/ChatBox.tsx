import { createSignal, Show } from "solid-js";
import { marked } from "marked";

function ChatBox(props: { type: string; content: () => string }) {
  // const [content, setContent] = createSignal(props.content());

  // Update content as more text streams in
  // const appendText = (newText: any) => {
  //   setContent((prev) => `${prev}${newText}`);
  // };

  const bgColor = props.type === "user" ? "bg-blue-500" : "bg-gray-500";
  const textColor = "text-white";

  return (
    <div class={`p-4 rounded-lg ${bgColor} ${textColor} max-w-lg`}>
      <div
        class="markdown-content"
        innerHTML={marked(props.content())}
      ></div>
    </div>
  );
}

export default ChatBox;
