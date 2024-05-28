<template>
    <div class="paral">
        <div id="home" class="bioCard d-flex align-center justify-center" style="scroll-margin-top: 80px;">
            <v-card class="textHome text-center" elevation="0" color="transparent">
                <h2 class="bioTitle mb-5">Etudiant en informatique</h2>
                <h4 class="bioText my-5">Etudiant en Master Génie Logiciel à l'université de Montpellier.</h4>
                <v-container class="d-flex justify-center align-center">
                    <v-btn v-if="files.length > 0" class="cvBtn" size="x-large" rounded="pill">
                        <a :href="files[0].url" style="color: white; text-decoration: none;" class="downloadcv" download="CV_COSSU_ARNAUD.pdf">Télécharger mon CV</a>
                    </v-btn>
                </v-container>
                <a href="#projects" v-smooth-scroll style="text-decoration: none"><v-icon class="arrow-icon" style="cursor: pointer; color: white; margin-top: 8vh; scale: 1.5; rotate: 180deg;">mdi-rocket</v-icon></a>
            </v-card>
        </div>
    </div>
</template>
  
<script>
    export default {
        name: "BioComp",

        props: {
            files: {
                type: Array,
                required: true
            }
        },

        data: () => ({
                title: 'Quelques informations', 
                body: "Jeune étudiant en informatique je suis passionné depuis tout petit par les nouvelles technologies. Tout commence par de l'électronique, puis cela se propage sur la création de site web simples, pour finir en master informatique. \
                Au lycée je choisis donc l'option ICN (informatique et création numérique) lors de mon année de première. Cette option est basée sur le volontariat et n'est pas obligatoire. \
                C'est là où les premières bases du code apparaissent, avec le Pascal et le C.", 
                body1: "Puis en terminale je choisis l'option ISN (informatique et science du numérique) afin de continuer mon parcours, \
                où les bases du code sont un peu plus poussées et où un projet final est attendu. \
                Par la suite je choisis donc de m'inscrire en CMI informatique à la faculté des sciences de Montpellier, afin de continuer dans le domaine qui m'intéresse depuis tant d'années. ",
                body2: "Après avoir passé les 3 années de licence, je suis maintenant en Master Génie Logiciel à la faculté des sciences de Montpellier.",
        }),
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@600&display=swap');
@import url('https://fonts.cdnfonts.com/css/gotham-rounded');

.textHome{
    transform: translateY(-4vh);
    overflow: visible;
}


.bioCard{
    max-height: 65vh;
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
    position: relative;
    max-height: 100vh;
}

.paral{
    position: relative;
    top: 0;
}


.bioText{
    color: white;
    font-family: 'Public Sans', sans-serif;
    font-size: 1.10em;
    font-weight: 300;
    margin-top: 2vh;
}

.bioTitle{
    color: white;
    font-family: 'Gotham Rounded', sans-serif;
    font-size: 2em;
    font-weight: 300;
    font-style: italic;
}

.cvBtn{
    transition: ease-in-out 0.5s;
    margin-top: 5vh;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.cvBtn:hover{
    scale: 1.05;
}

.bioContainer{
    padding: 4em 4em 4em 4em;
}

@media only screen and (min-width: 767px) {
    .bioCard {
        min-height: 100vh;
        padding: 0 6vw 6vw 6vw;
    }

    .bioText{
        font-size: 1.5em;
        font-weight: 300;
        margin-top: 1vh;
    }

    .bioTitle{
        font-size: 3em;
        font-weight: 700;
        font-style: italic;
    }
}

@media only screen and (max-width: 767px) {
    .bioCard {
        min-height: 100vh;
        padding: 0 6vw 6vw 6vw;
    }

    .bioContainer{
        padding: 2em;
    }

    .bioText{
        font-size: 1.2em;
        font-weight: 300;
        margin-top: 1vh;
    }

    .bioTitle{
        font-size: 2.5em;
        font-weight: 700;
        font-style: italic;
    }
}

@media only screen and (max-width: 1280px) {
    .bioCard {
        max-height: 100vh;
    }

    .bioContainer{
        padding: 2em;
    }
}

@media only screen and (min-width: 1280px) {
    .bioCard {
        max-height: 100vh;
    }

    .bioContainer{
        padding: 2em;
    }

    .bioText{
        font-size: 1.5em;
        font-weight: 700;
        margin-top: 2vh;
    }

    .bioTitle{
        font-size: 4em;
        font-weight: 700;
        font-style: italic;
    }

    .textHome{
        margin-top: 4vh;
    }

}


@media only screen and (min-width: 1750px) {

    .bioText{
        font-size: 2em;
        font-weight: 500;
        margin-top: 2vh;
    }

    .bioTitle{
        font-size: 4em;
        font-weight: 700;
        font-style: italic;
    }
}

@media only screen and (min-width: 800px) {

.bioTitle{
    font-size: 3em;
    font-weight: 700;
    font-style: italic;
}
}

@media only screen and (min-width: 2000px) {

    .bioText{
        font-size: 2.5em;
        font-weight: 500;
        margin-top: 2vh;
    }

    .bioTitle{
        font-size: 5em;
        font-weight: 700;
        font-style: italic;
    }
}

@keyframes arrow-move {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(20px);
    }
    40% {
      transform: translateY(0);
    }
}
  
.arrow-icon {
animation-name: arrow-move;
animation-duration: 3s;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;
}


</style>  