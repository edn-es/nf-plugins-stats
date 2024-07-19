
<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from '../components/HelloWorld.vue';
import PluginsChart from '../components/PluginsChart.vue';
const display = ref(false);
</script>

<template>
  <main>
    <PluginsChart></PluginsChart>
  </main>
</template>
