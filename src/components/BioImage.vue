<template>
    <v-container>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    </v-container>
</template>
  
  
  <script>
    export default {
        name: "BioImage",
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