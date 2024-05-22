<!--
https://eugenkiss.github.io/7guis/tasks/#counter
-->

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  {{ count }}
  <button class="counter" @click="count++">Count</button>
</template>

<style>
.counter{
    background-color:black;
    color:white;
    font-weight:bold;
    padding: 15px;
    border-radius:5px;
}
</style>