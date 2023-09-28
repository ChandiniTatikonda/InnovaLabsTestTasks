<template>
  <div class="question-a-container">
    <div>{{ message }}</div>
    <button @click="changeMessage">From Child</button>
    <p>This data is from Parent - {{ dataFromParentToChild }}</p>
    <div>
        <h3>Child-Parent Communication</h3>
        <button @click="passDataToParent">Click In Child Through Custom Events</button>
        <slot name="childSlot" v-bind:messageFromSlot="messageFromSlot"></slot>
    </div>
    <div>
      <h3>Child-Child Communication</h3>
    </div>
    <grand-child></grand-child>
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue';
export default {
    components: {
        GrandChild
    },
    data() {
        return {
            dataFromChild: "This data is from Child to Parent through Custom Events",
            messageFromSlot: "This data is from Child to Parent through Slots",
        }
    },
    provide: {
        dataFromChildToGrandChild: "This Data is From Child to Nested Child through Provide & inject"
    },
    props: {
        dataFromParentToChild: {
            type: String,
            required: true
        }
    },
    computed: {
        message() {
            return this.$store.state.message;
        } 
    },
    methods: {
        changeMessage() {
            this.$store.commit('SET_MESSAGE', {message: 'Now I changed from Child through Vuex'})
        },
        passDataToParent() {
          this.$emit('dataFromChildToParent', this.dataFromChild);  
        }
  }
}
</script>

<style>

</style>