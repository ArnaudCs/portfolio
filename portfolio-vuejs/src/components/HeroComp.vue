<template>
    <v-container class="pt-5">
      <v-row>
        <v-col lg="4" cols="12" sm="6" class="order-first order-lg-first">
          <v-container class="text-center">
            <h2 class="intro-text my-5" style="font-size: 50px;">Etudiant en informatique</h2>
            <h4 class="description my-5">Etudiant en Master Génie Logiciel à l'université de Montpellier.</h4>
            <v-container class="d-flex justify-center">
              <v-btn color="indigo" class="white--text" rounded><v-icon>mdi-download</v-icon>Télécharger mon CV</v-btn>
            </v-container>
          </v-container>
        </v-col>
        <v-col lg="8" cols="12" sm="6" class="order-last order-lg-last">
          <v-container class="d-flex align-center justify-center">
            <v-img
              lazy-src="../assets/developer.svg"
              max-height="90%"
              max-width="90%"
              src="../assets/developer.svg"
            ></v-img>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
</template>
  
  
  <script>
    export default {
        name: "HeroComp",
        setup() {
        },
        data(){
            return {
                imageUrl: '../assets/hero-img.jpg'
            }
        },
    }
  </script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@600&display=swap');

.intro-text {
    font-family: 'Public Sans', sans-serif;
    font-weight: 300;
    color: #3C4858;
}
</style>  