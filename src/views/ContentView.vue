<script>
// 引入圖片到這個VUE檔案來使用
// import 名稱 from 從哪裡引入
import bento from '@/assets/便當菜單.jpg';
// import bento1 from '../assets/便當菜單.jpg';
// import bento from '/img/便當菜單.jpg';
// js 大多數是使用單引號來撰寫

export default {
    data() {
        return {
            orders: {
                teacher: '',
                TA: '',
                student: Array(15).fill(''),
            },
            // students: Array(15).fill().map((_, i) => ({ name: `同學${String.fromCharCode(65 + i)}` })),
            students: Array(15).fill().map((_, i) => ({ name: `同學${i + 1}` })),

            prices: {
                "大雞腿便當": 95,
                "大滷雞腿便當": 95,
                "日式豬排便當": 85,
                "招牌排骨便當": 85,
                "鯖魚便當": 85,
                "三杯雞便當": 85,
                "茄汁排骨便當": 85,
                "招牌雞腿便當": 65,
            },
            isSubmitted: false,
            // 要使用圖片的話，就要在資料裡面撰寫對應的連結
            // Vue的內容使用的變數名稱:引入的變數名稱,
            bento: bento,
        };
    },
    computed: {
        totalOrder() {
            return (this.orders.teacher ? 1 : 0) +
                (this.orders.TA ? 1 : 0) +
                this.orders.student.filter(student => student !== '').length;
        },

        // totalOrder() {
        //   return Object.values(this.orders).flat().filter(order => order !== '').length;
        // },

        totalPrice() {
            let total = 0;

            if (this.orders.teacher) {
                total += this.prices[this.orders.teacher];
            }

            if (this.orders.TA) {
                total += this.prices[this.orders.TA];
            }

            this.orders.student.forEach(order => {
                if (order) {
                    total += this.prices[order];
                }
            });

            return total;
        },

        // totalPrice() {
        //   return Object.values(this.orders)
        //     .flat()
        //     .filter(order => order !== '')
        //     .reduce((total, order) => total + this.prices[order], 0);
        // },

    },
    methods: {
        submitOrder() {
            this.isSubmitted = true;
        },
        resetOrder() {
            this.isSubmitted = false;
            this.orders = {
                teacher: '',
                TA: '',
                student: Array(15).fill(''),
            };
        },
    },

}
</script>

<template>
    <figure class="img-block">
        <img :src="bento" alt="便當菜單">
    </figure>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
    {{ bento }}
    <div class="container">
        <fieldset class="card">
            <legend>老師</legend>
            <label>
                <input type="radio" name="teacherOrder" value="大雞腿便當" v-model="orders.teacher">
                大雞腿便當
            </label>
            <label>
                <input type="radio" name="teacherOrder" value="大滷雞腿便當" v-model="orders.teacher">
                大滷雞腿便當
            </label>
            <label>
                <input type="radio" name="teacherOrder" value="日式豬排便當" v-model="orders.teacher">
                日式豬排便當
            </label>
            <label>
                <input type="radio" name="teacherOrder" value="招牌排骨便當" v-model="orders.teacher">
                招牌排骨便當
            </label>
            <label>
                <input type="radio" name="teacherOrder" value="鯖魚便當" v-model="orders.teacher">
                鯖魚便當
            </label>
            <label>
                <input type="radio" name="teacherOrder" value="三杯雞便當" v-model="orders.teacher">
                三杯雞便當
            </label>
            <label>
                <input type="radio" name="teacherOrder" value="茄汁排骨便當" v-model="orders.teacher">
                茄汁排骨便當
            </label>
            <label>
                <input type="radio" name="teacherOrder" value="招牌雞腿便當" v-model="orders.teacher">
                招牌雞腿便當
            </label>
            <hr>
            <p class="choose">{{ orders.teacher }}</p>
        </fieldset>
        <fieldset class="card">
            <legend>助教</legend>
            <label>
                <input type="radio" name="TAOrder" value="大雞腿便當" v-model="orders.TA">
                大雞腿便當
            </label>
            <label>
                <input type="radio" name="TAOrder" value="大滷雞腿便當" v-model="orders.TA">
                大滷雞腿便當
            </label>
            <label>
                <input type="radio" name="TAOrder" value="日式豬排便當" v-model="orders.TA">
                日式豬排便當
            </label>
            <label>
                <input type="radio" name="TAOrder" value="招牌排骨便當" v-model="orders.TA">
                招牌排骨便當
            </label>
            <label>
                <input type="radio" name="TAOrder" value="鯖魚便當" v-model="orders.TA">
                鯖魚便當
            </label>
            <label>
                <input type="radio" name="TAOrder" value="三杯雞便當" v-model="orders.TA">
                三杯雞便當
            </label>
            <label>
                <input type="radio" name="TAOrder" value="茄汁排骨便當" v-model="orders.TA">
                茄汁排骨便當
            </label>
            <label>
                <input type="radio" name="TAOrder" value="招牌雞腿便當" v-model="orders.TA">
                招牌雞腿便當
            </label>
            <hr>
            <p class="choose">{{ orders.TA }}</p>
        </fieldset>
        <fieldset v-for="(student, index) in students" :key="index" class="card">
            <legend>{{ student.name }}</legend>
            <label>
                <input type="radio" name="studentOrder" value="大雞腿便當" v-model="orders.student[index]">
                大雞腿便當
            </label>
            <label>
                <input type="radio" name="studentOrder" value="大滷雞腿便當" v-model="orders.student[index]">
                大滷雞腿便當
            </label>
            <label>
                <input type="radio" name="studentOrder" value="日式豬排便當" v-model="orders.student[index]">
                日式豬排便當
            </label>
            <label>
                <input type="radio" name="studentOrder" value="招牌排骨便當" v-model="orders.student[index]">
                招牌排骨便當
            </label>
            <label>
                <input type="radio" name="studentOrder" value="鯖魚便當" v-model="orders.student[index]">
                鯖魚便當
            </label>
            <label>
                <input type="radio" name="studentOrder" value="三杯雞便當" v-model="orders.student[index]">
                三杯雞便當
            </label>
            <label>
                <input type="radio" name="studentOrder" value="茄汁排骨便當" v-model="orders.student[index]">
                茄汁排骨便當
            </label>
            <label>
                <input type="radio" name="studentOrder" value="招牌雞腿便當" v-model="orders.student[index]">
                招牌雞腿便當
            </label>
            <hr>
            <p class="choose">{{ orders.student[index] }}</p>
        </fieldset>
    </div>
    <hr>
    <aside class="statistics-block">
        <div>
            <button type="button" class="btn" @click="submitOrder" :disabled="isSubmitted">送出訂單</button>
            <button type="button" class="btn" @click="resetOrder" :disabled="!isSubmitted">重訂便當</button>
        </div>
        <p>總共訂{{ totalOrder }}個便當</p>
        <p>
            共
            <b class="total">{{ totalPrice }}</b>
            元
        </p>
    </aside>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.img-block {
    display: flex;
    justify-content: center;
    background-color: rgb(195, 31, 31);
}

img {
    height: 50dvh;
}

.container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 30px;
}

.card {
    display: flex;
    flex-direction: column;
    padding: 4px 12px 12px;
    border: 1px solid #000000;
    border-radius: 8px;
}

.card legend {
    font-size: 1.125rem;
    font-weight: bold;
}

.card label,
.card input {
    cursor: pointer;
}

.card .choose {
    display: flex;
    justify-content: center;
    height: 22.5px;
    color: blue;
}

.btn {
    padding: 8px 16px;
    color: #333333;
    border: 1px solid #333333;
    border-radius: 4px;
    margin-bottom: 8px;
    margin-right: 8px;
    cursor: pointer;
}

.btn:hover {
    background-color: #333333;
    color: #fff;
}

.statistics-block {
    padding: 12px 30px;
}

.total {
    font-size: 1.5rem;
    color: red;
}
</style>