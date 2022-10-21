<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

defineProps<{ msg: string }>()

const promiseMethodHandler = () => {
  axios.get('api/get').then((res) => {
  console.log('This promise method#', res)
  })
}

const awaitMethodHandler = async () => {
  const res = await axios.get('api/get')
  console.log('This await method#', res)
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="promiseMethodHandler">Promise</button>
    <button type="button" @click="awaitMethodHandler">Await</button>
  </div>
</template>

<style scoped>
.card button {
  margin: 0 10px;
}
</style>
