<script>
import BriefcaseTop from './BriefcaseTop.vue'
import BriefcaseBottom from './BriefcaseBottom.vue'

export default {
    data() {
        return {

        }
    },

    components: {
        BriefcaseTop,
        BriefcaseBottom,
    },
}
</script>

<template>
    <div id="briefcase">
        <BriefcaseTop></BriefcaseTop>

        <hr>

        <BriefcaseBottom></BriefcaseBottom>
    </div>
</template>

<style lang="scss" scoped>
#briefcase {
    height: 100%;
    border: 5px solid black;

    display: flex;
    flex-flow: column nowrap;
}
</style>