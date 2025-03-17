<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { useCounterStore } from '@/stores/counter'
export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      counter: useCounterStore().count,
    }
  },
}
</script>

<template>
  <NavBar></NavBar>
  <main>
    <div class="container mx-auto py-16">
      <div class="mb-28">
        <div class="lg:w-[45%] md:w-[58%] w-[80%] text-center mx-auto mb-20">
          <p class="text-3xl py-5">Raw Denim Heirloom Man Braid</p>
          <p class="py-3">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
            poutine, ramps microdosing banh mi pug.
          </p>
          <div class="w-16 h-1 rounded-full mx-auto my-4 bg-blue-700 "></div>
        </div>
        <div class="flex flex-wrap justify-center items-center mb-12">
          <div class="lg:w-1/4 md:w-[60%] sm:w-[80%] w-[90%] text-center p-6">
            <img class="w-20 h-20 object-cover rounded-[50%] mx-auto mb-6" src="./img/1.jpg" alt="">
            <p class="text-xl py-4">Shooting Stars</p>
            <p class="pb-2 leading-relaxed">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.
            </p>
            <button class="flex mx-auto items-center gap-1 text-blue-700 p-4" type="button">
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div class="lg:w-1/4 md:w-[60%] sm:w-[80%] w-[90%] text-center p-6">
            <img class="w-20 h-20 object-cover rounded-[50%] mx-auto mb-6" src="./img/3.jpg" alt="">
            <p class="text-xl py-4">Shooting Stars</p>
            <p class="pb-2 leading-relaxed">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.
            </p>
            <button class="flex mx-auto items-center gap-1 text-blue-700 p-4" type="button">
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div class="lg:w-1/4 md:w-[60%] sm:w-[80%] w-[90%] text-center p-6">
            <img class="w-20 h-20 object-cover rounded-[50%] mx-auto mb-6" src="./img/10.jpg" alt="">
            <p class="text-xl py-4">Shooting Stars</p>
            <p class="pb-2 leading-relaxed">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.
            </p>
            <button class="flex mx-auto items-center gap-1 text-blue-700 p-4" type="button">
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <button class=" block bg-blue-700 rounded-md text-xl text-white mx-auto mt-5 px-7 py-3"
          type="button">Button</button>
      </div>
      <div class="lg:w-3/4 md:w-[90%] sm:w-[90%] w-[98%] mx-auto mb-20 px-6 py-10">
        <div class="flex flex-wrap mb-16">
          <p class="lg:w-1/4 md:w-[70%] text-3xl md:mb-3 lg:mb-0 px-3">Master Cleanse Reliac Heirloom.</p>
          <p class="lg:w-3/4 md:w-[75%] px-3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile
            poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies
            heirloom.
          </p>
        </div>
        <div class="flex">
          <div class="w-1/2 flex flex-wrap">
            <img class="w-1/2 p-2" src="./img/362-218-1.png" alt="">
            <img class="w-1/2 p-2" src="./img/362-218-1.png" alt="">
            <img class="w-full p-2" src="./img/740-444.png" alt="">
          </div>
          <div class="w-1/2 flex flex-wrap">
            <img class="w-full p-2" src="./img/740-444.png" alt="">
            <img class="w-1/2 p-2" src="./img/362-218-1.png" alt="">
            <img class="w-1/2 p-2" src="./img/362-218-1.png" alt="">
          </div>
        </div>
      </div>
      <div class="lg:w-[57%] sm:w-[80%] w-[85%] py-10 mx-auto mb-20">
        <p class="text-3xl text-center pb-3">Pricing</p>
        <p class="text-center mb-16 py-3">
          Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct
          trade mumblecore 3 wolf moon twee
        </p>
        <table class="w-full">
          <thead>
            <tr class="bg-gray-200 border-b border-gray-200">
              <th class="w-1/4 text-start sm:px-6 sm:py-3 pl-2">Plan</th>
              <th class="w-1/4 text-start sm:px-6 sm:py-3 pl-2">Speed</th>
              <th class="w-1/4 text-start sm:px-6 sm:py-3 pl-2">Storage</th>
              <th class="w-1/4 text-start sm:px-6 sm:py-3 pl-2">Price</th>
              <th class="sm:px-4"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200">
              <td class="sm:px-4 sm:py-3 px-1">Start</td>
              <td class="sm:px-4 sm:py-3 px-1">5 Mb/s</td>
              <td class="sm:px-4 sm:py-3 px-1">15 GB</td>
              <td class="sm:px-4 sm:py-3 px-1">Free</td>
              <td><input class="sm:pr-3" type="radio" name="price"></td>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="sm:px-4 sm:py-3 px-1">Pro</td>
              <td class="sm:px-4 sm:py-3 px-1">25 Mb/s</td>
              <td class="sm:px-4 sm:py-3 px-1">25 GB</td>
              <td class="sm:px-4 sm:py-3 px-1">$24</td>
              <td><input class="sm:pr-3" type="radio" name="price"></td>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="sm:px-4 sm:py-3 px-1">Business</td>
              <td class="sm:px-4 sm:py-3 px-1">36 Mb/s</td>
              <td class="sm:px-4 sm:py-3 px-1">40 GB</td>
              <td class="sm:px-4 sm:py-3 px-1">$50</td>
              <td><input class="sm:pr-3" type="radio" name="price"></td>
            </tr>
            <tr>
              <td class="sm:px-4 sm:py-3 px-1">Exclusive</td>
              <td class="sm:px-4 sm:py-3 px-1">48 Mb/s</td>
              <td class="sm:px-4 sm:py-3 px-1">120 GB</td>
              <td class="sm:px-4 sm:py-3 px-1">$72</td>
              <td><input class="sm:pr-3" type="radio" name="price"></td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between items-start pt-12">
          <button class="flex items-center gap-1 text-blue-700" type="button">
            Learn More <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button class="bg-blue-700 rounded-md text-xl text-white px-7 py-3" type="button">
            Button
          </button>
        </div>
      </div>
      <div class="lg:w-[70%] sm:w-[80%] w-[85%] mx-auto mb-28">
        <div class="flex flex-wrap ld:justify-between md:justify-center pb-10">
          <div class="lg:w-[50%] md:w-[75%] sm:mb-8">
            <p class="text-3xl">Pitchfork Kickstarter Taxidermy</p>
            <div class="w-16 h-1 rounded-full my-4 bg-blue-700 "></div>
          </div>
          <p class="lg:w-[50%] md:w-[75%]">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
            farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom
            prism food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="flex lg:flex-nowrap flex-wrap gap-4 justify-center items-start pt-10">
          <div class="lg:w-1/4 md:w-[60%] sm:w-[80%] w-[90%] bg-gray-200 rounded-lg p-6">
            <img class="rounded-xl" src="./img/362-218.png" alt="">
            <button class="text-purple-700" type="button">SUBTITLE</button>
            <p class="text-xl py-3">Chichen Itza</p>
            <p class="text-lg pt-5">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
              disrupt edison bulbche.</p>
          </div>
          <div class="lg:w-1/4 md:w-[60%] sm:w-[80%] w-[90%] bg-gray-200 rounded-lg p-6">
            <img class="rounded-xl" src="./img/362-218.png" alt="">
            <button class="text-purple-700" type="button">SUBTITLE</button>
            <p class="text-xl py-3">Colosseum Roma</p>
            <p class="text-lg pt-5">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
              disrupt edison bulbche.</p>
          </div>
          <div class="lg:w-1/4 md:w-[60%] sm:w-[80%] w-[90%] bg-gray-200 rounded-lg p-6">
            <img class="rounded-xl" src="./img/362-218.png" alt="">
            <button class="text-purple-700" type="button">SUBTITLE</button>
            <p class="text-xl py-3">Great Pyramid of Gizaa</p>
            <p class="text-lg pt-5">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
              disrupt edison bulbche.</p>
          </div>
          <div class="lg:w-1/4 md:w-[60%] sm:w-[80%] w-[90%] bg-gray-200 rounded-lg p-6">
            <img class=" rounded-xl" src="./img/362-218.png" alt="">
            <button class="text-purple-700" type="button">SUBTITLE</button>
            <p class="text-xl py-3">San Francisco</p>
            <p class="text-lg pt-5">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
              disrupt edison bulbche.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-[45%] md:w-[70%] sm:w-[80%] w-[90%] mx-auto mb-28">
        <div class="flex lg:flex-nowrap flex-wrap justify-center border-b border-gray-300 mb-10 px-8">
          <img class="w-28 h-28 object-cover rounded-[50%] mb-10" src="./img/1.jpg" alt="">
          <div class="lg:pl-10">
            <p class="text-lg pb-2">Shooting Stars</p>
            <p>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo
              juice poutine.</p>
            <button class="flex items-center gap-1 text-blue-700 pt-4 pb-8" type="button">
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div class="flex lg:flex-nowrap flex-wrap justify-center border-b border-gray-300 mb-10 px-8">
          <div class="lg:pr-10">
            <p>The Catalyzer</p>
            <p class="text-lg py-2">Shooting Stars</p>
            <p>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo
              juice poutine.</p>
            <button class="flex items-center gap-1 text-blue-700 pt-4 pb-8" type="button">
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <img class="w-28 h-28 object-cover rounded-[50%] mb-8" src="./img/3.jpg" alt="">
        </div>
        <div class="flex lg:flex-nowrap flex-wrap justify-center px-8">
          <img class="w-28 h-28 object-cover rounded-[50%] mb-10" src="./img/10.jpg" alt="">
          <div class="lg:pl-10">
            <p>The 400 Blows</p>
            <p class="text-lg py-2">Shooting Stars</p>
            <p>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo
              juice poutine.</p>
            <button class="flex items-center gap-1 text-blue-700 pt-4 pb-8" type="button">
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <button class="block bg-blue-700 rounded-md text-xl text-white mx-auto px-7 py-3" type="button">
          Button
        </button>
      </div>
      <div class=" lg:w-[65%] md:w-[70%] sm:w-[80%] w-[85%] flex lg:flex-nowrap flex-wrap gap-7 mx-auto mb-28">
        <img class="lg:w-1/2 w-full h-[265px] lg:h-auto" src="./img/d4b190.jpg" alt="">
        <div class="lg:w-1/2 w-full py-3">
          <p>BRAND NAME</p>
          <p class="text-3xl pt-2">The Catcher in the Rye</p>
          <div class="flex items-center mb-4">
            <p class="border-r-2 border-gray-400 pr-3 py-2">
              <i class="fa-solid fa-star scale-75 text-blue-700"></i>
              <i class="fa-solid fa-star scale-75 text-blue-700"></i>
              <i class="fa-solid fa-star scale-75 text-blue-700"></i>
              <i class="fa-solid fa-star scale-75 text-blue-700"></i>
              <i class="fa-regular fa-star scale-75 text-blue-700 mr-3"></i>
              4 Reviews
            </p>
            <div class="flex items-center pl-3">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter px-3"></i>
              <i class="fa-solid fa-comment"></i>
            </div>
          </div>
          <p class="leading-relaxed mb-10">
            Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing
            tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
            seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts
            keytar banjo tattooed umami cardigan.
          </p>
          <div class="flex border-b-2 border-gray-400 pb-5">
            <p class="pr-3">Color</p>
            <button class="bg-slate-300 rounded-[50%] border-2 border-black p-[10px]" type="button"></button>
            <button class="bg-black rounded-[50%] border-2 border-black p-[10px] mx-2" type="button"></button>
            <button class="bg-blue-800 rounded-[50%] border-2 border-black p-[10px] mr-5" type="button"></button>
            <p class="pr-5">Size</p>
            <select name="size" id="size-select">
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
              <option value="x-large">XL</option>
            </select>
          </div>
          <div class="flex justify-between items-center pt-5">
            <p class="text-2xl">$58.00</p>
            <div>
              <button class="bg-blue-700 rounded-md text-xl text-white mr-4 px-5 py-2" type="button">
                Button
              </button>
              <button type="button">
                <i class="fa-solid fa-heart scale-150"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-[65%] md:w-[70%] sm:w-[73%] w-[88%] mx-auto p-5 mb-20">
        <div class="flex lg:flex-nowrap flex-wrap gap-12 pb-16">
          <div class="lg:w-1/4 md:w-full">
            <img class="w-full" src="./img/cc90d4.jpg" alt="">
            <p class="text-[13px] pt-3 pb-2">CATEGORY</p>
            <p class="pb-1">The Catalyzer</p>
            <p>$16.00</p>
          </div>
          <div class="lg:w-1/4 md:w-full">
            <img class="w-full" src="./img/cc90d4.jpg" alt="">
            <p class="pt-3 pb-2">CATEGORY</p>
            <p class="pb-1">Shooting Stars</p>
            <p>$21.15</p>
          </div>
          <div class="lg:w-1/4 md:w-full">
            <img class="w-full" src="./img/cc90d4.jpg" alt="">
            <p class="pt-3 pb-2">CATEGORY</p>
            <p class="pb-1">Neptune</p>
            <p>$12.00</p>
          </div>
          <div class="lg:w-1/4 md:w-full">
            <img class="w-full" src="./img/cc90d4.jpg" alt="">
            <p class="pt-3 pb-2">CATEGORY</p>
            <p class="pb-1">The 400 Blows</p>
            <p>$18.40</p>
          </div>
        </div>
        <div class="flex lg:flex-nowrap flex-wrap gap-12">
          <div class="lg:w-1/4 md:w-full">
            <img class="w-full" src="./img/cc90d4.jpg" alt="">
            <p class="text-[13px] pt-3 pb-2">CATEGORY</p>
            <p class="pb-1">The Catalyzer</p>
            <p>$16.00</p>
          </div>
          <div class="lg:w-1/4 md:w-full">
            <img class="w-full" src="./img/cc90d4.jpg" alt="">
            <p class="pt-3 pb-2">CATEGORY</p>
            <p class="pb-1">Shooting Stars</p>
            <p>$21.15</p>
          </div>
          <div class="lg:w-1/4 md:w-full">
            <img class="w-full" src="./img/cc90d4.jpg" alt="">
            <p class="pt-3 pb-2">CATEGORY</p>
            <p class="pb-1">Neptune</p>
            <p>$12.00</p>
          </div>
          <div class="lg:w-1/4 md:w-full">
            <img class="w-full" src="./img/cc90d4.jpg" alt="">
            <p class="pt-3 pb-2">CATEGORY</p>
            <p class="pb-1">The 400 Blows</p>
            <p>$18.40</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full relative">
      <!-- 灰階 filter grayscale -->
      <iframe class="w-full h-screen"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.079821516085!2d120.68255497602732!3d23.95761738078827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346931fa13476609%3A0xff49d973a4d51c49!2z5Lit6IiI5aSn5a245Y2X5oqV5qCh5Y2A77yI57ac5ZCI5aSn5qiT77yJ!5e0!3m2!1szh-TW!2stw!4v1741071490490!5m2!1szh-TW!2stw"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div
        class="md:w-[500px] w-[80%] bg-white rounded-md px-8 py-10 absolute lg:right-0 lg:top-[50%] top-[50%] left-[50%] lg:translate-x-[-20%] translate-x-[-50%] translate-y-[-50%]">
        <p class="text-xl">Feedback</p>
        <p>Post-ironic portland shabby chic echo park, banjo fashion axe</p>
        <label class="block py-3" for="mail">Email</label>
        <input class="block w-full h-10 border border-gray-400 rounded-md" id="mail" type="email">
        <label class="block py-3" for="msg">Message</label>
        <input class="block w-full h-24 border border-gray-400 rounded-md" id="msg" type="text">
        <button class="block w-full bg-blue-700 rounded-md text-xl text-white my-6 px-5 py-2" type="button">
          Button
        </button>
        <p class="pb-4">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>
