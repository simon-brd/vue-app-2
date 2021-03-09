<template>
  <div>
    <div>
      Vous avez actuellement {{ money }} pièces !
    </div>
    <div class="inputs">
      <v-select class="color" v-model="betColor" :items="cardColors" item-text="value" item-value="id" label="Couleur de la carte"></v-select>
      <v-text-field class="amount" v-model="betAmount" label="Nombre de pièces à parier"></v-text-field>
    </div>
    <div class="btn-draw">
      <v-btn elevation="2" @click="drawCard(deck.deck_id)">Piocher une carte</v-btn>
    </div>
    <div>
      Il reste {{ card.remaining ? card.remaining : '52' }} cartes dans le jeu
    </div>
    <div class="img-card">
      <v-img v-if="card.cards" :src="card.cards[0].image" max-height="300" max-width="200"></v-img>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const baseApiURL = 'https://deckofcardsapi.com/api'

export default {
  name: 'HelloWorld',
  props: {
    deck: Object,
  },
  data: () => ({
    money: 20,
    card: [],
    betColor: '',
    betAmount : 0,
    cardValues: ['KING', 'QUEEN', 'JACK', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'ACE'],
    cardColors: [
      {
        id: 'SPADES',
        value: 'PIQUE'
      }, {
        id: 'CLUBS',
        value: 'TREFLE'
      }, {
        id: 'DIAMONDS',
        value: 'CARREAU'
      }, {
        id: 'HEARTS',
        value: 'COEUR'
      }]
  }),
  methods: {
    drawCard: async function (deck_id) {
      const response = await axios.get(baseApiURL + '/deck/' + deck_id + '/draw');
      this.card = response.data;
      this.checkBet();
    }
    ,
    checkBet: function () {
      const color = this.card.cards[0].suit;
      if(color === this.betColor){
        this.money += Number(this.betAmount)*4;
      } else {
        this.money -= Number(this.betAmount);
      }
    }
  }
}
</script>

<style scoped>
.img-card {
  display: flex;
  justify-content: center;
}

.btn-draw {
  margin: 20px 0;
}
.inputs {
  display: flex;
}
.amount {
  margin: 10px 30px;
}
.color {
  margin: 10px 30px;
}
</style>
