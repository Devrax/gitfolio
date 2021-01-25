import { computed, Ref } from "vue";

import { upperCaser } from "../../shared/utils/text-procesor-utilities";

export default function textProcesor(textRef: Ref<string>) {
    const uppercase = computed(() => {
        return upperCaser(textRef.value);
    })

    return {
        uppercase
    }

}