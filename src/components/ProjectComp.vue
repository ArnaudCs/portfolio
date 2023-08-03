<template>
    <v-container id="projects" class="pt-15">
      <div class="projectTitle d-flex align-center justify-center mb-7">
        <h1>Projets</h1>
      </div>
      <v-row>
        <v-col
          v-for="(card, index) in cards"
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
            class="elevation-5 cardProject"
            color="secondary"
          >
          </CardProject>
        </v-col>
        <v-col
          cols="12" sm="12" md="12"
          style="display: flex; justify-content: center; align-items: center;"
        >
            <v-btn icon="mdi-menu" size="x-large"></v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>
  
  <script>
    import CardProject from './CardProject.vue';
    export default {
        name: "ProjectComp",

        components: {
            CardProject
        },
        
        data() {
            return {
            cards: [
                { title: 'Suivi Achat Revente', 
                body: 'Site web de gestion d\'achat revente avec suivi et statistiques de vente. Création de comptes personnels.', 
                src: "https://i.ibb.co/3zLYV2k/notebook-mockup-on-desk.png", 
                languages: [{ name: 'HTML', icon: '/icons/html.svg' }, { name: 'CSS', icon: '/icons/css.svg' }, 
                { name: 'BootStrap', icon: '/icons/bootstrap.svg' }, { name: 'SQL', icon: '/icons/sql.png' },
                { name: 'JS', icon: '/icons/javascript.svg' }],
                link: "https://cashboard.arnaudcs.repl.co/index.php"},

                { title: 'Application Metrix', 
                body: 'Application simple de calul de prorata et de réductions, IOS et Android, disponible sur le Play Store.', 
                src: "https://i.ibb.co/frXw7Vj/Scene.png", 
                languages: [{ name: 'React Native', icon: '/icons/react.svg' }, { name: 'CSS', icon: '/icons/css.svg' }, { name: 'HTML', icon: '/icons/html.svg' }, { name: 'JS', icon: '/icons/javascript.svg' }],
                link: "https://github.com/ArnaudCs/Metrix"},

                { title: 'Jeux IOS Morpion',
                body: 'Jeu du morpion avec IA (simple), avec différents thèmes. Version modifiée et dépréciée (installation avec XCode)', 
                src: "https://i.ibb.co/KmMsTk4/Morpion-Mockup.png", 
                languages: [{ name: 'Swift', icon: '/icons/swift.svg' }],
                link:"https://github.com/ArnaudCs/Projects/tree/main/TickityTacTow-main"},

                { title: 'Analyseur Mail', 
                body: 'Analyseur avec statistique sur corpus de mails dans les envois entre chercheurs, calculs des fréquences d\'envoi et graphiques.', 
                src: "https://i.ibb.co/tBLHVXS/Analyseur-De-Mail.png", 
                languages: [{ name: 'HTML', icon: '/icons/html.svg' }, { name: 'CSS', icon: '/icons/css.svg' },{ name: 'python', icon: '/icons/python.svg' }],
                link: "https://github.com/Gaiko19/INTER2-HUT"},

                { title: 'Maquettes Figma', 
                body: 'Réalisation de différentes maquettes d\'application, en utilisant Figma.', 
                src: "https://i.ibb.co/1q30BXn/iphone-multiple-screens-mockup-1.png", 
                languages: [{ name: 'Figma', icon: '/icons/figma.svg' }],
                link: "https://www.figma.com/file/KybxNVg1nLvRCOEjTg7RdT/interim?t=1DPIZamu17feSRa5-6"},

                { title: 'Calculatrice React', 
                body: 'Caclulatrice avec mode Dark Theme en React Native', 
                src: "https://i.ibb.co/GJx6LZn/two-standing-smartphones-mockup.png", 
                languages: [{ name: 'React Native', icon: '/icons/react.svg' }],
                ink: "https://github.com/ArnaudCs/Projects/tree/main/React_Calculatrice"},
            ],
            };
        },

    }
  </script>

<style scoped>

.seeMoreDiv{
    border-radius: 1em; 
    aspect-ratio: 1; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
}

.projectTitle{
    font-size: 1.2em;
    font-family: 'Public Sans', sans-serif;
    font-weight: 900;
    margin-top: 4vh;
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
