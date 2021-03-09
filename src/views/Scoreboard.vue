<template>
  <v-container>
    <v-row>
      <v-col class="ma-auto" cols="4" sm="4" md="4">
        <h1 class="mt-2 mb-5">Tableau des scores</h1>
        <v-data-table
            :headers="headers"
            :items="players"
            class="elevation-1"
            sort-by="score"
            sort-desc="true"
        >
          <template v-slot:item.score="{ item }">
            <v-row>
              {{ item.score }}
              <v-img src="../../src/assets/coin.png" max-width="20" class="mx-2"></v-img>
            </v-row>
          </template>
          <template v-slot:no-data>
            Pas de partie enregistrée
          </template>
        </v-data-table>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
  name: 'Scoreboard',
  data: () => ({
    headers: [
      {text: 'Nom', value: 'name'},
      {text: 'Score', value: 'score'},
    ],
    players: []
  }),
  created() {
    this.getScores();
  },
  methods: {
    getScores: function () {
      const scores = localStorage.getItem('scores');
      if(scores){
        this.players = JSON.parse(scores);
      }
    }
  }
}

</script>
