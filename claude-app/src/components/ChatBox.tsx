import { createSignal, Show } from "solid-js";
import { marked } from "marked";

function ChatBox(props: { type: string; content: () => string }) {
  // const [content, setContent] = createSignal(props.content());

  // Update content as more text streams in
  // const appendText = (newText: any) => {
  //   setContent((prev) => `${prev}${newText}`);
  // };

  const bgColor = props.type === "user" ? "bg-[#21201c]" : "bg-[#373735]";
  const textColor = "text-white";

  return (
    <div class={`p-2 rounded-lg ${bgColor} ${textColor} max-w-lg flex items-start`}>
      <Show when={props.type === "user"}>
        <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">
          U
        </div>
      </Show>
      <div
        class="markdown-content"
        innerHTML={marked(props.content())}
      ></div>
    </div>
  );
}

export default ChatBox;
