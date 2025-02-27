<template>
    <div class='container'>
        <ActionSide />
        <ResultSide />
    </div>
</template>

<script>
import ResultSide from './Container/ResultSide.vue'
import ActionSide from './Container/ActionSide.vue'

export default {
    components: { ActionSide, ResultSide },
    name: "Container",
}
</script>
<style scoped>
.container {
    width: 920px;
    height: auto;
    background-color: white;
    border-radius: 25px;
    margin-top: 80px;
    display: grid;
    grid-template-columns: 50% 50%;
    overflow: hidden;
}

@media screen and (max-width: 850px) {
    .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 500px;
        height: auto;
        overflow: visible;
        margin-top: 30px;
    }
}

@media screen and (max-width: 500px) {
    .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 375px;
        height: auto;
        overflow: visible;
        margin-top: 40px;
    }
}
</style>