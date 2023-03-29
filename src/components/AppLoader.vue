<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <div id="logo-loader">
            <img src="/img/millennium-puzzle.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: 100vh;
    padding: 50px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 50px;

    #logo-loader {
        width: 30%;

        img {
            width: 100%;
            height: auto;
        }
    }
}
</style>