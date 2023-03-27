<template>
    <div class="d-flex align-center justify-center">
        <v-expansion-panels variant="popout" color="secondary" class="biography">
            <v-expansion-panel class="aboutBar">
                <v-expansion-panel-title class="title">
                    En savoir plus sur moi ...
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <p class="content">{{ content1 }}</p>
                    <p class="content">{{ content2 }}</p>
                    <p class="content">{{ content3 }}</p>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    name: "AboutComp",
    components: {
    },

    data: () => ({
        title: "À propos de moi ...",
        content1: "Jeune étudiant en informatique je suis passionné depuis tout jeune par les nouvelles technologies. Tout commence par de l'électronique, puis la création de site web simples, pour finir en master informatique. Au lycée je choisis donc l'option ICN (informatique et création numérique) lors de mon année de première. C'est là où les premières bases du code apparaissent, avec le Pascal et le C.",
        content2: "Puis en terminale je choisis l'option ISN (informatique et science du numérique) afin de continuer mon parcours, où les bases du code sont un peu plus poussées et où un projet final est attendu. Par la suite je choisis donc de m'inscrire en CMI informatique à la faculté des sciences de Montpellier, afin de continuer dans ce domaine.",
        content3: "Après avoir passé les 3 années de licence, je suis maintenant en Master Génie Logiciel à la faculté des sciences de Montpellier.",
    }),
}

</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/gotham-rounded');

.biography {
    width: 80%;
    margin-top: 8vh;
    border-radius: 2em;
    padding: 20px;
    text-align: justify;
    font-size: 1.2em;
}

.aboutBar{
    border-radius: 2em;
    background-color: var(--v-card-background); /* utilise la variable de thème pour la couleur de fond */
    color: var(--v-text-primary-on-background); /* utilise la variable de thème pour la couleur du texte */
}

.title{
    font-size: 1em;
    font-weight: 300;
    font-family: 'Public Sans', sans-serif;
    font-style: italic;
}

.content {
    font-size: 0.9em;
    margin-top: 3vh;
    line-height: 25px;
    font-weight: 200;
    font-family: 'Public Sans', sans-serif;
    font-style: italic;
}
</style>  