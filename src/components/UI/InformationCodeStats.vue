<template>
    <div class="mt-3">
        <CodewarsBar 
            v-for="[key, value] in languageEntries" 
            :key="key" 
            :details="value" 
            :title="key"
            :topScore="topScore" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, Ref, toRefs } from 'vue';
import CodewarsBar from '../common/CodewarsBar.vue';
import { ICodewarsUser, IOverall} from '../../models/codewars.model';

export default defineComponent({
    name: 'InformationCodeStats',
    components: {
        CodewarsBar
    },
    props: {
        stats: {
            type: Object as PropType<ICodewarsUser>,
            default: function (): ICodewarsUser {
                return null
            },
            required: true
        }
    },
    setup(props) {

        const { stats: { value: { ranks }} } = toRefs(props as {stats: ICodewarsUser});
        
        const languageEntries = computed(() => {
            return [['overall', ranks.overall], ...Object.entries(ranks.languages)];
        })

        const topScore = computed(() => {
            const total = languageEntries.value
            .map((el, i) => i === 0 ?  0 : (el[1] as IOverall).score)
            .reduce((acc, cv) => acc + cv, 0);

            ranks.overall.score = total;

            return total;
        })
        
        return { languageEntries, topScore }
    }
})

</script>
