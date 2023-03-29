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
            <div id="form">
                <input type="text" placeholder="Inserisci parole chiave...">
                <button>Cerca</button>
            </div>

            <MainBriefcase>
            </MainBriefcase>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-image: url("/img/background.jpg");
    background-position: center;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        max-width: 100%;
        max-height: 100%;
        aspect-ratio: 1/1.4;
        padding: 50px;

        #form {
            width: 100vw;
            height: 5vh;

            display: flex;

            position: fixed;
            top: 0;
            left: 0;

            input {
                display: block;
                width: 80%;
                height: 100%;
                padding: 0 1rem;

                font-size: 1.2rem;
            }

            button {
                display: block;
                width: 20%;
                height: 100%;

                font-size: 1.2rem;
            }
        }
    }
}
</style>