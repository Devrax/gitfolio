 <template>
    <div class="relative">
        <div class="absolute flex justify-center w-full lg:h-80">
            <slot name="background"></slot>
        </div>
        <div class="pt-32 md:pt-64 lg:pt-24 relative">
            <slot name="pic-name"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'ProfileBox'
})
</script>
