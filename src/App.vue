<template>
  <v-app>
    <v-main>
      <HeaderComp/>
      <BioComp class="intro"/>
      <ProjectComp />
      <CarousselComponent />
      <DocumentCompVue />
      <TimelineExpComp />
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
import CarousselComponent from './components/CarousselComponent.vue';
//import AboutComp from './components/AboutComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    ProjectComp,
    FooterComp,
    CarousselComponent,
    //AboutComp,
    DocumentCompVue,
    TimelineExpComp,
    BioComp,
  },
  data() {
    return {
      
    };
  },
  methods: {
    scrollToTimeline() {
      const timeline = this.$refs.timeline.$el;
      window.scrollTo({
        top: timeline.offsetTop,
        behavior: "smooth"
      });
    },
  }
};
</script>

<style>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  /* Ajoutez ici les autres styles CSS pour HeaderComp */
}

html, body{
  scroll-behavior: smooth;
}
</style>