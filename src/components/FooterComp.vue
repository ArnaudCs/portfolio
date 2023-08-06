<template>
    <div class="footerDiv">
      <v-footer
        dark
        padless id="contact"
        class="d-flex align-center justify-center"
        color="transparent"
      >
        <v-card
          flat
          tile
          class="white--text text-center cardFooter"
        >
          <v-card-text>
            <v-btn
            v-for="icon in socialLinks"
            :key="icon.icon"
            class="footerBtn my-4 white--text"
            :href="icon.link"
            :icon="true"
            target="_blank">
            <v-icon class="" size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
          </v-card-text>
    
          <v-card-text class="white--text pt-0">
            Made with Love <v-icon>mdi-heart</v-icon> and VueJS<v-icon>mdi-vuetify</v-icon>
          </v-card-text>
        
          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Cossu Arnaud</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
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

<style scoped>
.footerDiv{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}

.cardFooter{
  width: 40%;
  background: rgba(255, 255, 255, 0.13);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 1em;
}

.footerBtn{
    background: rgba(255, 255, 255, 0.21);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    margin-left: 1em;
    margin-right: 1em;
}

@media only screen and (max-width: 950px) {
  .footerBtn{
    margin-left: 1em;
    margin-right: 1em;
  }

  
  .cardFooter{
    width: 100%;
  }
}

@media only screen and (max-width: 420px) {
  .footerBtn{
    margin-left: 0.5em;
    margin-right: 0.5em;
  }

}
</style>  