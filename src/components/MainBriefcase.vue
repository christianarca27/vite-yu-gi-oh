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

        <BriefcaseBottom></BriefcaseBottom>
    </div>
</template>

<style lang="scss">
#briefcase {
    height: 100%;

    display: flex;
    flex-flow: column nowrap;
}
</style>