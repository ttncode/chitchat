<script lang="ts" setup>
import { io, Socket } from 'socket.io-client';

const socket: Socket = io();
const message = ref<string>('');
const { $api } = useNuxtApp();

onMounted(() => {
  console.log('onMounted');
  try {
    socket.connect();
    console.log('Connect socket success');
  } catch (error) {
    console.error('Error on connection:', error);
  }
});

onUpdated(() => console.log(message.value));

const sendMessage = async () => {
  try {
    alert('clicked');
  } catch (error) {
    console.error('Error sending message:', error);
  }
};
</script>

<template>
  <footer class="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
    <div class="flex items-center">
      <h1 class="text-3xl text-red-500">{{ message }}</h1>
      <input
        type="text"
        placeholder="Type a message..."
        class="w-full p-3 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
        v-model="message"
      />
      <button class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2" @click="sendMessage">Send</button>
    </div>
  </footer>
</template>
