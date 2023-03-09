<template>
    <v-container id="documents" class="elevation-10">
        <v-container class="d-flex align-center justify-center">
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
                    color="indigo"
                    v-bind="props"
                    rounded
                    >
                    Voir les documents
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="dialogText">Téléchargement des documents</span>
                    </v-card-title>
                    <v-card-text>
                        <v-card v-for="docs in documentsInfos" :key="docs" elevation="8"
                            class="mx-auto my-4 cardDoc"
                            width="96%"
                            prepend-icon="mdi-file">
                            <template v-slot:title>
                                {{ docs.title }}
                            </template>

                            <v-card-text>
                                {{ docs.body }}
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="primary" rounded="pill"><a :href="docs.pdf_url" :download="docs.pdfName" class="anchorDownload">Télécharger</a></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        variant="text"
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
    </v-container>
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
                    body: 'Le Certificat Voltaire est un examen créé en 2010 par le Projet Voltaire. Il est censé permettre d\'attester de son niveau en orthographe et en expression française.', 
                    pdf_url: "", 
                    pdfName: "VOLTAIRE_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/mqY8vgh/logocertifvoltaire.png"},
                {title: 'LanguageCert', 
                    body: 'LanguageCert propose des examens certifiants, alignés sur le CECRL et réglementés officiellement de façon externe par Ofqual, l’organisme gouvernemental de règlementation des diplômes en Angleterre.', 
                    pdf_url: "/files/LANGUAGECERT_COSSU_ARNAUD.pdf",
                    pdfName: "LANGUAGECERT_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/CvCRrcR/languagecert-logo.png"},
                {title: 'Diplôme du PIX', 
                    body: 'PIX est un outil permettant d\'évaluer en ligne les compétences numériques des élèves, des étudiants et des stagiaires en formation continue.', 
                    pdf_url: "/files/PIX_COSSU_ARNAUD.pdf",
                    pdfName: "PIX_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/LppmPFH/t-l-chargement.png"},
                {title: 'DeutscheSprache Diplom', 
                    body: 'La certification d’allemand pour l’obtention du Deutsches Sprachdiplom, est un examen qui permet d’attester un niveau de compétence reconnu dans tout l’espace européen.', 
                    pdf_url: "/files/SPRACHEDIPLOM_COSSU_ARNAUD.pdf",
                    pdfName: "SPRACHEDIPLOM_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/Wt2Rryh/deutsches-sprachdiplom-bild.jpg"},
                {title: 'Certification Voltaire', 
                    body: 'Le Certificat Voltaire est un examen créé en 2010 par le Projet Voltaire. Il est censé permettre d\'attester de son niveau en orthographe et en expression française.', 
                    pdf_url: "", 
                    pdfName: "VOLTAIRE_COSSU_ARNAUD.pdf", 
                    logoSrc: "https://i.ibb.co/mqY8vgh/logocertifvoltaire.png"},
                ],
            }
        },
    }
    </script>

<style scoped>

.docContainer{
    margin-top: 3vh;
}

#documents{
    margin-top: 3vh;
    border-radius: 2em;
}
.cardDoc{
    border-radius: 2em;
}
.expensions{
    border-radius: 20px;
    margin-top: 3vh;
}
.dialogText{
    font-size: 1.4em;
    font-family: 'Public Sans', sans-serif;
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
</style>  