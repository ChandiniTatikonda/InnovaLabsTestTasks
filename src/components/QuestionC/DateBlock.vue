<template>
    <div>
      <label class="pt-12 pb-12">{{ propsData.title }}:</label>
      <input type="date" v-model="dateValue" :placeholder="propsData.placeholder" @input="updateModel" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            dateValue: ''
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
        this.dateValue = this.value;
    }
  };
  </script>
  