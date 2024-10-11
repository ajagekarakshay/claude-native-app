import { createSignal, Show, onMount, createMemo } from 'solid-js';
import { Marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { markedHighlight } from 'marked-highlight';

function ChatBox(props: { type: string; content: () => string }) {
  // const [content, setContent] = createSignal(props.content());

  // Update content as more text streams in
  // const appendText = (newText: any) => {
  //   setContent((prev) => `${prev}${newText}`);
  // };
  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang, info) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
    })
  );

  // marked.parse(`
  // \`\`\`javascript
  // const highlight = "code";
  // \`\`\`
  // `);

  const bgColor = props.type === 'user' ? 'bg-[#21201c]' : 'bg-[#373735]';
  const textColor = 'text-white';

  // Configure marked to use Highlight.js for code blocks
  // marked.setOptions({
  //   highlight: function(code: any, lang: any) {
  //     if (lang && hljs.getLanguage(lang)) {
  //       return hljs.highlight(code, { language: lang }).value;
  //     } else {
  //       return hljs.highlightAuto(code).value;
  //     }
  //   }
  // });

  const contentHtml = createMemo(() => marked.parse(props.content()));

  // onMount(() => {
  //   // Initially render the content
  //   contentHtml = marked(props.content());
  // });

  return (
    <div
      class={`p-2 rounded-lg ${bgColor} ${textColor} max-w-lg flex items-start`}
    >
      <Show when={props.type === 'user'}>
        <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">
          U
        </div>
      </Show>
      <div class="markdown-content" innerHTML={contentHtml()}></div>
    </div>
  );
}

export default ChatBox;
