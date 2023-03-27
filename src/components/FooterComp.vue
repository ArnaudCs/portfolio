<template>
    <v-footer
      dark
      padless id="contact"
      class="d-flex align-center justify-center"
      color="secondary"
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
        color="secondary"
      >
        <v-card-text>
          <v-btn
          v-for="icon in socialLinks"
          :key="icon.icon"
          class="mx-4 my-4 white--text"
          :href="icon.link"
          :icon="true"
          color="button"
          target="_blank">
          <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-text>
  
        <v-card-text class="white--text pt-0">
          Made with Love <v-icon>mdi-heart</v-icon> and VueJS<v-icon>mdi-vuetify</v-icon>
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Arnaud Cossu</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </template>
  
  <script>
    export default {
        name: "FooterComp",
    
        data: () => ({
          socialLinks: [
            {icon: 'mdi-email', link: 'mailto:arnaud.cossu@gmail.com?subject=Message Site'},
            {icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/arnaud-c-65357215a/'},
            {icon: 'mdi-github', link: 'https://github.com/ArnaudCs'},
            {icon: 'mdi-gitlab', link: 'https://gitlab.etu.umontpellier.fr/e20190000683'},
          ],
        }),
    }
  </script>

  <style scoped></style>  