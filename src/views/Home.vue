<template>
  <v-container>
    <v-row class="container-drawit">
      <v-col>
        <h1>Welcome to Draw'it</h1>
        <v-btn v-if="shuffled === false" elevation="2" @click="shuffleCards()">Démarrer une partie</v-btn>
        <HelloWorld v-if="shuffled" :deck="deck" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

const baseApiURL = 'https://deckofcardsapi.com/api'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: () => ({
    shuffled: false,
    deck: [],
    cardDrawn: []
  }),
  methods: {
    shuffleCards: async function() {
      const response = await axios.get(baseApiURL + '/deck/new/shuffle');
      //console.log(response.data);
      this.deck = response.data;
      this.shuffled = true;
    },

  }
}
</script>
<style>
.container-drawit {
  text-align: center;
  width: 800px;
  margin: auto;
}
</style>
