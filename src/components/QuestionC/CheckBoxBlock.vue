<template>
    <div class="d-flex align-items-center mt-30">
      <label class="pt-12">{{ propsData.title }}</label>
      <input class="mt-13 ml-20" type="checkbox" v-model="checkBoxValue" /> 
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            checkBoxValue: ''
        }
    },
    props: {
      value: Boolean,
      propsData: Object,
    },
    created() {
        this.checkBoxValue = this.value;
    }
  };
  </script>
  