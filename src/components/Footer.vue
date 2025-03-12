<script>
import avatar from '@/assets/avatar.jpg'
import iconfb from '@/assets/svg/fb.svg'
import iconins from '@/assets/svg/ins.svg'
import iconx from '@/assets/svg/x.svg'


export default {
    data() {
        return {
            avatar, iconfb, iconins, iconx,
        }
    }

}
</script>


<template>
    <div class="footer w-full align p-10 flex-wrap">
        <div class="w-[100%] md:w-[50%] lg:w-[20%] align flex-col mt-10 lg:mt-0">
            <div class="flex items-center">
                <img class="w-[50px] h-[50px] rounded-[50%] mr-5" :src="avatar">
                <div><a href="#">aaaaaaa</a></div>
            </div>
            <div class="mt-5"><a href="#">aaaaaaaaaaaaaaa</a></div>
        </div>
        <div class="w-[100%] lg:w-[20%] align flex-col mt-10 lg:mt-0">AAA link
            <a href="#">aaaa link</a>
            <a href="#">aaaa link</a>
            <a href="#">aa link</a>
            <a href="#">aa link</a>
        </div>
        <div class="w-[100%] lg:w-[20%] align flex-col mt-10 lg:mt-0">BBBB link
            <a href="#">bbb link</a>
            <a href="#">bbb link</a>
            <a href="#">bbb link</a>
            <a href="#">bbb link</a>
        </div>
        <div class="w-[100%] lg:w-[20%] align flex-col mt-10 lg:mt-0">CCCC link
            <a href="#">ccc link</a>
            <a href="#">ccc link</a>
            <a href="#">ccc link</a>
            <a href="#">ccc link</a>
        </div>
        <div class="w-[100%] lg:w-[20%] align flex-col mt-10 lg:mt-0">DDD link
            <a href="#">ddd link</a>
            <a href="#">ddd link</a>
            <a href="#">ddd link</a>
            <a href="#">ddd link</a>
        </div>
    </div>
    <div class="bg-gray-200 flex items-center justify-between p-5">
        <div class="text-gray-500"> © shopping cart 2025
        </div>
        <div class="flex">
            <img class="w-5 h-5 mr-5" :src="iconfb">
            <img class="w-5 h-5 mr-5" :src="iconins">
            <img class="w-5 h-5 mr-5" :src="iconx">
        </div>
    </div>
</template>