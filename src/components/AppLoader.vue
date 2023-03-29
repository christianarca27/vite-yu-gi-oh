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

        <div id="loading-bar">
            <div v-if="store.cards.length > 0" v-for="len in store.cards.length" class="completed-percentual-bar"></div>
        </div>
    </div>
</template>

<style lang="scss">
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

    #loading-bar {
        width: 100%;
        height: 50px;
        border: 5px solid black;
        border-radius: 25px;

        display: flex;
        flex-flow: row nowrap;

        overflow: hidden;

        .completed-percentual-bar {
            background-color: #dfa937;
            width: 2%;
            height: 100%;
        }
    }
}
</style>