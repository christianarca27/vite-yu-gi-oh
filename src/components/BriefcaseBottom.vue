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
}
</script>

<template>
    <div v-if="store.cards.length > 0" class="container">
        <CardItem v-for="(card, index) in store.cards" :card="card" :index="index" class="card"></CardItem>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: 50%;
    border: 10px solid #b1b8b9;

    display: flex;
    flex-flow: row wrap;
}
</style>