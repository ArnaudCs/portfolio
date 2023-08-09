<template>
    <v-card class="mx-auto roundedCard">
        <v-img class="projectImages"
        height="230"
        :src="src"
        cover
        ></v-img>

        <v-card-title class="my-2">{{ title }}</v-card-title>

        <v-card-text>
            <v-row
                style="align=center"
                class="mx-0">
            </v-row>

            <div class="my-4 text-subtitle-1">
            </div>

            <div style="height: 10vh;">{{ body }}</div>

            <v-divider class="mx-4 my-4"></v-divider>

            <p class="mb-2">Langages utilisés</p>

            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip v-for="language in languages" :key="language">
                    <v-avatar class="codeIcon"><img class="iconImage" :src="language.icon"></v-avatar>
                    {{ language.name }}
                </v-chip>
            </v-chip-group>

        </v-card-text>
        <v-card-actions style="display: flex; justify-content: flex-end;">
            <v-btn 
                elevation="3"
                rounded="pill"
                variant="elevated"
                class="mx-2 mb-1 seeProjectBtn"
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

    .seeProjectBtn{
        background: rgba(255, 255, 255, 0.02);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }
    .projectImages{
        object-fit: none !important;
    }

    .iconImage{
        max-width: 100%;
        max-height: 100%;
    }

    .roundedCard{
        border-radius: 2em;
    }

    .codeIcon{
        width: 1.5em;
        height: 1.5em;
        margin-right: 0.5em;
    }
    
  </style>  