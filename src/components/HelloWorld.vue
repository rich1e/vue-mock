<script setup lang="ts">
import axios from 'axios'
import { from, Observable, scheduled, asyncScheduler } from 'rxjs'
import { Warrior } from '../helper/ioc/interfaces';
import { myContainer } from '../helper/ioc/inversify.config';
import { TYPES } from '../helper/ioc/types';

// expect(ninja.fight()).eql("cut!"); // true
// expect(ninja.sneak()).eql("hit!"); // true

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

const observeMesthodHandler = () => {
  const observable = from(axios.get('api/get'))

  observable.subscribe((res: any) => {
    console.log('This observe method#', res)
  })

  // const asyncObserve$ = scheduled(observable, asyncScheduler)

  // asyncObserve$.subscribe((res: any) => {
  //   console.log('This observe method#', res)
  // })

  // const observable = new Observable((observer) => {
  //   const ob = from(axios.get('api/get'))
  //   ob.subscribe((res: any) => {
  //     observer.next(res)
  //     observer.complete();
  //   });
  // })

  // observable.subscribe({
  //   next(res) {
  //     console.log('This observe method#', res)
  //   },
  //   error(err) {
  //     console.log(`错误信息：${err}`)
  //   },
  //   complete() {
  //     console.log('Done!')
  //   }
  // })
}

const httpClientTestHandler = async () => {
  // const http = httpClient.create()
  // const res = await http.get('api/get')
  // console.log('This httpClient method#', res)

 const ninja = myContainer.get<Warrior>(TYPES.Warrior);

 console.log(ninja.fight())
 console.log(ninja.sneak())
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="promiseMethodHandler">Promise</button>
    <button type="button" @click="awaitMethodHandler">Await</button>
    <button type="button" @click="observeMesthodHandler">Observe</button>
    <button type="button" @click="httpClientTestHandler">HttpClient</button>
  </div>
</template>

<style scoped>
.card button {
  margin: 0 10px;
}
</style>
