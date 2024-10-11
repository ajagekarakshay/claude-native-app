import { createSignal } from 'solid-js';
import 'flowbite';

function InputBox() {
    const [model, setModel] = createSignal('claude-3-5-sonnet');

    return (
        <div class="w-3/5 mx-auto">
            <form>
                <label for="chat" class="sr-only">
                    Your message
                </label>
                {/* Updated background color to #424345 */}
                <div class="flex flex-col items-start px-3 py-2 rounded-lg bg-[#424345]">
                    <div class="flex items-center w-full">
                        <input
                            id="chat"
                            type="text"
                            class="block mx-4 p-2.5 w-full text-sm text-gray-200 bg-[#424345] rounded-lg border border-gray-600 focus:outline-none focus:ring-0 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Reply to Claude..."
                        />
                        <button
                            type="submit"
                            class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                        >
                            <svg
                                class="w-5 h-5 rotate-90 rtl:-rotate-90"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 20"
                            >
                                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                            </svg>
                            <span class="sr-only">Send message</span>
                        </button>
                    </div>
                    {/* <!-- Dropdown Menu --> */}
                    <div class="mt-1 w-full">
                        <label for="options" class="sr-only">
                            Choose an option
                        </label>
                        <select
                            id="options"
                            class="appearance-none bg-transparent text-white border-none focus:outline-none"
                        >
                            <option value="claude-3-5-sonnet" disabled selected>
                                Claude 3.5 Sonnet
                            </option>
                            <option value="claude-3-opus">Claude 3 Opus</option>
                            <option value="claude-3-haiku">
                                Claude 3 Haiku
                            </option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default InputBox;
