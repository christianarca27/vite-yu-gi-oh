<script>
import axios from 'axios';
import { store } from './store';
import AppMain from './components/AppMain.vue'

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppMain,
  },

  created() {
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0").then((res) => {
      store.cards.push(...res.data.data);
    });
  },
}
</script>

<template>
  <AppMain v-if="store.cards.length >= 50"></AppMain>
</template>

<style lang="scss" scoped></style>
