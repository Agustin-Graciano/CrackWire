    <template>
        <div class="flex flex-col min-h-screen ">
         <Navbar/>
          <div class="flex-grow flex justify-center items-center py-5">
           <div class="sm:w-2/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div class="box-content px-4 py-2 border-2 rounded drop-shadow-sm">
             <div class="font-bold text-2xl text-center py-2">Sign Up</div>

            <form>
             <label for="username" class="block mt-5">
              <span class="block text-sm font-medium text-slate-200">Username</span>
              <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    class="mt-1 block w-full px-3 py-2 bg-white border rounded border-slate-300 text-sm shadow-sm placeholder-slate-400"
              />
              </label>
              
              <label for="email" class="block mt-5">
                <span class="block text-sm font-medium text-slate-200">E-mail</span>
                <input
                      id="email"
                      type="text"
                      placeholder="Email"
                      class="mt-1 block w-full px-3 py-2 bg-white border rounded border-slate-300 text-sm shadow-sm placeholder-slate-400"
              />
              </label>

              <label for="password" class="block mt-5">
              <span class="block text-sm font-medium text-slate-200">Password</span>
              <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    class="mt-1 block w-full px-3 py-2 bg-white border rounded border-slate-300 text-sm shadow-sm placeholder-slate-400"
               />
              </label>

            <div class="my-4">
            <button class="py-2 px-4 bg-black text-white rounded-md">Sign Up</button>
             </div>
           </form>
 
         </div>
        </div>
       </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
    setup() {
        return {};
    },
    components: { Navbar, Footer }
}
</script>

<style scoped>
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: col;
  }

  .min-h-screen {
    min-height: 100vh;
  }

  .flex-grow {
    flex-grow: 1;
  }
  @media (max-width: 639px) {
    /* Apply styles for screens smaller than sm */
    .w-full {
      width: 100%;
    }
  }
</style>
