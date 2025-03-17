import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 定義內容(值、方法、更新值的內容)
  const count = ref(0) //初始的值
  const doubleCount = computed(() => count.value = count.value * 2) //更新原本的值*2 
  // 暫緩
  function increment() {//方法 值+1
    count.value++
  }

  return { count, doubleCount, increment }
})
