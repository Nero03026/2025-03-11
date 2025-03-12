<script>
import avatar from '@/assets/avatar.jpg'
import bars from '@/assets/svg/bars-solid.svg'
import svgexport2 from '@/assets/svg/svgexport-2.svg'
import svgexport3 from '@/assets/svg/svgexport-3.svg'

export default {
    data() {
        return {
            avatar,
            bars,
            svgexport2,
            svgexport3,
            isshow: false,
        }
    },
    methods: {
        hamBtn() {
            this.isshow = !this.isshow;
            console.log('12312');
        }
    },
}
</script>

<template>
    <div class="w-full bg-slate-50 flex items-center p-4">
        <div class="nav-left ml-[20%] align relative">
            <img class="w-[60px] h-[60px] rounded-[50%] mr-5" :src="avatar">
            <div>aaaaaa</div>
        </div>

        <button class="ham-btn" type="button" @click="hamBtn()">
            <img class="xl:hidden w-[40px] h-[35px] border-slate-500/50 border-[0.5px] p-1 text-slate-500 absolute top-8 right-[20%]"
                :src="bars">
        </button>
        <div class="nav-right xl:flex items-center ml-[40%] hidden">
            <div><a class="nav-link mr-5" href="#">Blog</a></div>
            <div><a class="nav-link mr-5" href="#">Portfolio</a></div>
            <div><a class="nav-link mr-5" href="#">About</a></div>
            <div><a class="nav-link mr-5" href="#">Contact</a></div>
            <button><img class="w-[30px] h-[30px] mr-5" :src="svgexport2"></button>
            <button><img class="w-[30px] h-[30px]" :src="svgexport3"></button>
        </div>
    </div>

    <div class="dropdown-content" :class="isshow ? '' : 'hidden'">
        <div class="w-full flex items-center flex-col bg-slate-100/50">
            <div class="mt-5"><a class="nav-link" href="#">Blog</a></div>
            <div class="mt-10"><a class="nav-link" href="#">Portfolio</a></div>
            <div class="mt-10"><a class="nav-link" href="#">About</a></div>
            <div class="mt-10"><a class="nav-link" href="#">Contact</a></div>
            <div class="flex gap-5">
                <button><img class="w-[30px] h-[30px] mt-10 mb-5" :src="svgexport2"></button>
                <button><img class="w-[30px] h-[30px] mt-10 mb-5" :src="svgexport3"></button>
            </div>
        </div>
    </div>
</template>