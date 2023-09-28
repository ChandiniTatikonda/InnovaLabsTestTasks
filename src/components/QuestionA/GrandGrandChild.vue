<template>
    <div>
        <div>{{ dataFromChildToGrandChild }}</div>
        <button @click="passDataToAnonymous">Send Data To Anonymous</button>
    </div>
</template>

<script>
import { EventBus } from "../../main";

export default{
    data() {
        return {
            dataToAnonymous: "This data is from anonymous through EventBus"
        }
    },
    inject: ['dataFromChildToGrandChild'],
    methods: {
        passDataToAnonymous() {
            EventBus.$emit('passDataToAnonymous', this.dataToAnonymous);
        }
    }
}
</script>
