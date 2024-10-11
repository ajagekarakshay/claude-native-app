import { createSignal } from 'solid-js';
import 'flowbite';

function InputBox() {
    return (
        <div class="w-3/5 mx-auto">
            <form>
                <label for="chat" class="sr-only">
                    Your message
                </label>
                <div class="flex flex-col items-start px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <div class="flex items-center w-full">
                        <input
                            id="chat"
                            type="text"
                            class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    <div class="mt-2 w-full">
                        <label for="options" class="sr-only">
                            Choose an option
                        </label>
                        <select
                            id="options"
                            class="block w-48 p-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        >
                            <option value="" disabled selected>
                                Select an option
                            </option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default InputBox;
