<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <span>DRAW'IT</span>
      </div>

      <v-spacer></v-spacer>
      <v-btn to="/" color="primary" class="mx-2">Jouer</v-btn>
      <v-btn to="/rules" color="primary" class="mx-2">Règles</v-btn>
      <v-btn to="/scoreboard" color="primary" class="mx-2">Tableau des scores</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
