<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <ChatroomSidebar />

    <!-- Main Chat Area -->
    <div class="flex-1">
      <!-- Chat Header -->
      <header class="bg-white p-4 text-gray-700">
        <h1 class="text-2xl font-semibold">Alice</h1>
      </header>

      <ChatMessage />
      <ChatFooter />
    </div>
  </div>
</template>
