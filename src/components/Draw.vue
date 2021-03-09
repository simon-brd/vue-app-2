<template>
    <v-row>
      <v-col>
        Bonne chance {{ name }} !
        <v-img src="../../src/assets/coin.png" width="70" class="mx-auto my-4"></v-img>
        Vous avez {{ money }} pièces !
        <v-row class="d-flex my-3">
          <v-select class="color" v-model="betColor" :items="cardColors" item-text="value" item-value="id" label="Couleur de la carte"></v-select>
          <v-text-field type="number" class="amount" v-model="betAmount" @change="updatePotentialGain" label="Nombre de pièces à parier"></v-text-field>
        </v-row>
        <v-row justify="center">
          <p class="my-auto">Gain potentiel :</p>
          <v-chip class="ma-2" color="yellow" label>
            {{ potentialGain }}
          </v-chip>
          <v-img src="../../src/assets/coin.png" max-width="50"></v-img>
        </v-row>
        <v-btn class="my-5" elevation="2" v-if="card.remaining !== 0" @click="drawCard(deck.deck_id)" :disabled="betAmount === 0">Parier !</v-btn>
        <div v-if="card.remaining !== 0">
          Il reste {{ card.remaining ? card.remaining : '52' }} cartes dans le jeu
        </div>
        <v-row class="d-flex justify-center my-3">
          <v-img v-if="card.cards" :src="card.cards[0].image" max-height="300" max-width="200"></v-img>
        </v-row>
        <v-alert v-if="win" dismissible text type="success" width="300" class="mx-auto my-3">Vous avez gagné {{ potentialGain }} pièces</v-alert>
        <v-alert v-if="lose" dismissible text type="error" width="300" class="mx-auto my-3">Vous avez perdu {{ betAmount }} pièces</v-alert>
        <v-alert v-if="card.remaining === 0" dismissible text type="info" width="500" class="mx-auto my-3">Partie terminée, il n'y a plus de cartes dans le deck</v-alert>
        <v-btn v-if="card.remaining === 0" @click="saveScore">Enregistrer ma partie</v-btn>
      </v-col>
    </v-row>
</template>

<script>
import axios from "axios";

const baseApiURL = 'https://deckofcardsapi.com/api'

export default {
  name: 'Draw',
  props: {
    deck: Object,
    name: String
  },
  data: () => ({
    money: 20,
    card: [],
    win: false,
    lose: false,
    betColor: null,
    betAmount : 0,
    potentialGain: 0,
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
      this.win = false;
      this.lose = false;
      if(color === this.betColor){
        this.money += Number(this.betAmount)*4;
        this.win = true;
      } else {
        this.money -= Number(this.betAmount);
        this.lose = true;
      }
    },
    updatePotentialGain: function () {
      this.potentialGain = Number(this.betAmount)*4;
    },
    saveScore: function () {
      const scores = localStorage.getItem('scores');
      if(scores){
        let oldScores = JSON.parse(scores);
        console.log(oldScores);
        oldScores.push({name: this.$props.name, score: this.money});
        const newScores = JSON.stringify(oldScores);
        localStorage.setItem('scores', newScores);
      } else {
        const json = [{name: this.$props.name , score: this.money}];
        const score = JSON.stringify(json);
        localStorage.setItem('scores', score);
      }
    }
  }
}
</script>

<style scoped>

.amount {
  margin: 10px 30px;
}
.color {
  margin: 10px 30px;
}
</style>
