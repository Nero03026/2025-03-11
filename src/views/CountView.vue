<script>
import { useCounterStore } from '@/stores/counter'
export default {
    mounted() {
        const counterStore = useCounterStore();
        console.log(counterStore.count);
        counterStore.doubleCount;
        console.log(counterStore.count);
    },
    methods: {
        clickbtn() {
            // 設定變數裝起來
            const counterStore = useCounterStore();

            console.log(counterStore.count);
            counterStore.increment();
            console.log(counterStore.count);
        },
        showcounter() {
            const counterStore = useCounterStore();
            return counterStore.count;
        }
    },
}
</script>

<template>
    <button type="button" @click="clickbtn">加一</button>
    {{ showcounter() }}
</template>

<style></style>