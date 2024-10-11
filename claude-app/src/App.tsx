import './App.css';
import 'flowbite';
import ChatBox from './components/ChatBox';
import { createSignal, createEffect, onCleanup } from 'solid-js';
import { streamFile } from './utils';
import InputBox from './components/Input';

export default function App() {
    const [text, setText] = createSignal('some random markdown text');

    createEffect(() => {
        console.log('Effect running');

        const streamContent = async () => {
            for await (const chunk of streamFile('./data.txt')) {
                setText((prevText) => prevText + chunk);
                await new Promise((resolve) => setTimeout(resolve, 100)); // Delay between chunks
            }
        };

        streamContent();

        onCleanup(() => {
            console.log('Cleaning up');
        });
    });

    const props = { type: 'user', content: text };
    //return <ChatBox {...props} />;
    return <InputBox />;
}
