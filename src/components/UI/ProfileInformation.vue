<template>
    <div class="flex flex-col md:flex-row max-width lg:mx-auto">
        <img :src="pic" :alt="name" class="bg-pacific-900 border-8 border-pacific-900 mx-auto rounded-2xl w-2/4 md:w-4/12 lg:ml-5">
        <div class="md:flex md:flex-col md:justify-end">
            <h1 class="mx-auto text-4xl text-center text-orange-400 w-11/12 md:text-white md:text-shadow-3xl">{{ name }}</h1>
            <transition appear name="list">
                <img v-if="codewarsUser" class="mx-auto my-2 w-11/12 md:w-9/12" :src="codewarsBadge" :alt="codewarsUser">
            </transition>
            <transition-group appear tag="div" name="list" class="flex flex-wrap justify-center mx-auto">
                <!-- --delay css variable is being use for Staggering-->
                <img 
                    v-for="(badge, index) in badges" 
                    :key="badge.label" 
                    :src="prepareBadge(badge)" 
                    class="m-1"
                    :style="{'--delay': computeDelay(index)}">
            </transition-group>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { USER as codewarsUser } from '../../providers/request/codewars';
import { badges } from '../../providers/mixins/badges';
import { Badge } from '../../models/models';
import { computeDelay } from '../../shared/utils/calculator';

export default defineComponent({
    name: 'ProfileInformation',
    props: {
        name: {
            type: String,
            default: 'Your name'
        },
        pic: {
            type: String,
            default: ''
        }
    },
    setup() {

        const codewarsBadge = ref(`https://www.codewars.com/users/${codewarsUser}/badges/large`);

        const prepareBadge = ({color, logo, logoColor, label, labelColor, style}: Badge) => {
            return `https://img.shields.io/badge/-${label}-${color}?style=${style}&logo=${logo}&labelColor=${labelColor}&logoColor=${logoColor}`;
        }

        return { badges, prepareBadge, codewarsBadge, codewarsUser, computeDelay}
    }
})
</script>
