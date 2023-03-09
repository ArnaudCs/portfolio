<template>
  <v-container id="timeline" class="pa-10">
    
  </v-container>
</template>

<script>
    export default {
    data: () => ({
        tab: null,
        exps: [
        {
            entreprise : 'VOGO',
            color: 'deep-purple',
            description: 'Réalisation de plusieurs stage, Mavis avec la reconstitution en 3D d\'un musée, comprenant des batiments et un environnement complet. Réalisation d\'un deuxième stage avec un analyseur de mails en Python', 
            title : 'Stagiaire Développeur Web',
            logoSrc : 'https://i.ibb.co/CQqJBch/logoVogo.png',
            size : "50"
        },
        {
            description: 'Réalisation de plusieurs stage, Mavis avec la reconstitution en 3D d\'un musée, comprenant des batiments et un environnement complet. Réalisation d\'un deuxième stage avec un analyseur de mails en Python',
            entreprise : 'Lirmm', 
            title : 'Stagiaire Développeur',
            logoSrc : 'https://i.ibb.co/2cx9xzR/logo-Lirmm.png',
            size : "50"
        },
        {
            description: 'Réalisation de plusieurs stage, Mavis avec la reconstitution en 3D d\'un musée, comprenant des batiments et un environnement complet. Réalisation d\'un deuxième stage avec un analyseur de mails en Python',
            entreprise : 'Electro Depôt', 
            title : 'Vendeur Conseiller',
            logoSrc : 'https://i.ibb.co/Cw2c6yS/logo-Apior.png',
            size : "50"
        },
        ],
    })
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
}

@media (max-width: 1000px) {
  .exp {
    margin-bottom: 25px;
  }
}
</style>
