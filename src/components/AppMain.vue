<script>
import MainBriefcase from './MainBriefcase.vue'

export default {
    data() {
        return {
        }
    },

    components: {
        MainBriefcase,
    },
}
</script>

<template>
    <main>
        <div class="container">
            <MainBriefcase>
            </MainBriefcase>
        </div>
    </main>
</template>

<style lang="scss">
main {
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