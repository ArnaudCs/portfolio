<template>
    <v-footer
      dark
      padless id="contact"
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
          v-for="icon in socialLinks"
          :key="icon.icon"
          class="mx-4 my-4 white--text"
          :href="icon.link"
          :icon="true"
          target="_blank">
          <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-text>
  
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
            {icon: 'mdi-email', link: 'mailto:{{arnaud.cossu@gmail.com}}"'},
            {icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/arnaud-c-65357215a/'},
            {icon: 'mdi-github', link: 'https://github.com/ArnaudCs'},
            {icon: 'mdi-gitlab', link: 'https://gitlab.etu.umontpellier.fr/e20190000683'},
          ],
        }),
    }
  </script>

  <style scoped></style>  