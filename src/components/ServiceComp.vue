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
                    v-for="(card, index) in cards"
                    :key="index"
                    cols="12" sm="12" md="4"
                    class="mb-4"
                >
                    <v-card class="mx-auto cardService">
                        <v-img
                            height="200px"
                            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            cover
                        ></v-img>

                        <v-card-title>
                            Top western road trips
                        </v-card-title>

                        <v-card-subtitle>
                            1,000 miles of wonder
                        </v-card-subtitle>
                        <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-btn variant="elevated" rounded="pill" elevation="5" class="my-7 contactButton">
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

    data () {
        return {
                model: 'tab-2',
                showDialog: false,
                dialog: false,
                tab: null,
                cards: [
                    { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
                    { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
                    { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                ],
            }
        },
}
</script>

<style scoped>

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
    border-radius: 2em;
    width: 95%;
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.cardServiceContent {
    background-color: transparent;
}

.cardServiceImage{
    max-width: 15%;
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