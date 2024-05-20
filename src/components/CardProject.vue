<template>
    <div class="projectCardStruct" @click="handleCardClick">
        <div class="product-card"
            :style="{ background: `linear-gradient(${color1}, ${color2})` }">
            <!-- <div class="cardHeader" style="width: 100%;">    
                <div class="cardLabel" v-if="isNew" >
                    <div class="newIcon">
                        <v-icon icon="mdi-star-shooting"></v-icon>
                    </div>
                    <div>
                        <p class="newtag">New !</p>
                    </div>
                </div>
            </div> -->
            <div class="card-content">
                <div class="titleContainer">
                    <span class="product-category">{{ category }}</span>
                    <span class="product-title">{{ title }}</span>
                    <span class="product-price">{{ body }}</span>
                </div>
                <img class="product-image" :src="src" alt="Product Image">
                <div class="chips">
                    <v-chip-group
                        active-class="white--text"
                        column
                    >
                        <v-chip v-for="language in languages" :key="language" class="chipElement">
                            <v-avatar class="codeIcon" rounded="0"><img class="iconImage" :src="language.icon"></v-avatar>
                            {{ language.name }}
                        </v-chip>
                    </v-chip-group>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    export default {
        name: "CardProject",

        props: ['title', 'body', 'src', 'languages', 'link', 'isNew', 'color1', 'color2', 'category'],
    
        data(){
            return {
                selection: null,
            }
        },

        methods: {
            handleCardClick() {
            window.open(this.link, '_blank');
            }
        }
    }
  </script>

  <style scoped>

    .titleContainer{
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    .chips{
        padding: 0px 20px 20px 20px;
    }

    .product-card {
        border-radius: 20px;
        color: #fff;
        display: flex;
        width: 85%;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card-content {
        text-align: center;
    }

    .product-category {
        font-size: 16px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        margin-bottom: 10px;
        text-align: start;
    }

    .product-title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: start;
    }

    .product-price {
        font-size: 18px;
        margin-bottom: 20px;
        text-align: start;
    }

    .product-image {
        max-width: 100%;
        max-height: 300px;
        border-radius: 15px;
    }

    .cardLabel{
        transform: translateY(1em) translateX(-1em); 
        padding: 0.5em;
        position: absolute; 
        z-index: 60;
        background-color: rgb(201, 117, 7);
        display: flex;
        flex-direction: row;
        width: 25%;
        border-radius: 0.7em;
        align-items: center;
        justify-content: center;
        opacity: 0.9;
    }

    .cardHeader{
        display: flex;
        position: relative;
        justify-content: flex-end;
    }

    .newtag{
        font-size: 1em;
        font-family: 'Public Sans', sans-serif;
        font-weight: 700;
        color: white;
    }

    .newIcon{
        margin-right: 0.5em;
    }

    .projectCardStruct{
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .iconImage{
        max-width: 100%;
        max-height: 100%;
    }

    .codeIcon{
        width: 1.5em;
        height: 1.5em;
        margin-right: 0.5em;
    }

    @media screen and (max-width: 600px) {
        .product-card {
            width: 95%;
        }

        .product-category {
            font-size: 12px;
        }

        .product-title {
            font-size: 22px;
        }

        .product-price {
            font-size: 16px;
        }
    }
    
  </style>  