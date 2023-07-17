<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-grow py-5 bg-dark-grey">

      <!-- Carousel Section -->
      <div class="flex justify-center">
      <div class="w-full">
      <div class="bg-black py-48 mb-6">
                
           <Carousel class="text-white flex justify-center">Carousel XD</Carousel>


         </div>
        </div>
       </div>

      <!-- Game Title Section-->
       <div class="flex justify-center">
        <h1 class="text-white text-bold text-3xl mb-6">Games</h1>
       </div>

      <!-- Game Container Section-->
       <div class="flex justify-center">
        <div class="box-width my-4">
          <div class="bg-black p-10 rounded-xl">

      <!-- Grid Container Section-->
            <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              
              <a href="#">
               <div class="relative">
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png" 
                    class="rounded-tl-lg rounded-tr-lg"/>
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 
                                hover:opacity-100 transition-opacity duration-300 border border-green rounded-lg">
                     <span class="font-semibold text-2xl text-green">Uncracked</span>
                    </div>
                    <div class="p-2 text-center bg-dark-grey rounded-sm">
                     <span class="font-semibold text-sm text-white">- Resident Evil 4 Remake -</span>
                   </div>
                 </div>
                </a>

                <a href="#">
               <div class="relative">
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png" 
                    class="rounded-tl-lg rounded-tr-lg"/>
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 
                                hover:opacity-100 transition-opacity duration-300 border border-red rounded-lg">
                     <span class="font-semibold text-2xl text-red">Cracked</span>
                    </div>
                    <div class="p-2 text-center bg-dark-grey rounded-sm">
                     <span class="font-semibold text-sm text-white">- Resident Evil 4 Remake -</span>
                   </div>
                 </div>
                </a>

             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
},
};
</script>

<style scoped>
.box-width{
 width: 95%;
}
</style>
