<template>
    <v-container id="projects" class="pt-15">
        <v-divider></v-divider>
        <div class="projectTitle d-flex align-center justify-center">
            <h1>Projets</h1>
        </div>
        <v-row>
            <CardProject v-for="(card, index) in cards"
                :key="index"
                :title="card.title"
                :body="card.body"
                :src="card.src"
                :languages="card.languages"
                :link="card.link"
                class="elevation-5 cardProject"
                color="secondary">
            </CardProject>
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
                { title: 'Suivi Achat Revente', body: 'Site web de gestion d\'achat revente avec suivi', src: "https://i.ibb.co/3zLYV2k/notebook-mockup-on-desk.png", languages: ['HTML', 'CSS', 'BootStrap', 'SQL', 'JS', 'AJAX'], link: "https://cashboard.arnaudcs.repl.co/index.php"},
                { title: 'Analyseur Mail', body: 'Analyseur avec statistique sur corpus de mails', src: "https://i.ibb.co/tBLHVXS/Analyseur-De-Mail.png", languages: ['Python'], link: "https://github.com/Gaiko19/INTER2-HUT"},
                { title: 'Jeux IOS Morpion', body: 'Jeu du morpion avec IA (simple)', src: "https://i.ibb.co/KmMsTk4/Morpion-Mockup.png", languages: ['Swift'], link:"https://github.com/ArnaudCs/Projects/tree/main/TickityTacTow-main"},
                { title: 'Maquettes Figma', body: 'Réalisation de différentes maquettes d\'application', src: "https://i.ibb.co/1q30BXn/iphone-multiple-screens-mockup-1.png", languages: ['Figma'], link: "https://www.figma.com/file/KybxNVg1nLvRCOEjTg7RdT/interim?t=1DPIZamu17feSRa5-6"},
                { title: 'Calculatrice React', body: 'Caclulatrice avec mode Dark Theme en React Native', src: "https://i.ibb.co/GJx6LZn/two-standing-smartphones-mockup.png", languages: ['React Native'], link: "https://github.com/ArnaudCs/Projects/tree/main/React_Calculatrice"},
                { title: 'Tasker React', body: 'Application de tâches (gestionnaire) en React Native', src: "https://i.ibb.co/tDScLKQ/Tasker-Mockup.png", languages: ['React Native'], link: "https://github.com/ArnaudCs/Projects/tree/main/React_to_do_list"},
            ],
            };
        },

    }
  </script>

<style scoped>
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