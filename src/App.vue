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
    this.store.isResultValid = true;
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?")
      .catch((error) => {
        this.store.isResultValid = false;
      })
      .then((res) => {
        if (this.store.isResultValid) {
          this.store.cards = res.data.data;
          this.store.isLoading = false;
        }
      });
  },
}
</script>

<template>
  <AppLoader v-if="store.isLoading"></AppLoader>

  <AppMain v-else></AppMain>
</template>

<style lang="scss" scoped></style>
