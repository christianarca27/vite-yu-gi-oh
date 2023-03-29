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
        <div v-if="store.selectedCard == null" id="kc-logo">
            <img src="/img/kaiba-corp-logo.png" alt="">
        </div>

        <div v-else id="selected-card">
            <div id="selected-card-image">
                <img :src="store.cards[store.selectedCard].card_images[0].image_url" alt="">
            </div>

            <div id="selected-card-description">
                <h2 id="selected-card-name">
                    {{ store.cards[store.selectedCard].name }}
                </h2>

                <em id="selected-card-type">
                    {{ store.cards[store.selectedCard].type }}
                </em>

                <p id="selected-card-effect">
                    {{ store.cards[store.selectedCard].desc }}
                </p>
            </div>
        </div>

        <div v-show="store.selectedCard != null" @click="store.selectedCard = null" id="close-selected-card">
            <i class="fa-solid fa-circle-xmark"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    background-color: #803b41;
    height: 50%;
    border: 10px solid #b1b8b9;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    #kc-logo {
        width: 50%;

        img {
            width: 100%;
            height: auto;
        }
    }

    #selected-card {
        max-height: 100%;
        padding: 1rem;
        display: flex;

        #selected-card-image {
            width: 50%;

            img {
                width: 100%;
                height: auto;
            }
        }

        #selected-card-description {
            width: 50%;
            padding: .5rem;
            overflow-y: auto;

            #selected-card-name {
                margin-bottom: .5rem;
                font-size: 1.5rem;
            }

            #selected-card-type {
                display: block;
                margin-bottom: .5rem;
            }

            #selected-card-effect {
                padding: .5rem;
                border-radius: 10px;

                background-color: lighten($color: #803b41, $amount: 30%);
                color: black;
            }
        }
    }

    #close-selected-card {
        position: absolute;
        top: 50%;
        right: -20px;
        transform: translateX(100%) translateY(-50%);
        cursor: pointer;

        i {
            font-size: 2rem;
        }
    }
}
</style>