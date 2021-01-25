<template>
    <div class="ghost">
        <div class="flex overflow-x-scroll snap snap-proximity snap-x">
            <div style="min-width: 5px; height: 200px;" class="mr-2"></div>
            <GithubProjectCard
                v-for="project in byStars" 
                :project="project" 
                :key="project.id"
                @click="openProject(project)" />
            <div style="min-width: 5px; height: 200px;"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, DefineComponent, defineComponent, inject, PropType, Ref, toRefs } from "vue";
import { IGithubUserRepo } from "../../models/github.models";
import GithubProjectCard from '../common/GithubProjectCard.vue';
import { debouncer } from '../../shared/utils/calculator';
import GithubProjectInformation from '../common/GithubProjectInformation.vue';
import { CupertinoPane } from 'cupertino-pane';

export default defineComponent({
    name: 'InformationProjects',
    props: {
        projects: {
            type: Array as PropType<IGithubUserRepo[]>,
            default: []
        }
    },
    components: {
        GithubProjectCard
    },
    setup(props) {
        const { projects } = toRefs(props);
        const providerProps = inject<Ref<any>>('custom-props')
        const temporalComponent = inject<Ref<any>>('dynamic-component');
        const cupertinoInstance = inject<Ref<CupertinoPane>>('cupertino-instance') // provide at App.vue


        const byStars = computed(() => {
            return projects.value.sort((a, b) => a.stargazers_count - b.stargazers_count).reverse();
        })

        const openProject = debouncer(async (project: IGithubUserRepo) => {
            providerProps.value = project;
            temporalComponent.value = (GithubProjectInformation as DefineComponent<any, any, any>)
            
            const isHidden = cupertinoInstance.value.isHidden();
            if(isHidden === null || isHidden) {
                await cupertinoInstance.value.present({ animate: true });
                cupertinoInstance.value.moveToBreak('bottom');
            }
        })

        return { byStars, openProject }
    }
})
</script>
