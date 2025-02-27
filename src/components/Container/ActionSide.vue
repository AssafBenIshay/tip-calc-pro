<template>
    <div class='action-side'>
        <Input inptName="Bill" inptType="text" inptLogo='dollar' inptId="Bill" />
        <Selection inptName="Select Tip %" />
        <Input inptName="Number of People" inptType="text" inptLogo='person' inptId="Quantity" />
    </div>
</template>

<script>
import Input from './ActionSide/Input.vue'
import Selection from './ActionSide/Selection.vue'
import { store } from '../../main';

export default {
    components: { Input, Selection },
    name: "ActionSide",
    props: {
        inptName: String,
        inptType: String,
        inptLogo: '',
        inptId: String,

    },
}

</script>
<style scoped>
.action-side {
    width: 100%;
    height: 100%;
    padding: 50px 25px 25px 50px;
}

@media screen and (max-width: 850px) {
    .action-side {
        padding: 25px;
    }
}
</style>