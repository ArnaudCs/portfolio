<template>
    <v-container>
      salut je m'"apelle Arnaud"
    </v-container>
  </template>
  
  <script>
  
  export default {
    name: 'App',
    components: {
      
    },
    data() {
      return {
        isLoading: true,
      };
    },
    methods: {
      
    },
    mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  };
  </script>
  
  <style>
  
  .app{
    background: rgb(102, 5, 121);
    background: linear-gradient(to top left, rgb(125, 0, 96), rgba(0, 0, 0, 0), rgb(24, 0, 75)), linear-gradient(to top right, rgb(121, 57, 0), rgba(255, 153, 150, 0), rgb(76, 0, 76)) rgb(76, 0, 86);
    position:relative;
    scroll-behavior: smooth;
  }
  
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    /* Ajoutez ici les autres styles CSS pour HeaderComp */
  }
  
  html{
    scroll-behavior: smooth;
  }
  </style>