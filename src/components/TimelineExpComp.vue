<template id="experiences">
  <v-container id="experiences" class="pa-7 pt-15">
    <div class="expTitle d-flex align-center justify-center">
        <h1>Expériences</h1>
    </div>
    <v-timeline truncate-line="both" v-if="windowWidth > 960">
      <v-timeline-item size="large" v-for="exp in exps" :key="exp">
        <template v-slot:opposite>
          {{ exp.date }}
        </template>
        <template v-slot:icon>
          <v-avatar :image="exp.logoSrc" :size=exp.size ></v-avatar>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            {{ exp.entreprise }}
          </v-card-title>
          <v-card-subtitle>
            {{ exp.title }}
          </v-card-subtitle>
          <v-card-text>
            {{ exp.description }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-timeline truncate-line="both" v-if="windowWidth <= 960" side="end">
      <v-timeline-item size="large" v-for="exp in exps" :key="exp">
        <template v-slot:icon>
          <v-avatar :image="exp.logoSrc" :size=exp.size ></v-avatar>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            {{ exp.entreprise }}
          </v-card-title>
          <v-card-subtitle>
            {{ exp.title }}
          </v-card-subtitle>
          <v-card-text>
            {{ exp.description }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
    export default {
    data: () => ({
        tab: null,
        windowWidth: 0,
        exps: [
        {
            entreprise : 'VOGO',
            color: 'deep-purple',
            date: '2022',
            description: 'Stagiaire Web dans l\'entreprise VOGO (équipe de développement). Réalisations de modules pour la partie Web Front et Back. Utilisation de différents langages comme HTML, CSS, JavaScript, SQL, VueJS', 
            title : 'Stagiaire Développeur Web',
            logoSrc : 'https://i.ibb.co/CQqJBch/logoVogo.png',
            size : "60"
        },
        {
            description: 'Réalisation de plusieurs stage, Mavis avec la reconstitution en 3D d\'un musée, comprenant des batiments et un environnement complet. Réalisation d\'un deuxième stage avec un analyseur de mails en Python',
            entreprise : 'Lirmm', 
            date: '2020-2021',
            title : 'Stagiaire Développeur',
            logoSrc : 'https://i.ibb.co/2cx9xzR/logo-Lirmm.png',
            size : "60"
        },
        {
            description: 'Vendeur et conseiller multimédia dans les rayons Télévision, Hi-Fi, Téléphonie et Informatique. Réalisation de différents supports et affiches graphiques pour la vente.',
            entreprise : 'Electro Depôt', 
            date: '2021',
            title : 'Vendeur Conseiller',
            logoSrc : 'https://i.ibb.co/h21Zv5D/log-depot.png',
            size : "60"
        },
        {
            description: 'Vendeur conseiller mécanicien, avec formation de 3 jours sur le montage et l\'entretien des vélos. Rayons chasse et pêche et cyclisme. Apprentissage de la caisse manuelle et automatique avec système RFID.',
            entreprise : 'Décathlon', 
            date: '2019',
            title : 'Vendeur Conseiller',
            logoSrc : 'https://i.ibb.co/rxpmSYW/logo-Decat.jpg',
            size : "60"
        },
        ],
    }),
    mounted() {
      window.addEventListener('resize', this.getWindowWidth)
      this.getWindowWidth()
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.getWindowWidth)
    },
    methods: {
      getWindowWidth() {
        this.windowWidth = window.innerWidth
      }
    }
    }
</script>

<style>
.exp {
  margin-bottom: 10px;
  border-radius: 20px;
}

#timeline{
  margin-top: 12vh;
}

@media (max-width: 767px) {
  .exp {
    margin-bottom: 40px;
  }

  .expTitle{
    margin-bottom: 2vh;
  }
}

@media (max-width: 1000px) {
  .exp {
    margin-bottom: 25px;
  }
}

.expTitle{
    font-size: 1.2em;
    font-family: 'Public Sans', sans-serif;
    font-weight: 900;
    margin-top: 1vh;
    margin-bottom: 4vh;
}

</style>
