<template id="experiences">
  <v-container id="experiences" class="pa-7 mb-15">
    <div class="expTitle">
        <h1 style="text-align: center;">Expériences importantes</h1>
    </div>
    <v-timeline truncate-line="both" v-if="windowWidth > 960">
      <v-timeline-item size="large" v-for="exp in data" :key="exp">
        <template v-slot:opposite>
          {{ exp.date }}
        </template>
        <template v-slot:icon> 
          <v-avatar class="logoEntreprise" :image="exp.logoSrc" :size=exp.size @click="goto(exp.link)"></v-avatar>
        </template>
        <v-card class="elevation-2 timelineCard">
          <v-card-title class="text-h5">
            {{ exp.entreprise }}
          </v-card-title>
          <v-card-subtitle>
            {{ exp.title }}
          </v-card-subtitle>
          <v-card-text>
            {{ exp.description }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-timeline truncate-line="both" v-if="windowWidth <= 960" side="end">
      <v-timeline-item size="large" v-for="exp in data" :key="exp">
        <template v-slot:icon>
          <v-avatar :image="exp.logoSrc" :size=exp.size @click="goto(exp.link)"></v-avatar>
        </template>
        <v-card class="elevation-2 timelineCard">
          <v-card-title class="text-h5">
            {{ exp.entreprise }}
          </v-card-title>
          <v-card-subtitle>
            {{ exp.title }}
          </v-card-subtitle>
          <v-card-text>
            {{ exp.description }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
    export default {

      props: {
        data: {
          type: Array, 
          required: true
        }
      },

      data: () => ({
          tab: null,
          windowWidth: 0,
      }),

      mounted() {
        window.addEventListener('resize', this.getWindowWidth)
        this.getWindowWidth()
        console.log("Tableau des expériences", this.data);
      },
      beforeUnmount() {
        window.removeEventListener('resize', this.getWindowWidth)
      },
      methods: {
        getWindowWidth() {
          this.windowWidth = window.innerWidth
        },
        goto(link){
          window.open(link, '_blank');
        }
      }
    }
</script>

<style>


#experiences{
  scroll-margin-top: 50px;
}

.timelineCard{
  border-radius: 1em;
  transition: 0.4s ease-in-out;
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.logoEntreprise{
  cursor: pointer;
  transition: transform 0.2s ease-in-out; /* Ajout de la transition */
}

.infosExp{
  opacity: 0.5;
}

.logoEntreprise:hover {
  transform: scale(1.1); /* Effet de sautillement, agrandissement de 10% */
  animation: bounce 0.8s infinite; /* Ajout de l'animation de sautillement */
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0); /* Position initiale */
  }
  50% {
    transform: translateY(-5px); /* Position pendant le saut */
  }
}

.timelineCard:hover{
  scale: 1.03;  
}

.exp {
  margin-bottom: 10px;
  border-radius: 20px;
}

#timeline{
  margin-top: 12vh;
}

#experiences{
  margin-bottom: 10vh;
}

@media (max-width: 767px) {
  .exp {
    margin-bottom: 40px;
  }

  .expTitle{
    margin-bottom: 2vh;
  }
}

@media (max-width: 1000px) {
  .exp {
    margin-bottom: 25px;
  }
}

.expTitle{
    font-size: 1.2em;
    font-family: 'Public Sans', sans-serif;
    font-weight: 900;
    margin-top: 1vh;
    margin-bottom: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
