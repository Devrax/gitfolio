<template>

    <div>
        <section class="px-3 pt-5" v-if="!!props">
        <div>
            <h2 class="text-4xl text-orange-400">
                <a :href="props.html_url" target="_blank" class="underline" >{{ props.name }}</a>
            </h2>
            <transition-group appear tag="div" name="list" class="flex flex-wrap mt-2">
                <!-- --delay css variable is being use for Staggering-->
                <img 
                    v-for="(badge, index) in projectLanguages" 
                    :key="badge" 
                    :src="mappedBadge(badge)" 
                    class="m-1"
                    :style="{'--delay': computeDelay(index)}">
            </transition-group>
        </div>

        <div class="mt-3">
            <div class="m-2 text-gray-400">
                <span class="align-text-bottom">
                    <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                </span>
                <span class="ml-1">
                    {{ props.license.name }}
                </span>
                ||
                <span>
                    {{ readableDate }}
                </span>
            </div>
            <p>
                {{ props.description }}
            </p>
        </div>
    </section>
    </div>

</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref, Ref, watch } from "vue";
import { IGithubUserRepo } from "../../models/github.models";
import { mapBadge } from '../../providers/mixins/badges';
import { computeDelay } from '../../shared/utils/calculator';
import { githubRepoLanguages } from '../../providers/request/github';

export default defineComponent({
    name: 'GithubProjectInformation',
    setup() {

        const propsInject = inject<Ref<IGithubUserRepo>>('custom-props');
        const props = ref(null);
        const projectLanguages = ref<string[]>([]);

        const fetchAllLanguages = async (api: string) => {
            const fetchLanguages = githubRepoLanguages(api);
            projectLanguages.value = Object.entries(await fetchLanguages()).map(el => el[0]);
        }

        const { mappedBadge } = mapBadge();

        const readableDate = computed(() => {
            return new Date(props.value.created_at).toLocaleString('en-US', { year: 'numeric', month: 'short', weekday: 'long', day: '2-digit' })
        })

        watch(propsInject, (neo) => {
            if(!!neo) {
                props.value = neo;
                fetchAllLanguages(neo.languages_url);
            }
        })

        onMounted(() => {
            if(!!propsInject.value) {
                props.value = propsInject.value;
                fetchAllLanguages(props.value.languages_url);
            }
        })

        return {
            props,
            projectLanguages,
            mappedBadge,
            computeDelay,
            readableDate
        }
    }
})
</script>
