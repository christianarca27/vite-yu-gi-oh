import { reactive } from "vue";

export const store = reactive({
    cards: [],

    isLoading: true,

    selectedCard: null,

    isResultValid: false,

    actualPage: 0,

    startIndex: 0,

    stopIndex: 50,

    cardPerPage: 50,

    basicQuery: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
});