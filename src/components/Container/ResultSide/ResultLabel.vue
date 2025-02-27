<template>
    <div class='r-container'>
        <div class="r-label-left">
            <div class='r-label-top'>{{ label }}</div>
            <div class='r-label-bottom'>/ person</div>
        </div>
        <div class="r-label-right">${{ result }}</div>
    </div>
</template>

<script>
import { store } from '../../../main';

export default {
    name: "ResultLabel",
    props: ['label'],
    computed: {
        result() {
            if (store.state.bill === 0 || store.state.discount === 0 || store.state.people === 0) {
                return '0.00'
            } else {

                if (this.$props.label === "Tip Amount") {

                    return ((Math.floor(((store.state.bill * store.state.discount) / 100) / store.state.people) * 100) / 100)
                } else if (this.$props.label === "Total") {
                    return (Math.floor((store.state.bill / store.state.people) * 100) / 100)
                }
            }

        }
    },
}
</script>
<style scoped>
.r-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 20%;
    margin-bottom: 50px;
}

.r-label-top {
    color: white;
    font-size: 16px;

}

.r-label-bottom {
    color: var(--Grayishcyan);
    font-size: 14px;
}

.r-label-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
}

.r-label-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    color: var(--Strongcyan);
    font-size: 45px;

}
@media screen and (max-width: 500px) {
    .r-container{
        margin-bottom: 20px;
    }
}
</style>