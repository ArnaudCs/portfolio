<template>
    <div id="docs" class="d-flex align-center justify-center">
        <v-card id="documents" class="elevation-0 docCard">
            <v-container class="d-flex align-center justify-center docContainer">
                <div class="text-center">
                    <h1>Documents</h1>
                    <h2 class="pt-2 docText">Ici sont disponibles tous les documents numérisées utiles et obtenus lors de mon parcours</h2>
                </div>
            </v-container>

            <v-card class="documentWindow" elevation="0">
                <v-tabs v-model="tab" align-tabs="center">
                    <v-tab v-for="(tabName, index) in ['Formation', 'Langage', 'Autre']" :key="index" :value="tabName">{{ tabName }}</v-tab>
                </v-tabs>

                <v-card-text>
                    <v-window v-model="tab" >
                        <v-window-item value="Formation">
                            <v-card v-for="doc in documentsUniv" :key="doc.title" elevation="8" class="mx-auto my-4 cardDoc" width="96%" :prepend-avatar="doc.logoSrc">
                                <template v-slot:title>
                                    {{ doc.title }}
                                </template>
                                <v-card-text>
                                    {{ doc.body }}
                                </v-card-text>
                                <v-card-actions style="display: flex; justify-content: flex-end;">
                                    <v-btn class="my-2 mx-2 downDoc" variant="elevated" rounded="pill" elevation="5" :href="doc.pdf_url" :download="doc.pdfName">Télécharger</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-window-item>

                        <v-window-item value="Langage">
                            <v-card v-for="doc in documentsLang" :key="doc.title" elevation="8" class="mx-auto my-4 cardDoc" width="96%" :prepend-avatar="doc.logoSrc">
                                <template v-slot:title>
                                    {{ doc.title }}
                                </template>
                                <v-card-text>
                                    {{ doc.body }}
                                </v-card-text>
                                <v-card-actions style="display: flex; justify-content: flex-end;">
                                    <v-btn class="my-2 mx-2 downDoc" variant="elevated" rounded="pill" elevation="5" :href="doc.pdf_url" :download="doc.pdfName">Télécharger</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-window-item>

                        <v-window-item value="Autre">
                            <v-card v-for="doc in documentsOther" :key="doc.title" elevation="8" class="mx-auto my-4 cardDoc" width="96%" :prepend-avatar="doc.logoSrc">
                                <template v-slot:title>
                                    {{ doc.title }}
                                </template>
                                <v-card-text>
                                    {{ doc.body }}
                                </v-card-text>
                                <v-card-actions style="display: flex; justify-content: flex-end;">
                                    <v-btn class="my-2 mx-2 downDoc" variant="elevated" rounded="pill" elevation="5" :href="doc.pdf_url" :download="doc.pdfName">Télécharger</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
        </v-card>
    </div>
</template>

<script>

export default {
    name: "DocumentComp",
    components: {
    },

    data () {
        return {
            model: 'tab-2',
            showDialog: false,
            dialog: false,
            tab: null,
            documentsUniv: [
                {title: 'Licence Informatique', 
                    body: 'La licence informatique est une formation universitaire de premier cycle qui se déroule en 3 ans. Elle permet d\'acquérir les bases de l\'informatique et de se spécialiser dans un domaine.', 
                    pdf_url: "/files/LICENCE_COSSU_ARNAUD.pdf",
                    pdfName: "LICENCE_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/QbKbNW0/logoUM.png"},
                {title: 'Diplôme du PIX', 
                    body: 'PIX est un outil permettant d\'évaluer en ligne les compétences numériques des élèves, des étudiants et des stagiaires en formation continue.', 
                    pdf_url: "/files/PIX_COSSU_ARNAUD.pdf",
                    pdfName: "PIX_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/gv429K6/logPIX.png"},
                {title: 'Baccalauréat Scientifique Science de l\'ingénieur', 
                    body: 'Le baccalauréat scientifique est un diplôme de fin d\'études secondaires générales et technologiques en France, correspondant au niveau 4 du cadre européen des certifications.',
                    pdf_url: "/files/BAC_COSSU_ARNAUD.pdf",
                    pdfName: "BAC_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/Tr2md39/Black-and-white-minimalist-jewelry-logo.png"},
                ],
            documentsLang: [
                {title: 'TOEIC', 
                    body: 'Les tests Test of English for International Communication sont des certifications standardisées permettant d\'évaluer le niveau d\'anglais des locuteurs non anglophones à l\'écrit et à l\'oral.', 
                    pdf_url: "/files/TOEIC_COSSU_ARNAUD_2023.pdf", 
                    pdfName: "TOEIC_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/FWgbW4G/logo-TOEIC.png"},
                {title: 'LanguageCert', 
                    body: 'LanguageCert propose des examens certifiants, alignés sur le CECRL et réglementés officiellement de façon externe par Ofqual, l’organisme gouvernemental de règlementation des diplômes en Angleterre.', 
                    pdf_url: "/files/LANGUAGECERT_COSSU_ARNAUD.pdf",
                    pdfName: "LANGUAGECERT_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/60kPNtJ/logo-Lang-Cert.png"},
                {title: 'DeutscheSprache Diplom', 
                    body: 'La certification d’allemand pour l’obtention du Deutsches Sprachdiplom, est un examen qui permet d’attester un niveau de compétence reconnu dans tout l’espace européen.', 
                    pdf_url: "/files/SPRACHEDIPLOM_COSSU_ARNAUD.pdf",
                    pdfName: "SPRACHEDIPLOM_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/Pm7q7rs/logo-Sprache.png"},
                {title: 'Certification Voltaire', 
                    body: 'Le Certificat Voltaire est un examen créé en 2010 par le Projet Voltaire. Il est censé permettre d\'attester de son niveau en orthographe et en expression française.', 
                    pdf_url: "/files/VOLTAIRE_COSSU_ARNAUD.pdf", 
                    pdfName: "VOLTAIRE_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/mqY8vgh/logocertifvoltaire.png"},
                ],
            documentsOther: [
                {title: 'Diplôme Google Digital Marketing', 
                    body: 'Le diplôme Google Digital Active est un programme de formation gratuit qui permet d\'acquérir les compétences numériques nécessaires à la réussite professionnelle.',
                    pdf_url: "/files/ATELIER_GOOGLE_COSSU_ARNAUD.pdf",
                    pdfName: "ATELIER_GOOGLE_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/V2mq94K/nouveau-logo-google-2015.jpg"},
                {title: 'Certification Voltaire', 
                    body: 'Le Certificat Voltaire est un examen créé en 2010 par le Projet Voltaire. Il est censé permettre d\'attester de son niveau en orthographe et en expression française.', 
                    pdf_url: "/files/VOLTAIRE_COSSU_ARNAUD.pdf", 
                    pdfName: "VOLTAIRE_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/mqY8vgh/logocertifvoltaire.png"},
                ],
            }
        },
    }
    </script>

<style scoped>

.documentWindow{
    background-color: transparent;
}

#docs{
    scroll-margin-top: 50px;
}

.docTitle{
    display: flex;
    justify-content: center;
    align-items: center;
}

.downloadTitle{
    transition: 0.8s ease-in-out;
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    width: 70%;
    border-radius: 1em;
}
.downDoc{
    background: rgba(255, 255, 255, 0.02);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.docBtn{
    background: rgba(255, 255, 255, 0.22);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.docContainerCard{
    background: rgb(102, 5, 121);
    background: linear-gradient(to top left, rgb(125, 0, 96), rgba(0, 0, 0, 0), rgb(24, 0, 75)), linear-gradient(to top right, rgb(121, 57, 0), rgba(255, 153, 150, 0), rgb(76, 0, 76)) rgb(76, 0, 86);
    position:relative;
}

.docCard{
    transition: 0.8s ease-in-out;
    background: transparent;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.docContainer{
    margin-top: 3vh;
}

#docs{
    margin-bottom: 10vh;
}


#documents{
    margin-top: 3vh;
    width: 90%;
    border-radius: 2em;
}
.cardDoc{
    border-radius: 2em;
    transition: ease-in-out 0.5s;
    background: rgba(255, 255, 255, 0.21);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
.expensions{
    border-radius: 20px;
    margin-top: 3vh;
}
.dialogText{
    font-size: 1.4em;
    font-family: 'Public Sans', sans-serif;
    text-align: center;
}

@media only screen and (max-width: 990px) {
    #documents{
        width: 90%;
    }
}

@media only screen and (max-width: 767px) {

    .docText{
        font-size: 0.9em;
    }

    .dialogText{
        font-size: 0.9em;
        font-family: 'Public Sans', sans-serif;
    }
}

.anchorDownload, a:link{
    color: primary;
    text-decoration: none;
}

@media only screen and (min-width: 1750px) {
    .docText{
        font-size: 1.2vw;
    }
}
</style>  