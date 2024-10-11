import './App.css';
import 'flowbite';
import ChatBox from './components/ChatBox';
import { createSignal, createEffect, onCleanup } from 'solid-js';
import { streamFile } from './utils';
import InputBox from './components/InputBox';
import Sidebar from './components/Sidebar';

const settingsItem = {
    icon: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
    label: 'Settings',
    href: '/settings',
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
        <div class="flex h-screen">
            <Sidebar settingsItem={settingsItem} scrollItems={scrollItems} />
            <div class="flex-1 relative">
                {/* Main content area */}
                <div class="p-4">{/* Add your main content here */}</div>

                {/* InputBox fixed at the bottom center */}
                <div class="absolute bottom-0 left-0 right-0 p-0 flex justify-center">
                    <InputBox />
                </div>
            </div>
        </div>
    );
}
