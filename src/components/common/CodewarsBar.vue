<template>
    <div class="mt-5">
        <h4 class="text-2xl text-orange-400">
            {{ uppercase }}
        </h4>
        <div class="flex flex-row text-white">
            <CodewarsKarateBelt class="h-6 w-6" :color="details.color" style="flex: 1;"/>
            <span class="text-xl font-semibold" style="flex: 1">{{ details.name }}</span>
            <AppProgress style="flex: 5" :score="totalScore"/>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";
import { IOverall } from "../../models/codewars.model";
import CodewarsKarateBelt from "./CodewarsKarateBelt.vue";
import AppProgress from "./AppProgress.vue";

import textProcesor from '../../providers/mixins/text-procesor';

export default defineComponent({
    name: 'CodewarsBar',
    components: {
        CodewarsKarateBelt,
        AppProgress
    },
    props: {
        title: {
            type: String,
            required: true
        },
        details: {
            type: Object as PropType<IOverall>,
            required: true
        },
        topScore: {
            type: Number,
            required: true
        }
    },
    setup(props) {

        const { details, topScore, title } = toRefs(props);

        const totalScore = computed(() => {
            return (details.value.score*100)/topScore.value 
        })

        const { uppercase } = textProcesor(title);

        return { totalScore, uppercase }
    }
})
</script>
