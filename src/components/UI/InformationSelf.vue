<template>
    <div>
        <p class="text-white text-2xl">
            {{ description }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "InformatioSelf",
    props: {
        description: {
            type: String,
            default: "None :)"
        } 
    }
})
</script>
