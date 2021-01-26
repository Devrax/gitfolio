<template>
  <div class="bg-pacific-900 min-h-screen">
    <transition appear name="fade-entry" mode="out-in"> 
      
      <div v-if="!!githubUser && !!githubUserRepos && !!codewarsUser">
          <profile-box>

            <template v-slot:background>
              <ProfileBackground />
            </template>

            <template v-slot:pic-name>
              <ProfileInformation :name="COMPOSENAME" :pic="DEFAULTPIC" />
            </template>

          </profile-box>
        
          <information-box>

            <template v-slot:about-me>
              <InformationSelf :description="githubUser.bio" />
            </template>

            <template v-slot:projects>
              <InformationProjects :projects="githubUserRepos"/>
            </template>

            <template v-slot:codewars-stats>
              <InformationCodeStats :stats="codewarsUser" />
            </template>

          </information-box>

        <footer class="mt-10 flex h-16 items-center px-4 border-t border-tomato-900">
          <div class="max-width lg:mx-auto w-full flex flex-wrap justify-between">
            <p class="text-white">
              Made with ❤️  by <a :href="githubUser.html_url" target="_blank">{{ githubUser.name }}</a>
            </p>
            <button 
              @click="openAttributions" 
              class="bg-orange-600 hover:bg-orange-800 active:bg-orange-900 focus:outline-none font-bold outline-none p-0.5 rounded-2xl text-white w-40">
              Check Attributions!
            </button>
          </div>
          
        </footer>
      </div>
     
      <AppLoader 
        :isGithubDone="!!githubUser" 
        :isGithubRepoDone="!!githubUserRepos" 
        :isCodewarsDone="!!codewarsUser"
        :errorFetching="errorFetching"
        @fetch="fetchAll"
        v-else/>
      
    </transition>
  </div>

  <VCupertino 
            ref="cupertinoRef"
            :isPresent="false"
            :drawerOptions="cupertinoOptions"
            :entryComponent="temporalComponent" />

</template>

<script lang="ts">
import { DefineComponent, defineComponent, onMounted, provide, Ref, ref, shallowRef, toRefs, watch } from 'vue';
import AppLoader from './components/common/AppLoader.vue';
import ProfileBox from './components/layout/ProfileBox.vue';
import InformationBox from './components/layout/InformationBox.vue';
import ProfileBackground from './components/UI/ProfileBackground.vue';
import ProfileInformation from './components/UI/ProfileInformation.vue';
import InformationProjects from './components/UI/InformationProjects.vue';
import InformationSelf from './components/UI/InformationSelf.vue';
import InformationCodeStats from './components/UI/InformationCodeStats.vue';
import VCupertino from 'v-cupertino';
import { cupertinoOptions } from './shared/utils/cupertinoSettings';
import AppAttributions from './components/common/AppAttributions.vue';

import { 
  getGithubUser,
  getGithubUserRepos, 
  githubUser, 
  githubUserRepos
} from './providers/request/github';

import {
  codewarsUser,
  getCodewarsUser
} from './providers/request/codewars'

import { CupertinoPane } from 'cupertino-pane';

export default defineComponent({
  name: 'App',
  components: {
    AppLoader,
    ProfileBox,
    ProfileBackground,
    ProfileInformation,
    InformationBox,
    InformationProjects,
    InformationSelf,
    InformationCodeStats,
    VCupertino
  },
  setup() {
    const COMPOSENAME = ref('Your Name');
    const DEFAULTPIC = ref('../../assets/logo.png');
    const errorFetching = ref(false);
    const cupertinoRef: Ref<typeof VCupertino> = ref(VCupertino);
    const cupertinoInstance: Ref<CupertinoPane | null> = ref(null);
    const temporalComponent = shallowRef(AppAttributions);
    const providerProps = ref(null);

    provide<Ref<any>>('custom-props', providerProps);
    provide<Ref<any>>('dynamic-component', temporalComponent);
    provide<Ref<CupertinoPane | null>>('cupertino-instance', cupertinoInstance);

    watch(githubUser, () => {
      COMPOSENAME.value = `${githubUser.value!.name}`; // (${githubUser.value!.login})
      DEFAULTPIC.value = githubUser.value!.avatar_url;
    });

    const fetchAll = async () => {
      errorFetching.value = false;
      try{
        githubUser.value = await getGithubUser();
        githubUserRepos.value = await getGithubUserRepos();
        codewarsUser.value = await getCodewarsUser();
        
      } catch(e) {
        console.error(e);
        errorFetching.value = true;
      }
    }

    const openAttributions = async () => {
      if(!(cupertinoInstance.value!.isPanePresented())) {
        temporalComponent.value = (AppAttributions as DefineComponent<{[props: string]: any}>);
        await cupertinoInstance.value!.present({animate: true})
        cupertinoInstance.value!.moveToBreak('top');
      } 
    }

    onMounted(() => {
      cupertinoInstance.value = (cupertinoRef.value.cupertino as CupertinoPane);
      fetchAll();
    });

    return { 
      cupertinoRef,
      githubUser, 
      githubUserRepos, 
      codewarsUser, 
      COMPOSENAME, 
      DEFAULTPIC, 
      errorFetching, 
      fetchAll,
      cupertinoOptions,
      temporalComponent,
      openAttributions
      } 
  }
})
</script>
