<template>
    <div class="lg:flex lg:flex-wrap max-width lg:mx-auto">
        <transition appear name="list">
            <div class="lg:w-1/3 pt-9 px-3">
                <div class="text-4xl text-orange-400">
                    About me
                </div>
                <div class="pt-3">
                    <slot name="about-me"></slot>
                </div>
            </div>
        </transition>
        <br>

        <transition appear name="list">
            <div class="lg:w-2/3">
                <div class="text-4xl px-3 pt-9 text-orange-400">
                    Github Projects
                </div>
                <div>
                    <slot name="projects"></slot>
                </div>
            </div>
        </transition>
        <br>

        <transition appear name="list">
            <div class="lg:w-full px-3">
                <div class="text-4xl text-orange-400">
                    Codewars stats
                </div>
                <div>
                    <slot name="codewars-stats"></slot>
                </div>
            </div>
        </transition>
        <br>
        
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'InformationBox'
})
</script>
