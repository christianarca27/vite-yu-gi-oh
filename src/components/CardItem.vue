<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },

    props: {
        card: Object,
        index: Number,
    }
}
</script>

<template>
    <div @click="store.selectedCard = index" class="card">
        <img :src="card.card_images[0].image_url" alt="">
    </div>
</template>

<style lang="scss" scoped>
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
</style>