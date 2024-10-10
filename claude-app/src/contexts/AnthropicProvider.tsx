import { createSignal, createContext, ParentComponent } from "solid-js";

export interface AnthropicContextType {
  sendMessage: (message: string) => Promise<void>;
  messages: string[];
}

const AnthropicContext = createContext<AnthropicContextType>();

const AnthropicProvider: ParentComponent = (props) => {
  const [messages, setMessages] = createSignal<string[]>([]);

  const sendMessage = async (message: string) => {
    setMessages([...messages(), message]);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages/stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer YOUR_API_KEY`,
        },
        body: JSON.stringify({
          prompt: message,
          // Add other necessary parameters here
        }),
      });

      if (!response.body) {
        throw new Error("No response body");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        setMessages((prev) => [...prev, chunkValue]);
      }
    } catch (error) {
      console.error("Error streaming message:", error);
    }
  };

  const contextValue: AnthropicContextType = {
    sendMessage,
    messages: messages(),
  };

  return (
    <AnthropicContext.Provider value={contextValue}>
      {props.children}
    </AnthropicContext.Provider>
  );
};

const useAnthropic = (): AnthropicContextType => {
    const context = useContext(AnthropicContext);
    if (!context) {
      throw new Error("useAnthropic must be used within an AnthropicsProvider");
    }
    return context;
  };
  
export default useAnthropic;