<template>
    <div class="projectCardStruct">
        <div class="cardHeader">
            <div class="cardLabel" v-if="isNew">
                <div class="newIcon">
                    <v-icon icon="mdi-star-shooting"></v-icon>
                </div>
                <div>
                    <p style="font-weight: 700;">New !</p>
                </div>
            </div>
            <img class="projectImages" :src="src" alt="projectImage">
        </div>

        <div class="cardContent">
            <p class="cardProjectTitle">{{ title }}</p>

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
                    <v-avatar class="codeIcon" rounded="0"><img class="iconImage" :src="language.icon"></v-avatar>
                    {{ language.name }}
                </v-chip>
            </v-chip-group>

            <div style="display: flex; justify-content: flex-end;">
                <v-btn 
                    elevation="3"
                    rounded="pill"
                    variant="elevated"
                    class="mt-2 seeProjectBtn"
                    target='_blank'
                    :href="link">
                    Voir le projet
                </v-btn>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    export default {
        name: "CardProject",

        props: ['title', 'body', 'src', 'languages', 'link', 'isNew'],
    
        data(){
            return {
                selection: null,
            }
        },
    }
  </script>

  <style scoped>

    .cardLabel{
        transform: translateY(1em) translateX(-0.7em); 
        padding: 0.5em;
        position: absolute; 
        z-index: 60;
        background-color: rgb(201, 117, 7);
        display: flex;
        flex-direction: row;
        width: 30%;
        border-radius: 0.7em;
        align-items: center;
        justify-content: center;
        opacity: 0.9;
    }

    .cardHeader{
        display: flex;
        position: relative;
    }

    .newIcon{
        margin-right: 0.5em;
    }

    .cardProjectTitle{
        font-size: 1.3em;
        font-weight: 600;
        margin-bottom: 0.5em;
        margin-bottom: 1em;
    }

    .projectCardStruct{
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .cardContent{
        transform: translateY(-2em);
        position: relative;
        z-index: 30;
        width: 95%;
        padding: 3em 1em 1em 1em;
        background: rgba(255, 255, 255, 0.21);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border-radius: 1.5em;
    }

    .seeProjectBtn{
        background: rgba(255, 255, 255, 0.02);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }
    .projectImages{
        object-fit: cover !important;
        border-radius: 1.5em;
        width: 100%;
        aspect-ratio: 16/9;
        position: relative;
        z-index: 40;
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