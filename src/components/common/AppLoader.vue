<template>

    <div class="flex flex-col justify-center items-center min-h-screen max-width lg:mx-auto">
        <div v-if="errorFetching" class="text-center w-full">
            <h2 class="px-5 text-3xl text-red-700 animate-pulse">
                There was an error while fetching the data
            </h2>
            <button 
                class="bg-orange-600 focus-within:bg-orange-800 focus:bg-orange-800 focus:outline-none font-bold h-12 mt-5 outline-none rounded-2xl text-2xl text-white w-36" 
                @click="emit('fetch')">
                Try again
            </button>
        </div>

        <div v-else class="w-full">
            <h2 :class="{'text-red-700 animate-bounce': shouldStop }" class="px-5 text-3xl text-center text-white">
            {{ msg }}
            <svg
                v-if="!shouldStop"
                class="w-10 h-10 inline-block align-bottom animate-spin" 
                fill="none"
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                </path>
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                </path>
            </svg>
        </h2>

        <div class="grid grid-cols-3 mt-3 px-5 text-center w-full" v-if="!shouldStop">
            <span 
                v-for="(entry, index) in expectedEntries" 
                :key="entry.entry" 
                :class="{ 
                    'bg-red-700': !entry.expect, 
                    'bg-green-600': entry.expect,
                    'rounded-l-2xl': index === 0,
                    'rounded-r-2xl': index === (expectedEntries.length - 1)
                    }"
                class="transition-all duration-500">
                <span>
                    {{ entry.entry }}
                </span>
            </span>
        </div>
        </div>

    </div>
  
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch } from "vue";

export default defineComponent({
    name: "AppLoader",
    props: {
        isGithubDone: {
            type: Boolean,
            default: false
        },
        isGithubRepoDone: {
            type: Boolean,
            default: false
        },
        isCodewarsDone: {
            type: Boolean,
            default: false
        },
        errorFetching: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const msg = ref('Please wait');
        const shouldStop = ref(false);
        const { isGithubDone, isGithubRepoDone, isCodewarsDone } = toRefs(props);

        const expectedEntries = ref([
            {entry: 'github', expect: isGithubDone}, 
            {entry:'github repo', expect: isGithubRepoDone}, 
            {entry: 'code-wars', expect: isCodewarsDone}
        ])

        const FTO = setTimeout(() => {
            msg.value = "It's taking too much time";
        }, 4000);

        const STO = setTimeout(() => {
            
            const entries = expectedEntries.value.map(el => ({n: el.entry, e: el.expect}))
            const notLoad = entries.filter(el => !el.e);

            if(notLoad.length === entries.length) {
                msg.value = "I can't show you my portfolio with that net dude :(";    
            } else {
                const prepareMsg = notLoad.map(el => el.n);
                msg.value = `It's seems that ${prepareMsg.join(', ')} couldn't load correctly :(`
            }

            shouldStop.value = true;
        }, 8000)

        const stopTimeout = () => {
            const condition =  expectedEntries.value.every(el => el.expect);
            if(condition) {
                clearTimeout(FTO);
                clearTimeout(STO);
            }
        }

        watch(isGithubDone, stopTimeout)

        watch(isGithubRepoDone, stopTimeout)

        watch(isCodewarsDone, stopTimeout)

        return { expectedEntries, shouldStop, msg, emit }
    }

})
</script>
