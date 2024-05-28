<template>
  <v-app class="app">
    <v-main>
      <LoadingElement v-if="isLoading"/>
      <HeaderComp />
      <BioComp class="intro" :files="fichiers"/>
      <ProjectComp :data="projects" />
      <!-- <ServiceComp :data="services"/> -->
      <TimelineExpComp :data="exps" />
      <DocumentCompVue/>
    </v-main>
    <FooterComp />
  </v-app>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import ProjectComp from './components/ProjectComp.vue';
import FooterComp from './components/FooterComp.vue';
import DocumentCompVue from './components/DocumentComp.vue';
import TimelineExpComp from './components/TimelineExpComp.vue';
import BioComp from './components/BioComp.vue';
/* import ServiceComp from './components/ServiceComp.vue';
 */import LoadingElement from './components/LoadingElement.vue';
//import AboutComp from './components/AboutComp.vue';
import { getFirestore, collection, query, getDocs, where } from "firebase/firestore";


export default {
  name: 'App',
  components: {
    HeaderComp,
    ProjectComp,
    FooterComp,
    DocumentCompVue,
/*     ServiceComp,
 */    TimelineExpComp,
    BioComp,
    LoadingElement
  },
  data() {
    return {
      isLoading: true,
      projects: [],
      exps: [],
      services: [],
      fichiers: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const db = getFirestore();
        const projectsRef = collection(db, "Projects");
        const expsRef = collection(db, "Experiences");
        const serviceRef = collection(db, "Services");
        const fichiersRefs = collection(db, "Fichiers");
        const queryExpSnapshot = await getDocs(query(expsRef));
        const querySnapshot = await getDocs(query(projectsRef));
        const queryServiceSnapshot = await getDocs(query(serviceRef));
        const queryFichiersSnapshot = await getDocs(query(fichiersRefs));

        // Récupérez les données des projets
        querySnapshot.forEach(async (doc) => {
          const projectData = doc.data();
          const projectLanguages = [];

          // Assurez-vous que projectData.languages contient les noms des documents dans la collection "Languages"
          for (const languageName of projectData.languages) {
            const languageQuery = query(collection(db, "Languages"), where("id", "==", languageName));
            const languageQuerySnapshot = await getDocs(languageQuery);

            if (!languageQuerySnapshot.empty) {
              const languageDoc = languageQuerySnapshot.docs[0];
              const languageData = languageDoc.data();
              projectLanguages.push(languageData);
            }
          }

          // Ajoutez les langues récupérées au projet
          projectData.languages = projectLanguages;
          this.projects.push(projectData);
        });
        this.projects.sort((a, b) => b.position - a.position);

        //récupération des expériences
        queryExpSnapshot.forEach(async (doc) => {
          const expData = doc.data();
          this.exps.push(expData);
        });

        //récupération des services
        queryServiceSnapshot.forEach(async (doc) => {
          const serviceData = doc.data();
          this.services.push(serviceData);
        });

        //récupération des fichiers
        queryFichiersSnapshot.forEach(async (doc) => {
          const projectFiles = doc.data();
          this.fichiers.push(projectFiles);
        });

        this.exps.sort((a, b) => b.position - a.position);

        this.isLoading = false;
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
      }
    },
  }
};
</script>

<style>

.app{
  background: rgb(102, 5, 121);
  background: linear-gradient(to top left, rgb(125, 0, 96), rgba(0, 0, 0, 0), rgb(24, 0, 75)), linear-gradient(to top right, rgb(121, 57, 0), rgba(255, 153, 150, 0), rgb(76, 0, 76)) rgb(76, 0, 86);
  position: relative;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
}
</style>