<template>
    <v-container class="bioCard">
        <v-parallax class="bioCard d-flex align-center justify-center" src="../assets/pexels-adrien-olichon-2387793-modified.jpg">
            <div class="bioContainer">
                <p class="bioTitle pb-2">{{ title }}</p>
                <p class="bioText"> {{ body }} </p>
                <p class="bioText"> {{ body1 }} </p>
                <p class="bioText"> {{ body2 }} </p>
            </div>
            
        </v-parallax>
    </v-container>
</template>
  
<script>
    export default {
        name: "BioComp",

        data: () => ({
                title: 'Quelques informations', 
                body: "Jeune étudiant en informatique je suis passionné depuis tout petit par les nouvelles technologies. Tout commence par de l'électronique, puis cela se propage sur la création de site web simples, pour finir en master informatique. \
                Au lycée je choisis donc l'option ICN (informatique et création numérique) lors de mon année de première. Cette option est basée sur le volontariat et n'est pas obligatoire. \
                C'est là où les premières bases du code apparaissent, avec le Pascal et le C.", 
                body1: "Puis en terminale je choisis l'option ISN (informatique et science du numérique) afin de continuer mon parcours, \
                où les bases du code sont un peu plus poussées et où un projet final est attendu. \
                Par la suite je choisis donc de m'inscrire en CMI informatique à la faculté des sciences de Montpellier, afin de continuer dans le domaine qui m'intéresse depuis tant d'années. \
                Après avoir passé les 3 années de licence, je suis maintenant en Master Génie Logiciel à la faculté des sciences de Montpellier.",
                body2: "Par la suite je choisis donc de m'inscrire en CMI informatique à la faculté des sciences de Montpellier, afin de continuer dans le domaine qui m'intéresse depuis tant d'années. \
                Après avoir passé les 3 années de licence, je suis maintenant en Master Génie Logiciel à la faculté des sciences de Montpellier.",
        }),
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@600&display=swap');
.bioCard{
    border-radius: 2em;
    max-height: 65vh;
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
    font-family: 'Public Sans', sans-serif;
    font-size: 2em;
    font-weight: 300;
    font-style: italic;
}

.bioContainer{
    padding: 4em 4em 4em 4em;
}

@media only screen and (max-width: 767px) {
    .bioCard {
        max-height: 90%;
    }

    .bioContainer{
        padding: 2em;
    }

    .bioText{
        font-size: 1em;
        font-weight: 300;
        margin-top: 2vh;
    }

    .bioTitle{
        font-size: 1.7em;
        font-weight: 300;
        font-style: italic;
    }
}

@media only screen and (max-width: 1280px) {
    .bioCard {
        max-height: 90%;
    }

    .bioContainer{
        padding: 2em;
    }

    .bioText{
        font-size: 1,2em;
        font-weight: 300;
        margin-top: 2vh;
    }

    .bioTitle{
        font-size: 1.7em;
        font-weight: 300;
        font-style: italic;
    }
}
</style>  