<template>
    <div>
      <label class="pb-12">{{ propsData.title }}:</label>
      <input type="text" v-model="textValue" :placeholder="propsData.placeholder" @input="updateModel" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            textValue: ''
        }
    },
    props: {
      value: String,
      propsData: Object,
    },
    methods: {
      updateModel(event) {
        this.$emit('input', event.target.value);
      },
    },
    created() {
        this.textValue = this.value;
    }
  };
  </script>

  