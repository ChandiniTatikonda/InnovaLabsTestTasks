<template>
  <div class="question-a-container">
    <h3>Parent-Child Communication</h3>
    <button @click="changeMessage">FromParent</button>

    <question-a-child :dataFromParentToChild="dataFromParentToChild" @dataFromChildToParent="dataFromChildToParent">
      <template v-slot:childSlot="slotProps">
        <button @click="handleChildClick(slotProps.messageFromSlot)">
          Click In Child Through Slots
        </button>
      </template>
    </question-a-child>

    <div>{{ messageFromChild }}</div>
    <div>
      <p>{{ dataFromChild }}</p>
    </div>
    <anonymous-component></anonymous-component>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import QuestionAChild from '@/components/QuestionA/QuestionAChild.vue';
import AnonymousComponent from '@/components/QuestionA/AnonymousComponent.vue';

export default {
  data() {
    return {
      dataFromParentToChild: 'Hello! I am from Parent to Child through Props',
      dataFromChild: '',
      messageFromChild: ''
    }
  },
  components: {
    QuestionAChild,
    AnonymousComponent
  },
  computed: {
    ...mapState(['message'])
  },
  methods: {
    changeMessage() {
      this.$store.commit('SET_MESSAGE', {message: 'Now I changed from Parent through Vuex'})
    },
    dataFromChildToParent(data) {
      this.dataFromChild = data;
    },
    handleChildClick(message) {
      this.messageFromChild = message;
    },
  }
}
</script>

<style>

</style>