<script>
import { store } from '../store';
import CardItem from './CardItem.vue';

export default {
    data() {
        return {
            store,

            page: 0,

            cardPerPage: 50,

            startIndex: 0,

            stopIndex: 50,
        }
    },

    components: {
        CardItem,
    },

    methods: {
        prevPage() {
            if ((this.page - 1) * this.cardPerPage >= 0) {
                this.page--;

                this.calcNewIndexes();
            }
        },

        nextPage() {
            if ((this.page + 1) * this.cardPerPage < store.cards.length) {
                this.page++;

                this.calcNewIndexes();
            }
        },

        calcNewIndexes() {
            this.startIndex = this.page * this.cardPerPage;
            this.stopIndex = (this.page + 1) * this.cardPerPage;
        },
    },
}
</script>

<template>
    <div v-if="store.cards.length > 0" class="container">
        <CardItem v-for="(card, index) in store.cards.slice(startIndex, stopIndex)" :card="card"
            :index="index + (page * cardPerPage)" class="card">
        </CardItem>

        <div @click="prevPage()" id="prev-page">
            <i class="fa-solid fa-circle-chevron-up"></i>
        </div>
        <div @click="nextPage()" id="next-page">
            <i class="fa-solid fa-circle-chevron-down"></i>
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
}
</style>