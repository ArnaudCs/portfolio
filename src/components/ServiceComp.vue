<template>
    <div id="services" class="d-flex align-center justify-center">
        <v-card id="documents" class="elevation-0 docCard mb-7">
            <v-container class="d-flex align-center justify-center docContainer">
                <div class="text-center">
                    <h1>Services</h1>
                    <h2 class="pt-2 docText">Cette section met en lumière les différents services que je propose</h2>
                </div>
            </v-container>

            <v-row class="mt-4">
                <v-col
                    v-for="(card, index) in data"
                    :key="index"
                    cols="12" sm="12" md="4"
                    class="mb-4"
                >
                    <div>
                        <div class="priceTagContainer">
                            <div class="priceTagDiv">
                                13€/h
                            </div>
                        </div>
                        <v-card class="mx-auto cardService">
                            <v-img
                                height="200px"
                                :src=card.src
                                cover
                            ></v-img>

                            <v-card-title>
                                {{ card.title }}
                            </v-card-title>

                            <v-card-subtitle>
                                {{ card.subtitle }}
                            </v-card-subtitle>
                            <v-card-text>
                                {{ card.text }}

                                <v-divider class="divider"></v-divider>

                                <div class="locationContainer">
                                    <v-icon class="serviceIcons">mdi-pin</v-icon> {{ card.location }}
                                </div>

                                <div class="locationContainer">
                                    <v-icon class="serviceIcons">mdi-calendar</v-icon> {{ formatDate(card.startDate) }} au {{ formatDate(card.endDate) }}
                                </div>

                                <div class="locationContainer">
                                    <v-icon class="serviceIcons">mdi-book-education-outline</v-icon> Séance : {{ card.priceMethod }}
                                </div>

                                <div class="locationContainer">
                                    <v-icon class="serviceIcons">mdi-camera-front-variant</v-icon> Visio possible : {{ card.visioAccepted ? 'Oui' : 'Non'}}
                                </div>
                            </v-card-text>

                            <v-card-actions class="cardServiceActions">
                                <v-btn
                                    elevation="3"
                                    rounded="pill"
                                    variant="elevated"
                                    class="mt-2 seeServiceBtn"
                                    target='_blank'
                                    :href="card.actionLink"
                                >
                                    En savoir plus
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </div>
                </v-col>
            </v-row>

            <v-btn variant="elevated" rounded="pill" elevation="5" class="my-7 contactButton" href="mailto:arnaud.cossu@gmail.com?subject=Renseignements Cours Particuliers">
                <span>Me contacter</span>
                <v-icon class="ml-2">mdi-send</v-icon>
            </v-btn>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "ServiceComp",
    components: {
    },

    props: {
        data: {
            type: Array, 
            required: true
        }
    },

    data () {
        return {
        }
    },

    methods: {
        formatDate(timestamp) {
            const date = new Date(timestamp.seconds * 1000); 
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear().toString().slice(-2);
            return `${day}-${month}-${year}`;
        }
    }
}
</script>

<style scoped>

.serviceIcons{
    margin-right: 0.3em;
}

.divider{
    margin-top: 0.8em;
    margin-bottom: 0.8em;
}

.cardServiceActions{
    display: flex;
    justify-content: flex-end;
}

.locationContainer{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0.5em;
}

.seeServiceBtn{
    background: rgba(255, 255, 255, 0.02);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.iconImage{
    max-width: 100%;
    max-height: 100%;
}

.priceTagContainer{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
}

.priceTagDiv{
    background-color: rgb(201, 117, 7);
    opacity: 0.9;
    border-radius: 0.8em;
    padding-left: 0.3em;
    padding-right: 0.3em;
    padding-top: 0.7em;
    padding-bottom: 0.7em;
    width: 30%;
    transform: translateY(+50%);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 1em;
}

.contactButton{
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.serviceCol{
    display: flex;
    justify-content: center;
    align-items: center;
}

.cardService {
    border-radius: 1.5em;
    width: 95%;
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.cardServiceContent {
    background-color: transparent;
}

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
    background: transparent;
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
    display: flex;
    flex-direction: column;
    align-items: center;
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