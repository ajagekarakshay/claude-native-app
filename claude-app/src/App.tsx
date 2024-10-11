import './App.css';
import 'flowbite';
import ChatBox from './components/ChatBox';
import { createSignal, createEffect, onCleanup } from 'solid-js';
import { streamFile } from './utils';
import InputBox from './components/Input';
import Sidebar from './components/Sidebar';

const settingsItem = {
    icon: 'M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z',
    label: 'Settings',
    href: '#',
};

const scrollItems = [
    'Important Announcement',
    'New Feature Released',
    'Upcoming Maintenance',
    'Team Meeting Reminder',
    'Project Deadline Update',
    'Holiday Schedule',
    'Training Session Available',
    'Customer Feedback Highlights',
];

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
    return (
        <div class="flex">
            <Sidebar settingsItem={settingsItem} scrollItems={scrollItems} />
            <div class="p-4 sm:ml-64">
                <h1 class="text-2xl font-bold mb-4">
                    Welcome to the Dashboard
                </h1>
                <p>
                    This is the main content area. The sidebar can be collapsed
                    for a more compact view.
                </p>
            </div>
        </div>
    );
}
