<script setup>
const sayHello = () => {
  alert('hello');
};
</script>
<template>
  Home page
  <button id="btn" v-on:click="sayHello">click me!</button>
</template>
