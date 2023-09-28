<template>
    <div>
        {{ dataFromAnonymous }}
    </div>
</template>

<script>
import { EventBus } from "../../main";

export default {
    data() {
        return {
            dataFromAnonymous: ''
        }
    },
    created() {
        EventBus.$on('passDataToAnonymous', (data) => {
            this.dataFromAnonymous = data;
        })  
    }
}
</script>
