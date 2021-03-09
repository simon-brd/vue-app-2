<template>
  <v-container>
    <v-row class="container-drawit">
      <v-col>
        <h1>Bienvenue sur Draw'it</h1>
        <v-row v-if="shuffled === false">
          <v-col cols="4" md="4" sm="4" class="mx-auto my-3">
            <v-text-field v-model="name" label="Nom du joueur"></v-text-field>
          </v-col>
        </v-row>
        <v-btn v-if="shuffled === false" :disabled="!name" elevation="2" @click="shuffleCards()">Démarrer une partie</v-btn>
        <Draw v-if="shuffled" :deck="deck" :name="name" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Draw from '@/components/Draw.vue'
import axios from 'axios'

const baseApiURL = 'https://deckofcardsapi.com/api'

export default {
  name: 'Home',
  components: {
    Draw
  },
  data: () => ({
    shuffled: false,
    deck: [],
    cardDrawn: [],
    name: null
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
