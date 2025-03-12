<script>
import avatar from '@/assets/avatar.jpg'
import bars from '@/assets/svg/bars-solid.svg'
import cat from '@/assets/cat.jpg'
import svgexport2 from '@/assets/svg/svgexport-2.svg'
import svgexport3 from '@/assets/svg/svgexport-3.svg'

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
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
        <NavBar></NavBar>

        <div class="area bg-gray-400/50 align p-10">

            <div
                class="container bg-slate-50/80 lg:w-3/6 md:w-[80%] sm:w-[90%] w-[99%] min-[474px]:text-[16px] text-[12px] p-5 relative shadow-lg shadow-slate-400/40">
                <div class="text-slate-500 min-[474px]:text-3xl text-2xl">購物車</div>

                <div class="progress-place flex justify-center min-[576px]:p-10 py-8 whitespace-nowrap relative">
                    <div class="align flex-col">
                        <div
                            class="bg-lime-500 text-stone-50 align rounded-[50%] min-[476px]:w-[30px] min-[476px]:h-[30px] w-[25px] h-[25px] mr-1">
                            1</div>
                        <div class="min-[476px]:text-sm text-xs mt-2 text-center absolute bottom-3">確認購物車</div>
                    </div>
                    <div class="w-[200px] h-3 bg-lime-500 rounded-[5px] mt-2 mr-1"></div>

                    <div class="align flex-col">
                        <div
                            class="bg-lime-500 text-stone-50 align rounded-[50%] min-[476px]:w-[30px] min-[476px]:h-[30px] w-[25px] h-[25px] mr-1">
                            2</div>
                        <div class="min-[476px]:text-sm text-xs mt-2 text-center absolute bottom-3">付款與運送方式</div>
                    </div>
                    <div class="w-[200px] h-3 bg-gray-300 rounded-[5px] mt-2 mr-1">
                        <div class="w-6/12 h-3 bg-lime-500 rounded-[5px] mr-1"></div>
                    </div>

                    <div class="align flex-col">
                        <div
                            class="bg-lime-500 text-stone-50 align rounded-[50%] min-[476px]:w-[30px] min-[476px]:h-[30px] w-[25px] h-[25px] mr-1">
                            3</div>
                        <div class="min-[476px]:text-sm text-xs mt-2 text-center absolute bottom-3 ">填寫資料</div>
                    </div>
                    <div class="w-[200px] h-3 bg-gray-300 rounded-[5px] mt-2 mr-1"></div>

                    <div class="align flex-col">
                        <div
                            class="bg-lime-500 text-stone-50 align rounded-[50%] min-[476px]:w-[30px] min-[476px]:h-[30px] w-[25px] h-[25px] mr-1">
                            4</div>
                        <div class="min-[476px]:text-sm text-xs mt-2 text-center absolute bottom-3">完成訂購</div>
                    </div>
                </div>


                <div class="text-slate-500 min-[474px]:text-2xl text-xl lg:p-8 py-5">付款方式</div>

                <div class="w-full border-b-[0.5px] border-b-slate-400/50 flex items-center pl-5 pb-5">
                    <input class="mr-5" type="radio" name="pay-item">
                    <div class="min-[474px]:text-xl text-lg text-slate-500">信用卡付款</div>
                </div>
                <div class="w-full border-b-[0.5px] border-b-slate-400/50 flex items-center p-5">
                    <input class="mr-5" type="radio" name="pay-item">
                    <div class="min-[474px]:text-xl text-lg text-slate-500">網路ATM</div>
                </div>
                <div class="w-full border-b-[0.5px] border-b-slate-400/50 flex items-center p-5">
                    <input class="mr-5" type="radio" name="pay-item">
                    <div class="min-[474px]:text-xl text-lg text-slate-500">超商代碼</div>
                </div>

                <div class="text-slate-500 min-[474px]:text-2xl text-xl lg:p-8 py-5">運送方式</div>

                <div class="w-full border-b-[0.5px] border-b-slate-400/50 flex items-center pl-5 pb-5">
                    <input class="mr-5" type="radio" name="trans-item">
                    <div class="min-[474px]:text-xl text-lg text-slate-500">黑貓宅配</div>

                </div>
                <div class="w-full border-b-[0.5px] border-b-slate-400/50 flex items-center p-5">
                    <input class="mr-5" type="radio" name="trans-item">
                    <div class="min-[474px]:text-xl text-lg text-slate-500">超商店到店</div>

                </div>


                <div class="calc-place w-full p-15 flex justify-end border-b-[0.5px] border-b-slate-400/50">
                    <div class="calc-box w-[35%] p-5">
                        <div class="flex justify-between">
                            <div class="calc-text calc-text-amount">
                                數量：
                            </div>
                            <div class="calc-text calc-text-number">3</div>
                        </div>

                        <div class="flex justify-between">
                            <div class="calc-text">
                                小計：
                            </div>
                            <div class="calc-text calc-text-subtotal">$31.5</div>
                        </div>

                        <div class="flex justify-between">
                            <div class="calc-text">
                                運費：
                            </div>
                            <div class="calc-text calc-text-trans">$24.9</div>
                        </div>

                        <div class="flex justify-between">
                            <div class="calc-text">
                                統計：
                            </div>
                            <div class="calc-text calc-text-sum">$56.4</div>
                        </div>
                    </div>
                </div>


                <div class="area-bottom w-full flex justify-between items-center mt-5">
                    <RouterLink to="/step01">
                        <button
                            class="next-btn w-[100px] bg-blue-700/90 text-slate-100 min-[474px]:text-xl text-[12px] p-1">上一步</button>
                    </RouterLink>
                    <RouterLink to="/step03">
                        <button
                            class="next-btn w-[100px] bg-blue-700/90 text-slate-100 min-[474px]:text-xl text-[12px] p-1">下一步</button>
                    </RouterLink>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<style scoped></style>