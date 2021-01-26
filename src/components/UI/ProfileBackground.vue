<template>
    <img 
        class="lg:object-cover lg:brightness-1/2" 
        src="../../assets/background.png" 
        alt="background">
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'ProfileBackground'
})
</script>

<style>

@media (min-width: 1024px) {
    .lg\:brightness-1\/2{
        filter: brightness(0.5)
    }
}

</style>
