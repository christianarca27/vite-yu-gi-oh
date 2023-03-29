<script>
import axios from 'axios';
import { store } from './store';
import AppMain from './components/AppMain.vue'
import AppLoader from './components/AppLoader.vue'

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppMain,
    AppLoader,
  },

  created() {
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0").then((res) => {
      this.store.cards = res.data.data;
    });
  },
}
</script>

<template>
  <AppLoader v-if="store.cards.length == 0"></AppLoader>

  <AppMain v-else></AppMain>
</template>

<style lang="scss" scoped></style>
