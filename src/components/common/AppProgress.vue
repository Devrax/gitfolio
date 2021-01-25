<template>
    <span class="progress-bar">
        <span 
            class="h-full inline-block w-full transition-all" 
            :style="{'transform': translation, 'background-image': 'linear-gradient(45deg, #e6b816 100%, #e6b816 0%)'}"></span>
        <span class="absolute inline-block left-0 text-center top-0 w-full">
            {{ percent }}
        </span>
    </span>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";

export default defineComponent({
    name: 'AppProgess',
    props: {
        score: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        const { score } = toRefs(props);
        const translation = computed(() => `translateX(-${100 - score.value}%)`)
        const percent = computed(() => Math.round(score.value) + '%' )
        return { translation, percent }
    }
})
</script>
