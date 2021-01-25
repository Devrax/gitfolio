<template>
    <div 
        class="cursor-pointer card-btn transform transition-all overflow-hidden scale-95 hover:scale-100 active:scale-90 relative rounded-2xl mr-3 snap-center" 
        style="min-width: 250px;height: 200px;">
        <img :src="randomPic" class="w-full h-full object-cover transform transition-all" >
        <div class="absolute bg-gradient-to-b from-transparent h-full to-pacific-900 top-0 w-full"></div>
        <div class="absolute bottom-0 m-3">
            <h1 class="text-white text-xl">{{ project.full_name }}</h1>
            <div class="flex items-center">
                <img class="h-5" :src="badgeSrc" :alt="project.full_name">
                <span class="text-white ml-3">
                    <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                    </svg>
                    <span class="align-text-top">{{ project.stargazers_count }}</span>
                </span>
                <span class="text-white ml-3">
                    <svg class="w-6 h-6 inline-block" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 16" version="1.1">
                        <g stroke="currentColor" stroke-width="1" fill="none">
                            <g stroke="currentColor" fill="none">
                                <path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" />
                            </g>
                        </g>
                    </svg>
                    <span class="align-text-top">{{ project.forks_count }}</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref} from "vue";
import { mapBadge } from '../../providers/mixins/badges';
import { pics } from '../../shared/utils/randomPictures';

export default defineComponent({
    name: "GithubProjectCard",
    props: {
        project: {
            type: Object,
            default: () => ({full_name: '<You>/<Your repo>'})
        }
    },
    setup(props) {
        const badgeSrc = ref('');
        const { mappedBadge } = mapBadge();

        const randomPic = computed(() => {
            const ranNum = Math.floor((Math.random() * (pics.length - 1)));
            return `https://source.unsplash.com/${pics[ranNum]}`
        })

        onMounted(() => {
            badgeSrc.value = mappedBadge(props.project.language);
        })

        return {
            badgeSrc,
            randomPic
        }
    }
})
</script>

<style>
    .card-btn:hover>img{
        @apply scale-150;
    }

    .card-btn:active {
        transform: scale(0.9) !important;
    }
</style>
