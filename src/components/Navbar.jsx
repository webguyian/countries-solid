import { A } from '@solidjs/router';

function Navbar() {
  const toggleTheme = () => document.documentElement.classList.toggle('dark');

  return (
    <nav class="flex items-center justify-between px-8 py-4 bg-white shadow dark:bg-[#2b3945] dark:text-white">
      <A class="font-extrabold text-lg" href="/">
        Where in the world?
      </A>
      <button
        class="flex text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md text-sm p-2"
        type="button"
        onClick={toggleTheme}
      >
        <svg
          data-id="dark-mode"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        <span data-id="dark-mode" class="text-base ml-2">
          Dark Mode
        </span>
        <svg
          class="w-5 h-5"
          data-id="light-mode"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
        <span data-id="light-mode" class="text-base ml-2">
          Light Mode
        </span>
      </button>
    </nav>
  );
}

export default Navbar;
