<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store,
            inputSearch: "",
        }
    },

    methods: {
        search() {
            this.store.selectedCard = null;
            this.store.actualPage = 0;
            this.store.startIndex = 0;
            this.store.stopIndex = 50;

            this.store.isResultValid = true;
            if (this.inputSearch == "") {
                axios.get(this.store.basicQuery)
                    .catch((error) => {
                        this.store.isResultValid = false;
                    })
                    .then((res) => {
                        if (this.store.isResultValid) {
                            this.store.cards = res.data.data;
                            this.store.isLoading = false;
                        }
                    });
            }
            else {
                axios.get(this.store.basicQuery + "?fname=" + this.inputSearch)
                    .catch((error) => {
                        this.store.isResultValid = false;
                    })
                    .then((res) => {
                        if (this.store.isResultValid) {
                            this.store.cards = res.data.data;
                        }
                    });
            }
        },
    },
}
</script>

<template>
    <div id="search-wrapper">
        <div id="search">
            <input @keyup.enter="search" type="text" v-model="inputSearch" placeholder="Insert keyword...">
            <button @click="search()">Search</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#search-wrapper {
    width: 100vw;
    height: 5vh;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;

    #search {
        width: 80%;
        height: 100%;

        display: flex;
        gap: 10px;

        input {
            border: 2px solid black;
            border-radius: 10px;

            display: block;
            width: calc(80% - 5px);
            height: 100%;
            padding: 0 1rem;

            font-size: 1.2rem;
        }

        button {
            background-color: rgb(17, 165, 252);
            border: 2px solid black;
            border-radius: 10px;

            display: block;
            width: calc((20% - 5px));
            height: 100%;

            font-size: 1.2rem;
            cursor: pointer;

            &:hover {
                background-color: lighten($color: rgb(17, 165, 252), $amount: 20%);
            }
        }
    }
}
</style>