<template>
  <v-app id="home">
    <HeaderComp />
    <v-main>
      <HeroComp />
      <BioComp />
      <ProjectComp />
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
import HeroComp from './components/HeroComp.vue';
import DocumentCompVue from './components/DocumentComp.vue';
import TimelineExpComp from './components/TimelineExpComp.vue';
import BioComp from './components/BioComp.vue';
//import BioImage from './components/BioImage.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    ProjectComp,
    FooterComp,
    HeroComp,
    DocumentCompVue,
    TimelineExpComp,
    BioComp,
    //BioImage,
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
html{
  scroll-behavior: smooth;
}

</style>