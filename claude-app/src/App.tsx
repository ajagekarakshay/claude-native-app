import "./App.css";
import ChatBox from "./components/ChatBox";
import { createSignal, createEffect, onCleanup } from "solid-js";

export default function App() {
  const [text, setText] = createSignal("some random markdown text");

  createEffect(() => {
    console.log("Effect running"); // Add this line
    const interval = setInterval(() => {
      setText((prevText) => {
        const newText = prevText + "\nrandom gibberish text \n ```python\nprint('Hello, world!')\n```";
        console.log("New text:", newText); // Add this line
        return newText;
      });
    }, 1000);
    
    onCleanup(() => {
      console.log("Cleaning up interval"); // Add this line
      clearInterval(interval);
    });
  });
  const props = { type: "sys", content: text };
  return <ChatBox {...props} />;
}