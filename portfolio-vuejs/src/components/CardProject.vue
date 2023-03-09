<template>
    <v-card :loading="loading" class="mx-auto my-12 roundedCard">
        <v-img class="projectImages"
        height="250"
        :src="src"
        cover
        ></v-img>

        <v-card-title>{{ title }}</v-card-title>

        <v-card-text>
        <v-row
            style="align=center"
            class="mx-0">
        </v-row>

        <div class="my-4 text-subtitle-1">
        </div>

        <div>{{ body }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Langages utilisés</v-card-title>

        <v-card-text>
        <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
        >
            <v-chip v-for="language in languages" :key="language">{{ language }}</v-chip>
        </v-chip-group>
        </v-card-text>

        <v-card-actions>
            <v-btn 
                color="projectButton"
                rounded
                class="white--text"
                target='_blank'
                :href="link">
                Voir le projet
            </v-btn>
        </v-card-actions>
    </v-card>
  </template>
  
  <script>
    export default {
        name: "CardProject",

        props: ['title', 'body', 'src', 'languages', 'link'],
    
        data(){
            return {

            }
        },
    }
  </script>

  <style scoped>
    .projectImages{
        object-fit: none !important;
    }

    .roundedCard{
        border-radius: 2em;
        width: 22em;
    }

    @media only screen and (max-width: 767px) {
        .roundedCard{
            width: 21em;
        }
    }
    
  </style>  