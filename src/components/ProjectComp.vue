<template>
    <div class="projectContainer">
      <div id="projects">
        <div class="projectTitle d-flex align-center justify-center mb-7">
          <h1>Projets</h1>
        </div>
        <v-row>
          <v-col
            v-for="(card, index) in sortedData"
            :key="index"
            cols="12" sm="12" md="6"
            class="mb-4"
          >
            <CardProject
              :title="card.title"
              :body="card.body"
              :src="card.src"
              :languages="card.languages"
              :link="card.link"
              :isNew="card.isNew"
              :color1="card.color1"
              :color2="card.color2"
              :category="card.category"
              class="cardProject"
            >
            </CardProject>
          </v-col>
        </v-row>
      </div>
    </div>
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

.projectContainer{
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-row{
  margin: 0 !important;
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
    transition: ease-in-out 0.3s;
}

.cardProject:hover{
    scale: 1.02;
    cursor: pointer;
}

@media only screen and (min-width: 1750px) {
    #projects{
        width: 80%;
    }
}
</style>  
