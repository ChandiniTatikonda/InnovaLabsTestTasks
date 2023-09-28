<template>
    <form class="form-container" @submit.prevent="handleSubmit">
      <div v-for="block in formBlocks" :key="block.token">
        <component :is="getComponentName(block.type)" 
        :propsData="block.props" 
        v-model="formData[block.token]" 
        @input="validateFormField(block.token)" 
        @blur="validateFormField(block.token)"/>

        <div v-if="formErrors[block.token]" class="error">{{ formErrors[block.token] }}</div>
      </div>
      <button class="submit-btn" type="submit">Submit</button>
      <div class="submission-msg" v-if="submissionMsg">{{ submissionMsg }}</div>
    </form>
  </template>
  
  <script>
  import TextBlock from '@/components/QuestionC/TextBlock.vue';
  import CheckBoxBlock from '@/components/QuestionC/CheckBoxBlock.vue';
  import DateBlock from '@/components/QuestionC/DateBlock.vue';
  import {
    required,
    minLength,
} from 'vuelidate/lib/validators';
  
  export default {
    components: {
      TextBlock,
      CheckBoxBlock,
      DateBlock
    },
    props: {
      formBlocks: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        formData: {},
        formErrors: {},
        submissionMsg: ''
      };
    },
    validations: {
        formData: {
            personName: {
                required,
                minLength: minLength(2),
            },
            personDOB: {
                required,
                isMinor: function (date) {
                    const dobParts = date.split('/');
                    const dob = new Date(`${dobParts[2]}-${dobParts[1]}-${dobParts[0]}`);
                    const today = new Date();
                    const age = today.getFullYear() - dob.getFullYear();
                    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
                        return age - 1 >= 18;
                    }
                    return age <= 18;
                },
            },
        }
    },
    methods: {
      handleSubmit() {
        if (this.validateForm()) {
          this.submissionMsg = 'Person data submitted successfully'
        }
      },
      validateForm() {
        this.formErrors = {};

        if (!this.$v.formData.personName.required) {
            this.formErrors.personName = 'Name is required';
        } else if (!this.$v.formData.personName.minLength) {
            this.formErrors.personName = 'Name must be at least 2 characters';
        }

        if (!this.$v.formData.personDOB.required) {
            this.formErrors.personDOB = 'Date of Birth is required';
        } else if (!this.$v.formData.personDOB.isMinor) {
            this.formErrors.personDOB = 'Person age is more than 18';
        }

        return Object.keys(this.formErrors).length === 0;
      },
      validateFormField(fieldName) {
        if (fieldName === 'personName') {
          if (!this.$v.formData.personName.required) {
            this.formErrors.personName = 'Name is required';
          } else if (!this.$v.formData.personName.minLength) {
            this.formErrors.personName = 'Name must be at least 2 characters';
          } else {
            this.formErrors.personName = '';
          }
        }
        if(fieldName === 'personDOB') {
          if (!this.$v.formData.personDOB.required) {
              this.formErrors.personDOB = 'Date of Birth is required';
          } else if (!this.$v.formData.personDOB.isMinor) {
              this.formErrors.personDOB = 'Person age must be less than 18';
          } else {
              this.formErrors.personDOB = '';
          }
        }
      },
      getComponentName(type) {
      const componentMap = {
        text: 'TextBlock',
        checkbox: 'CheckBoxBlock',
        date: 'DateBlock'
      };
      return componentMap[type] || 'UnknownComponent';
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container{
    max-width: 684px;
    min-height: 350px;
    margin: 100px 0px 0px 0px;
    padding: 50px 100px;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: 1px solid #B3B3B3;
  }
  .submit-btn{
    font-size: 18px;
    font-weight: 600;
    border-radius: 3px;
    background-color: #01518A;
    color: #FFFFFF;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 8px 64px;
    margin-top: 20px;
  }
  .error {
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 16px;
    color: #E12D33;
    float: right;
    padding-right: 4px;
  }
  .submission-msg{
    margin-top: 20px;
    color: #fff;
    background-color: #01518A;
    padding: 6px;
    border-radius: 10px;
    text-align: center;
    font-family: 'Open Sans';
  }
  </style>
  