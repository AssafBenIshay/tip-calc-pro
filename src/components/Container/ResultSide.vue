<template>
    <div class='result-side'>
        <div class="result">
            <ResultLabel label='Tip Amount' />
            <ResultLabel label='Total' />
            <button class="reset" @click='reset'>RESET</button>
        </div>
    </div>
</template>

<script>
import ResultLabel from './ResultSide/ResultLabel.vue';
import { store } from '../../main'
export default {
    name: "ResultSide",
    components: {
        ResultLabel,
    },
    computed: {
        reset() {
            store.commit('resetCalculator')
        }
    },
    data() {
        return {
        }
    }
    
}
</script>
<style scoped>
.result-side {
    width: 100%;
    height: 100%;
    padding: 35px 35px 35px 0;
}

.result {
    width: auto;
    height: 420px;
    background-color: var(--Verydarkcyan);
    border: none;
    border-radius: 15px;
    padding: 50px 40px;
}
.reset{
    width:100%;
    padding: 10px;
    font-family: inherit;
    font-size: 20px;
    color:var(--Verydarkcyan);
    border-radius: 7px;
    outline: none;
    border:none;
    background-color: white;
    margin-top: 50px;
    transition: all 0.1s;
}
.reset:hover{
background-color: var(--Lightgrayishcyan);
box-shadow: 1px 3px 7px rgba(0,0,0,0.7);
}
.reset:active{
background-color: var(--Grayishcyan);
transform: scale(0.98);
}

@media screen and (max-width: 850px) {
    .result-side {
        padding: 25px;
    }
    .result{
        height: auto;
    }
}
@media screen and (max-width: 500px) {
    .reset{
        margin-top: 0;
    }
    .result{
        padding: 20px 40px;
    }

}
</style>