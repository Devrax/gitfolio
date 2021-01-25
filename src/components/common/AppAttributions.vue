<template>
  <div class="h-full pt-7 px-4">
    <div>
      <h2 class="text-2xl text-orange-400">The following icons were taken from:</h2>
      <br>
      <div class="text-orange-400 text-xl">
        <a href="https://iconscout.com/icons/repo" target="_blank" class="underline">Repo Icon</a> by <a target="_blank" href="https://iconscout.com/contributors/github" class="underline">Github</a> on <a target="_blank" href="https://iconscout.com"  class="underline">Iconscout</a>
      </div>

      <div class="text-center">
        <svg class="w-6 h-6 inline-block" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 16" version="1.1">
          <g stroke="currentColor" stroke-width="1" fill="none">
              <g stroke="currentColor" fill="none">
                  <path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" />
              </g>
          </g>
        </svg>
      </div>
      <br>
      <div class="text-orange-400 text-xl">
        <a class="underline" href="https://www.flaticon.com/" target="_blank" title="Flaticon">flaticon</a> 
        by 
        <a class="underline" href="https://www.flaticon.com/authors/icongeek26" target="_blank" title="Icongeek26">Icongeek26</a>
      </div>

      <div class="text-center">
        <CodewarsKarateBelt class="h-6 w-6 inline"/>
      </div>

      <br>

      <div>
        <a href="https://heroicons.dev/" target="_blank" class="text-orange-400 text-xl underline">Heroicons</a>
      </div>

      <div class="text-center">
        <svg class="w-6 h-6 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
        <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
      </div>

    </div>
    
  </div>
</template>

<script lang="ts">
import CodewarsKarateBelt from './CodewarsKarateBelt.vue';

import { defineComponent } from "vue";

export default defineComponent({
    name: 'AppAttributions',
    components: {
      CodewarsKarateBelt
    }
})
</script>
