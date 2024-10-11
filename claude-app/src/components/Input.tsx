import { createSignal } from 'solid-js';
import 'flowbite';

function InputBox() {
    const [isOpen, setIsOpen] = createSignal(false);

    return (
        <>
            <div class="relative w-full max-w-lg mx-auto mt-8">
                {/* <!-- Textbox with Dropdown --> */}
                <div class="flex items-center border border-gray-300 rounded-lg shadow-sm">
                    {/* <!-- Textarea --> */}
                    <textarea
                        class="w-full p-3 border-none focus:ring-0 rounded-lg"
                        placeholder="Type your message..."
                    ></textarea>

                    {/* <!-- Icons for attachment and camera --> */}
                    <div class="flex items-center space-x-2 pr-3">
                        <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
                            {/* <!-- Attachment Icon --> */}
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M3 8a4 4 0 014-4h6a2 2 0 010 4H9a1 1 0 000 2h4a4 4 0 010 8H7a6 6 0 010-12h8a1 1 0 000-2H7a8 8 0 100 16h6a6 6 0 100-12H7a2 2 0 000 4h4a1 1 0 000-2H7a4 4 0 00-4 4z" />
                            </svg>
                        </button>
                        <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
                            {/* <!-- Camera Icon --> */}
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M4 5a2 2 0 012-2h2l.59-1.17A1 1 0 0110 1h4a1 1 0 01.91.58L15.41 3H18a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm10.83 5.17a3 3 0 11-4.24-4.24 3 3 0 014.24 4.24zM7 11a1 1 0 110 2 1 1 0 010-2z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* <!-- Dropdown Menu --> */}
                <div
                    class="absolute top-14 left-0 bg-white border border-gray-300 rounded-lg shadow-lg w-full hidden"
                    id="dropdown"
                >
                    <ul class="py-1">
                        <li>
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Option 1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Option 2
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Option 3
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default InputBox;
