<template>
    <v-container class="pt-5">
      <v-row>
        <v-col lg="4" cols="12" sm="6" class="order-first order-lg-first d-flex align-center justify-center">
          <v-card class="textHome text-center" elevation="0">
            <h2 class="intro-text my-5">Etudiant en informatique</h2>
            <h4 class="description my-5">Etudiant en Master Génie Logiciel à l'université de Montpellier.</h4>
            <v-container class="d-flex justify-center align-center">
              <v-btn color="indigo" class="white--text cvBtn" rounded>
                <v-icon>mdi-download</v-icon><a href="/files/CV_2023.pdf" style="color: white; text-decoration: none;" class="downloadcv" download="CV_COSSU_ARNAUD.pdf">Télécharger mon CV</a>
              </v-btn>
            </v-container>
          </v-card>
        </v-col>
        <v-col lg="8" cols="12" sm="6" class="order-last order-lg-last">
          <v-container class="d-flex align-center justify-center">
            <v-img v-if="theme == 'light'"
              lazy-src="../assets/developer.svg"
              src="@/assets/developer.svg"
              class="img"
            ></v-img>
            <v-img v-else
              lazy-src="../assets/developer-dark.svg"
              src="@/assets/developer-dark.svg"
              class="img"
            ></v-img>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
</template>
  
  
<script>
  export default {
    name: "HeroComp",
    data() {
      return {
      };
    },
    computed: {
      theme() {
        return this.$vuetify.theme.currentTheme;
      },
    },
  };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@600&display=swap');

.textHome {
    font-family: 'Public Sans', sans-serif;
    font-weight: 300;
    line-height: normal;
    font-size: 1.3em;
}

.img{
  max-height: 80%;
  max-width: 80%;
}

@media only screen and (min-width: 1750px) {
    .intro-text{
      font-size: 4vw;
    }

    .description{
      font-size: 1vw;
    }

    .downloadcv{
      font-size: 1.5vw;
    }

    .img{
      max-height: 70%;
      max-width: 70%;
    }
}
</style>  