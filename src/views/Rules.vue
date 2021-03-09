<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1 class="mb-7">Règles</h1>
        <v-alert text type="info" width="800" class="mx-auto my-3">Draw'it est une application de pari sur des tirages de cartes.</v-alert>
        <v-alert text type="info" width="800" class="mx-auto my-3">Chaque joueur commence la partie avec 20 pièces.</v-alert>
        <v-alert text type="info" width="800" class="mx-auto my-3">Un deck de cartes est composée de 52 cartes.</v-alert>
        <v-alert text type="info" width="800" class="mx-auto my-3">Lorsqu'il n'y a plus de cartes, la partie est terminée.</v-alert>
        <v-alert text type="warning" width="800" class="mx-auto my-3">Lorsqu'un joueur se retrouve avec 0 pièces, il a perdu !</v-alert>
        <v-alert text type="success" width="800" class="mx-auto my-3">Lorsqu'une partie est terminée, le nombre de pièces du joueur est enregistré sur le ScoreBoard !</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'rules',

}

</script>
