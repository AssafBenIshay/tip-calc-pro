<template>
    <div class='select'>
        <label for=inptName>{{ inptName }}</label>
        <div class='percentBtnGroup' id=inptName>
            <button class='shape btn' @click='setValue($event)' value='5' ref='b1'>5%</button>
            <button class='shape btn' @click='setValue($event)' value='10' ref='b2'>10%</button>
            <button class='shape btn' @click='setValue($event)' value='15' ref='b3'>15%</button>
            <button class=' shape btn' @click='setValue($event)' value='25' ref='b4'>25%</button>
            <button class=' shape btn' @click='setValue($event)' value='50' ref='b5'>50%</button>
            <input type="text" class=' shape custom' placeholder='Custom' ref='txtPercentInput' @input='setValue($event)' />
        </div>
    </div>
</template>

<script>
import { store } from '../../../main';

export default {
    name: "Selection",
    props: ["inptName", "inptType", "inptId"],
    computed: {
        discount() {
            return store.state.discount
        }
    },
    methods: {

        setValue($event) {
            let tmp = Number($event.target.value)

            if (isNaN(tmp) || tmp > 100 || tmp < 0) {
                this.$refs.txtPercentInput.classList.add("red");
                this.$refs.txtPercentInput.value = ""
            } else if (
                this.$refs.b1 === $event.target ||
                this.$refs.b2 === $event.target ||
                this.$refs.b3 === $event.target ||
                this.$refs.b4 === $event.target ||
                this.$refs.b5 === $event.target
            ) {
                this.$refs.txtPercentInput.value = $event.target.value
                this.tip = tmp
                store.commit('setDiscount', tmp)

            } else {
                this.$refs.txtPercentInput.classList.remove("red")
                this.tip = tmp
                store.commit('setDiscount', tmp)

            }

        }
    }
}
</script>
<style scoped>
.select {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
}

.select label {

    font-size: 16px;
    color: var(--Grayishcyan);
    margin-bottom: 15px;


}

.shape {
    width: 118px;
    height: 48px;
    border: none;
    border-radius: 5px;
    font-family: inherit;
    font-weight: inherit;
    font-style: inherit;
}

.btn {
    border: none;
    background-color: var(--Verydarkcyan);
    color: white;
    font-size: 25px;
}

.btn:focus {
    outline: none;
    background-color: var(--Lightgrayishcyan);
    color: var(--Verydarkcyan);
}

.btn:hover {
    box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.7);
}



.percentBtnGroup {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 25px;
}

.custom {
    direction: rtl;
    text-indent: 15px;
    font-size: 25px;
    color: var(--Verydarkcyan);
    background-color: var(--Verylightgrayishcyan)
}

.custom:hover {
    box-shadow: inset 1px 3px 7px rgba(0, 0, 0, 0.2);
}

.custom:focus {
    outline-color: var(--Strongcyan);

}

.custom::placeholder {
    text-align: center;
}

.red {
    outline-color: red !important;

}
@media screen and (max-width: 500px) {
    .percentBtnGroup {
        margin-bottom: 5px;
    }

}
</style>