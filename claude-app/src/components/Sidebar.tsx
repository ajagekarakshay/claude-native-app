import { createSignal, For } from 'solid-js';

type MenuItem = {
    icon: string;
    label: string;
    href: string;
};

type SidebarProps = {
    settingsItem: MenuItem;
    scrollItems: string[];
};

const Sidebar = (props: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = createSignal(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed());
    };

    return (
        <aside
            class={`fixed top-0 left-0 z-40 w-64 h-screen transition-all duration-300 ease-in-out ${
                isCollapsed() ? 'w-16 sm:w-16' : 'w-64'
            }`}
            aria-label="Sidebar"
            onMouseEnter={() => setIsCollapsed(false)}
            onMouseLeave={() => setIsCollapsed(true)}
        >
            <div class="h-full flex flex-col overflow-hidden bg-[#21201d]">
                <button
                    onClick={toggleSidebar}
                    class="absolute right-2 top-2 p-2 text-gray-600 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-50"
                >
                    {isCollapsed() ? (
                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    )}
                </button>
                <div class="flex-grow px-3 py-4 overflow-y-auto mt-8">
                    <ul class="space-y-2 font-medium">
                        <For each={props.scrollItems}>
                            {(item) => (
                                <li class="text-gray-500 dark:text-gray-400">
                                    <span
                                        class={`block py-2 ${isCollapsed() ? 'hidden' : ''}`}
                                    >
                                        {item}
                                    </span>
                                </li>
                            )}
                        </For>
                    </ul>
                </div>
                <div class="flex-shrink-0 px-3 py-4 mt-auto border-t border-gray-200 dark:border-gray-700">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <a
                                href={props.settingsItem.href}
                                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    class="w-5 h-5 text-[#c36b4d] transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path d={props.settingsItem.icon} />
                                </svg>
                                <span
                                    class={`ms-3 ${isCollapsed() ? 'hidden' : ''}`}
                                >
                                    {props.settingsItem.label}
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
