<template id="experiences">
  <v-container id="experiences" class="pa-7 mb-15">
    <div class="expTitle">
        <h1 style="text-align: center;">Expériences importantes</h1>
    </div>
    <v-timeline truncate-line="both" v-if="windowWidth > 960">
      <v-timeline-item size="large" v-for="exp in exps" :key="exp">
        <template v-slot:opposite>
          {{ exp.date }}
        </template>
        <template v-slot:icon> 
          <v-avatar class="logoEntreprise" :image="exp.logoSrc" :size=exp.size @click="goto(exp.link)"></v-avatar>
        </template>
        <v-card class="elevation-2 timelineCard">
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
          <v-avatar :image="exp.logoSrc" :size=exp.size @click="goto(exp.link)"></v-avatar>
        </template>
        <v-card class="elevation-2 timelineCard">
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
            entreprise : 'Fayat',
            color: 'deep-purple',
            date: '2023',
            description: 'Stagiaire Web dans l\'entreprise Fayat. Développement complet et autonome d\'une web application pour la gestion des livraisons et des chantiers. Utilisation de différents langages comme HTML, CSS, JavaScript, SQL, VueJS', 
            title : 'Stagiaire Développeur Web',
            logoSrc : 'https://i.ibb.co/FKHk7Q4/fayat-Logo.png',
            size : "60",
            link: 'https://www.fayat.com/'
        },
        {
            entreprise : 'Lirmm',
            color: 'deep-purple',
            date: '2023',
            description: 'Stage en équipe, réalisation d\'un solveur pour assurer informatiquement et automatiquement la répartition des étudiants dans les salles d\'examen. Utilisation de différents langages comme Python, JS, HTML, CSS', 
            title : 'Stagiaire Développeur Web',
            logoSrc : 'https://i.ibb.co/2cx9xzR/logo-Lirmm.png',
            size : "60",
            link: 'https://www.lirmm.fr/'
        },
        {
            entreprise : 'VOGO',
            color: 'deep-purple',
            date: '2022',
            description: 'Stagiaire Web dans l\'entreprise VOGO (équipe de développement). Réalisations de modules pour la partie Web Front et Back. Utilisation de différents langages comme HTML, CSS, JavaScript, SQL, VueJS', 
            title : 'Stagiaire Développeur Web',
            logoSrc : 'https://i.ibb.co/CQqJBch/logoVogo.png',
            size : "60",
            link: 'https://www.vogo-group.com/'
        },
        {
            description: 'Réalisation de plusieurs stage, Mavis avec la reconstitution en 3D d\'un musée, comprenant des batiments et un environnement complet. Réalisation d\'un deuxième stage avec un analyseur de mails en Python',
            entreprise : 'Lirmm', 
            date: '2020-2021',
            title : 'Stagiaire Développeur',
            logoSrc : 'https://i.ibb.co/2cx9xzR/logo-Lirmm.png',
            size : "60",
            link: 'https://www.lirmm.fr/'
        },
        {
            description: 'Vendeur et conseiller multimédia dans les rayons Télévision, Hi-Fi, Téléphonie et Informatique. Réalisation de différents supports et affiches graphiques pour la vente.',
            entreprise : 'Electro Depôt', 
            date: '2021',
            title : 'Vendeur Conseiller',
            logoSrc : 'https://i.ibb.co/h21Zv5D/log-depot.png',
            size : "60",
            link: 'https://www.electrodepot.fr/'
        },
        {
            description: 'Vendeur conseiller mécanicien, avec formation de 3 jours sur le montage et l\'entretien des vélos. Rayons chasse et pêche et cyclisme. Apprentissage de la caisse manuelle et automatique avec système RFID.',
            entreprise : 'Décathlon', 
            date: '2019',
            title : 'Vendeur Conseiller',
            logoSrc : 'https://i.ibb.co/rxpmSYW/logo-Decat.jpg',
            size : "60",
            link: 'https://www.decathlon.fr/'
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
      },
      goto(link){
        window.open(link, '_blank');
      }
    }
    }
</script>

<style>


#experiences{
  scroll-margin-top: 50px;
}

.timelineCard{
  border-radius: 1em;
  transition: 0.4s ease-in-out;
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.logoEntreprise{
  cursor: pointer;
  transition: transform 0.2s ease-in-out; /* Ajout de la transition */
}

.infosExp{
  opacity: 0.5;
}

.logoEntreprise:hover {
  transform: scale(1.1); /* Effet de sautillement, agrandissement de 10% */
  animation: bounce 0.8s infinite; /* Ajout de l'animation de sautillement */
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0); /* Position initiale */
  }
  50% {
    transform: translateY(-5px); /* Position pendant le saut */
  }
}

.timelineCard:hover{
  scale: 1.03;  
}

.exp {
  margin-bottom: 10px;
  border-radius: 20px;
}

#timeline{
  margin-top: 12vh;
}

#experiences{
  margin-bottom: 10vh;
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
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
