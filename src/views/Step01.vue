<script>
import avatar from '@/assets/avatar.jpg'
import bars from '@/assets/svg/bars-solid.svg'
import cat from '@/assets/cat.jpg'
import svgexport2 from '@/assets/svg/svgexport-2.svg'
import svgexport3 from '@/assets/svg/svgexport-3.svg'

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
    // option的寫法是要寫一個components
    components: {
        NavBar,
        Footer,
    },
    data() {
        return {
            avatar,
            bars,
            cat,
            svgexport2,
            svgexport3,
        }
    }

}
</script>

<template>
    <div class="w-full h-screen">
        <!-- 使用元件的寫法和寫標籤是一樣的 -->
        <NavBar></NavBar>

        <div class="area bg-gray-400/50 align p-8">

            <div
                class="container bg-slate-50/80 lg:w-3/6 min-[476px]:p-8 p-5 relative shadow-lg shadow-slate-400/40 md:w-[80%] sm:w-[90%] w-[99%] min-[474px]:text-[16px] text-[12px]">
                <div class="text-slate-500 min-[474px]:text-3xl text-2xl">購物車</div>

                <div class="progress-place flex justify-center min-[576px]:p-10 py-10 whitespace-nowrap relative">
                    <div class="align flex-col">
                        <div
                            class="bg-lime-500 text-stone-50 align rounded-[50%] min-[476px]:w-[30px] min-[476px]:h-[30px] w-[25px] h-[25px] mr-1">
                            1</div>
                        <div class="min-[476px]:text-sm text-xs mt-2 text-center absolute bottom-3">確認購物車</div>
                    </div>
                    <div class="w-[200px] h-3 bg-gray-300 rounded-[5px] mt-2 mr-1">
                        <div class="w-6/12 h-3 bg-lime-500 rounded-[5px] mr-1"></div>
                    </div>

                    <div class="align flex-col">
                        <div
                            class="bg-lime-500 text-stone-50 align rounded-[50%] min-[476px]:w-[30px] min-[476px]:h-[30px] w-[25px] h-[25px] mr-1">
                            2</div>
                        <div class="min-[476px]:text-sm text-xs mt-2 text-center absolute bottom-3">付款與運送方式</div>
                    </div>
                    <div class="w-[200px] h-3 bg-gray-300 rounded-[5px] mt-2 mr-1"></div>

                    <div class="align flex-col">
                        <div
                            class="bg-gray-300 text-stone-50 align rounded-[50%] min-[476px]:w-[30px] min-[476px]:h-[30px] w-[25px] h-[25px] mr-1">
                            3</div>
                        <div class="min-[476px]:text-sm text-xs mt-2 text-center absolute bottom-3 ">填寫資料</div>
                    </div>
                    <div class="w-[200px] h-3 bg-gray-300 rounded-[5px] mt-2 mr-1"></div>

                    <div class="align flex-col">
                        <div
                            class="bg-gray-300 text-stone-50 align rounded-[50%] min-[476px]:w-[30px] min-[476px]:h-[30px] w-[25px] h-[25px] mr-1">
                            4</div>
                        <div class="min-[476px]:text-sm text-xs mt-2 text-center absolute bottom-3">完成訂購</div>
                    </div>
                </div>


                <div class="text-slate-500 min-[474px]:text-3xl lg:p-10 min-[474px]:p-8 pt-5">訂單明細</div>
                <div class="w-full border-b-[0.5px] border-b-slate-400/50 flex items-center justify-between">
                    <div class="flex items-center min-[468px]:p-5 p-0">
                        <img class="w-10 h-10 rounded-[50%] min-[377px]:mr-5 mr-3" :src="cat">
                        Chicken Momo <br>#56789
                    </div>
                    <div class="calculate cursor-pointer flex p-5">
                        <div class="minus-1 mr-3"> - </div>
                        <input class="count-1 min-[377px]:w-10 w-8 h-5 mr-2" value="1" min="0">
                        <div class="plus-1 mr-3"> + </div>
                        $10.50
                    </div>
                </div>

                <div class="w-full border-b-[0.5px] border-b-slate-400/50 flex items-center  justify-between">
                    <div class="flex items-center min-[468px]:p-5 p-0">
                        <img class="w-10 h-10 rounded-[50%] min-[377px]:mr-5 mr-3" :src="cat">
                        Chicken Momo<br>#54322
                    </div>
                    <div class="calculate cursor-pointer flex p-5">
                        <div class="minus-2 mr-3"> - </div>
                        <input class="count-2 min-[377px]:w-10 w-8 h-5 mr-2" value="1" min="0">
                        <div class="plus-2 mr-3"> + </div>
                        $10.50
                    </div>
                </div>

                <div class="w-full border-b-[0.5px] border-b-slate-400/50 flex items-center justify-between">
                    <div class="flex items-center min-[468px]:p-5 p-0">
                        <img class="w-10 h-10 rounded-[50%] min-[377px]:mr-5 mr-3" :src="cat">
                        Chicken Momo<br>#65478
                    </div>
                    <div class="calculate cursor-pointer flex p-5">
                        <div class="minus-3 mr-3"> - </div>
                        <input class="count-3 min-[377px]:w-10 w-8 h-5 mr-2" value="1" min="0">
                        <div class="plus-3 mr-3"> + </div>
                        $10.50
                    </div>
                </div>

                <div class="calc-place w-full p-15 flex justify-end border-b-[0.5px] border-b-slate-400/50">
                    <div class="calc-box w-[35%] min-[377px]:p-5 p-3">
                        <div class="flex justify-between">
                            <div class="calc-text calc-text-amount">數量：</div>
                            <div class="calc-text calc-text-number">3</div>
                        </div>

                        <div class="flex justify-between">
                            <div class="calc-text">小計：</div>
                            <div class="calc-text calc-text-subtotal">$31.5</div>
                        </div>

                        <div class="flex justify-between">
                            <div class="calc-text">運費：</div>
                            <div class="calc-text calc-text-trans">$24.9</div>
                        </div>

                        <div class="flex justify-between">
                            <div class="calc-text">統計：</div>
                            <div class="calc-text calc-text-sum">$56.4</div>
                        </div>
                    </div>
                </div>

                <div class="area-bottom w-full flex justify-between items-center mt-5">
                    <RouterLink to="/">
                        <button
                            class="next-btn w-[100px] bg-blue-700/90 text-slate-100 min-[474px]:text-xl text-[12px] p-1">返回購物</button>
                    </RouterLink>
                    <!-- <button class="p-1 min-[474px]:text-xl text-[12px]"> <-返回購物 </button> -->
                    <RouterLink to="/step02">
                        <button
                            class="next-btn w-[100px] bg-blue-700/90 text-slate-100 min-[474px]:text-xl text-[12px] p-1">下一步</button>
                    </RouterLink>
                    <!-- a標籤、buttton只能擇一使用 -->
                    <!-- a標籤 -> 連結到其他的網頁上 -->
                    <!-- buttton -> 送表單 -->
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<!-- <style scoped></style> scoped-> 只有使用在這個vue頁面中有作用 -->
<!-- <style></style>整個網頁都會有作用 -->

<style scoped></style>