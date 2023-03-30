<script>
import { store } from '../store';
import CardItem from './CardItem.vue';

export default {
    data() {
        return {
            store,
        }
    },

    components: {
        CardItem,
    },

    methods: {
        prevPage() {
            if ((this.store.actualPage - 1) * this.store.cardPerPage >= 0) {
                this.store.actualPage--;

                this.calcNewIndexes();
            }
        },

        nextPage() {
            if ((this.store.actualPage + 1) * this.store.cardPerPage < this.store.cards.length) {
                this.store.actualPage++;

                this.calcNewIndexes();
            }
        },

        calcNewIndexes() {
            this.store.startIndex = this.store.actualPage * this.store.cardPerPage;
            this.store.stopIndex = (this.store.actualPage + 1) * this.store.cardPerPage;
        },
    },
}
</script>

<template>
    <div class="container">
        <CardItem v-if="store.isResultValid" v-for="(card, index) in store.cards.slice(store.startIndex, store.stopIndex)"
            :card="card" :index="index + (store.actualPage * store.cardPerPage)" class="card">
        </CardItem>

        <div v-else id="no-result">
            <p>Nessun risultato trovato...</p>

            <img src="/img/nonno-yugi.png" alt="">
        </div>

        <div v-show="store.actualPage > 0" @click="prevPage()" id="prev-page">
            <i class="fa-solid fa-circle-chevron-up"></i>
        </div>

        <div v-show="store.actualPage < parseInt(store.cards.length / store.cardPerPage)" @click="nextPage()"
            id="next-page">
            <i class="fa-solid fa-circle-chevron-down"></i>
        </div>

        <div id="num-pages">
            {{ store.actualPage + 1 }} / {{ parseInt(store.cards.length / 50) + 1 }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    background-color: rgb(43, 43, 43);
    height: 50%;
    border: 10px solid #b1b8b9;

    display: flex;
    flex-flow: row wrap;
    align-content: start;

    position: relative;

    #no-result {
        width: 100%;
        height: 100%;

        display: flex;
        flex-flow: column nowrap;

        p {
            height: 10%;
            padding: .5rem;
        }

        img {
            height: 90%;
            width: auto;
            align-self: center;
        }
    }

    #prev-page {
        position: absolute;
        top: 0;
        right: -20px;
        transform: translateX(100%);
        cursor: pointer;

        i {
            font-size: 2rem;
        }
    }

    #next-page {
        position: absolute;
        bottom: 0;
        right: -20px;
        transform: translateX(100%);
        cursor: pointer;

        i {
            font-size: 2rem;
        }
    }

    #num-pages {
        background-color: #e1e1e1;
        padding: .5rem;
        border-radius: 5px;

        position: absolute;
        top: 50%;
        right: -20px;
        transform: translateX(100%) translateY(-50%);

        color: black;
        font-weight: bold;
        cursor: default;
    }
}
</style>