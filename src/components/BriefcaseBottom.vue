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
    <div id="briefcase-bottom">
        <div v-if="store.cards.length >= 50" v-for="(card, index) in store.cards" @click="store.selectedCard = index"
            class="card">
            <img :src="card.card_images[0].image_url" alt="">
        </div>
    </div>
</template>

<style lang="scss">
#briefcase-bottom {
    height: 50%;
    border: 10px solid #b1b8b9;

    display: flex;
    flex-flow: row wrap;

    .card {
        width: calc(100% / 10);
        height: auto;

        &:hover {
            cursor: pointer;
            transform: scale(2);
        }

        img {
            display: block;
            width: 100%;
            height: 100%;

            object-fit: contain;
        }
    }
}
</style>