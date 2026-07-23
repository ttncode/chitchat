<template>
  <header class="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
    <h1 class="text-2xl font-semibold">Chit Chat</h1>
    <div class="relative">
      <button id="menuButton" class="focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
        </svg>
      </button>
      <!-- Menu Dropdown -->
      <div
        id="menuDropdown"
        class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden"
      >
        <ul class="py-2 px-3">
          <li><a href="#" class="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 1</a></li>
          <li><a href="#" class="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 2</a></li>
          <!-- Add more menu options here -->
        </ul>
      </div>
    </div>
  </header>
</template>
