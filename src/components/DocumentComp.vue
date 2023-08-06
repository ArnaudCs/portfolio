<template>
    <div id="docs" class="d-flex align-center justify-center">
        <v-card id="documents" class="elevation-6 docCard">
            <v-container class="d-flex align-center justify-center docContainer">
                <div class="text-center">
                    <h1>Documents</h1>
                    <h3 class="pt-2 docText">Ici sont disponibles tous les documents numérisées utiles et obtenus lors de mon parcours</h3>
                </div>
            </v-container>
            <v-container class="d-flex align-center justify-center docContainer">
                <v-row justify="center">
                    <v-dialog
                    v-model="dialog"
                    width="1000"
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn
                        class="docBtn"
                        v-bind="props"
                        rounded
                        >
                        Voir les documents
                        </v-btn>
                    </template>
                    <v-card class="docContainerCard">
                        
                        <v-card-title class="mt-4 docTitle">
                            <div class="downloadTitle">
                                <div class="dialogText pa-2">Documents</div>
                            </div>
                        </v-card-title>
                        <v-card-text>
                            <v-card v-for="docs in documentsInfos" :key="docs" elevation="8"
                                class="mx-auto my-4 cardDoc"
                                width="96%"
                                :prepend-avatar="docs.logoSrc">
                                <template v-slot:title>
                                    {{ docs.title }}
                                </template>

                                <v-card-text>
                                    {{ docs.body }}
                                </v-card-text>
                                <v-card-actions style="display: flex; justify-content: flex-end;">
                                    <v-btn class="my-2 mx-2 downDoc" variant="elevated" rounded="pill" elevation="5" :href="docs.pdf_url" :download="docs.pdfName">Télécharger</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="my-2 mx-2 docBtn"
                            variant="elevated"
                            rounded="pill"
                            @click="dialog = false"
                        >
                        <v-tooltip
                            activator="parent"
                            location="top"
                        >J'ai ce qu'il me faut</v-tooltip>
                            Fermer
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-row>
            </v-container>
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
            documentsInfos: [
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
                {title: 'Diplôme du PIX', 
                    body: 'PIX est un outil permettant d\'évaluer en ligne les compétences numériques des élèves, des étudiants et des stagiaires en formation continue.', 
                    pdf_url: "/files/PIX_COSSU_ARNAUD.pdf",
                    pdfName: "PIX_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/gv429K6/logPIX.png"},
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
            }
        },
    }
    </script>

<style scoped>

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
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    width: 70%;
    border-radius: 1em;
}
.downDoc{
    background: rgba(255, 255, 255, 0.02);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

.docBtn{
    background: rgba(255, 255, 255, 0.22);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

.docContainerCard{
    background: rgb(102, 5, 121);
    background: linear-gradient(to top left, rgb(125, 0, 96), rgba(0, 0, 0, 0), rgb(24, 0, 75)), linear-gradient(to top right, rgb(121, 57, 0), rgba(255, 153, 150, 0), rgb(76, 0, 76)) rgb(76, 0, 86);
    position:relative;
}

.docCard{
    transition: 0.8s ease-in-out;
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

.docContainer{
    margin-top: 3vh;
}

#docs{
    margin-bottom: 10vh;
}


#documents{
    margin-top: 3vh;
    width: 60%;
    border-radius: 2em;
    padding: 1em;
}
.cardDoc{
    border-radius: 2em;
    transition: ease-in-out 0.5s;
    background: rgba(255, 255, 255, 0.21);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
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
    #documents{
        width: 85%;
    }

    .docText{
        font-size: 1em;
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