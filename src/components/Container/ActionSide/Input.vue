<template>
    <div class='input'>
        <label for=inptId>{{ inptName }}<span class='red'>{{ $data.errorMessage }}</span></label>
        <div class='iLogo'>
            <input type=inptType id=inptId ref='txtBillInput' @input='setBillValue($event.target.value)' />
            <div class="logo"><img :src=$data.logo /></div>
        </div>
    </div>
</template>

<script>
import person from '../../../assets/images/icon-person.svg'
import dollar from '../../../assets/images/icon-dollar.svg'
import { store } from '../../../main';


export default {

    name: "Input",
    props: ["inptName", "inptType", "inptLogo", "inptId", 'modelValue'],
    
    data() {
        return {
            logo: '',
            errorMessage: '',
            sum: 0,
        }
    },
    mounted() {
        if (this.$props.inptLogo === "person") {
            this.$data.logo = person
        } else {
            this.$data.logo = dollar
        }
    },
    methods: {

        setBillValue(val) {
            let tmp = Number(val)

            if (tmp <= 0) {
                this.$refs.txtBillInput.classList.add("red");
                this.$refs.txtBillInput.value = ""
                this.$data.errorMessage = "Type a Positive number"
                tmp = 0;
            } else if (isNaN(tmp)) {
                this.$refs.txtBillInput.classList.add("red");
                this.$refs.txtBillInput.value = ""
                this.$data.errorMessage = "Type only digits"
                tmp = 0;
            }
            else {
                this.$data.errorMessage = ''
                this.$refs.txtBillInput.classList.remove("red");
                this.$data.sum = tmp
                if (this.$props.inptId === "Bill") {
                    store.commit('setBill',tmp)
                } else if (this.$props.inptId === "Quantity") {
                    store.commit('setPeople',tmp)
                }
            }

        },

    }
}
</script>
<style scoped>
.input {
    display: flex;
    flex-direction: column;
}

.input label {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: var(--Grayishcyan);
    margin-bottom: 5px;

}

.input input {
    direction: rtl;
    font-size: 25px;
    padding: 5px;
    font-family: "Space Mono", serif;
    font-weight: 700;
    font-style: normal;
    color: var(--Verydarkcyan);
    background-color: var(--Verylightgrayishcyan);
    border-radius: 5px;
    outline-color: transparent;
    border: none;
    text-indent: 10px;
}

.input input:focus {
    outline-color: var(--Strongcyan);
}

.input input:hover{
    box-shadow:inset 1px 3px 7px rgba(0,0,0,0.2);
}

.iLogo {
    display: flex;
    flex-direction: column;
    z-index: 0;
}

.logo {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: var(--Grayishcyan);
    opacity: 80%;
    font-size: 20px;
    font-weight: 100;
    position: relative;
    left: 20px;
    bottom: 35px;
    width: 20px;
}

.red {
    outline-color: red !important;
    color:red;
}
@media screen and (max-width: 500px) {
    input {
        margin: 0;
        padding: 0;
    }
    .iLogo{
        margin-bottom: 0px;
        padding-bottom: 0;
    }

}
</style>