<template>
    <div class="col-xs-12 welcome-wrapper">
        <div class="col-xs-12 p-0 d-flex justify-content-center">
            <div class="welcome-container">
                <div class="welcome-text">Innova Labs Test Tasks</div>
                <div class="d-flex justify-content-between" >
                    <button class="question-btn" v-for="question in questions" :key="question" 
                    @click="navigateToSolutionPage(question)">{{ question }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        questions: ['QuestionA', 'QuestionB', 'QuestionC']
    }
  },
  methods: {
    navigateToSolutionPage(question) {
        if(question === 'QuestionA') {
            this.$router.push({name: 'QuestionA'});
        } else if(question === 'QuestionB') {
            this.$router.push({name: 'QuestionB'});
        } else {
            this.$router.push({name: 'QuestionC'});
        }
    }
  }  
}
</script>

<style scoped>
.welcome-wrapper{
    padding-bottom: 60px;
    min-height: 100vh;
    background: #ebebeb;
}
.welcome-container{ 
    max-width: 684px;
    min-height: 350px;
    margin: 100px 0px 0px 0px;
    padding: 50px 100px;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: 1px solid #B3B3B3;
}
.welcome-text{
    font-family: 'Open Sans';
    font-size: 42px;
    padding-bottom: 50px;
}
.question-btn {
    font-size: 18px;
    font-weight: 600;
    border-radius: 3px;
    background-color: #01518A;
    color: #FFFFFF;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 8px 12px;
}
</style>