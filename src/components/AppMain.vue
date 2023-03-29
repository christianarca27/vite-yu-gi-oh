<script>
import AppSearch from './AppSearch.vue';
import MainBriefcase from './MainBriefcase.vue'

export default {
    data() {
        return {
        }
    },

    components: {
        MainBriefcase,
        AppSearch,
    },
}
</script>

<template>
    <main>
        <div class="container">
            <AppSearch></AppSearch>

            <MainBriefcase>
            </MainBriefcase>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-image: url("/img/background.jpg");
    background-position: center;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        max-width: 100%;
        max-height: 100%;
        aspect-ratio: 1/1.4;
        padding: 50px;
    }
}
</style>