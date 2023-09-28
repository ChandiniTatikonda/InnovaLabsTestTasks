<template>
  <div class="col-xs-12 d-flex justify-content-center question-c-container">
    <div>
      <dynamic-form :formBlocks="formBlocks"></dynamic-form>
    </div>
  </div>
  </template>

<script>
import formBlocksData from '@/Data/formBlocks.json'
import DynamicForm from '@/components/QuestionC/DynamicForm.vue'

export default {
  components: {
    DynamicForm
  },
  data() {
    return {
      formBlocks: formBlocksData.blocks
    }
  }
}
</script>

<style scoped>
.question-c-container{
  padding-bottom: 60px;
  min-height: 100vh;
  background: #ebebeb;
}
</style>
