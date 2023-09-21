<template>
    <v-container id="projects">
      <div class="projectTitle d-flex align-center justify-center mb-7">
        <h1>Projets</h1>
      </div>
      <v-row>
        <v-col
          v-for="(card, index) in sortedData"
          :key="index"
          cols="12" sm="6" md="4"
          class="mb-4"
        >
          <CardProject
            :title="card.title"
            :body="card.body"
            :src="card.src"
            :languages="card.languages"
            :link="card.link"
            :isNew="card.isNew"
            class="cardProject"
          >
          </CardProject>
        </v-col>
        <v-col cols="12" sm="12" md="12" style="display: flex; justify-content: center; align-items: center;">
            <v-btn icon="mdi-menu" size="x-large" class="moreProjectButton" @click="soon = true"></v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar v-model="soon" :timeout="1000" location="bottom" color="purple">
        <p style="text-align: center;">Bientôt disponible<v-icon icon="mdi-clock" class="ml-1"></v-icon></p>
    </v-snackbar>
</template>
  
  <script>
    import CardProject from './CardProject.vue';
    export default {
        name: "ProjectComp",

        components: {
            CardProject
        },

        props: {
          data: {
            type: Array, 
            required: true
          }
        },

        data() {
            return {
              soon: false,
              cards: [],
              dataCopy: [],
            };
        },

        computed: {
          sortedData() {
            // Copiez le tableau data pour éviter de modifier l'original
            const dataCopy = [...this.data];

            // Triez le tableau copié en fonction de la position en ordre décroissant
            return dataCopy.sort((a, b) => b.position - a.position);
          }
        }

    }
  </script>

<style scoped>

#projects{
  scroll-margin-top: 50px;
}

.moreProjectDialogStyle{
    width: 100%;
}

.projectTitle{
    font-size: 1.2em;
    font-family: 'Public Sans', sans-serif;
    font-weight: 900;
    margin-top: 4vh;
}


.moreProjectButton{
    background: rgba(255, 255, 255, 0.21);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.cardProject{
    transition: ease-in-out 0.5s;
}

.cardProject:hover{
    scale: 1.05;
}

@media only screen and (min-width: 1750px) {
    #projects{
        width: 80%;
    }
}
</style>  
