<template>
  <v-app class="app">
    <v-main>
      <LoadingElement v-if="isLoading"/>
      <HeaderComp />
      <BioComp class="intro"/>
      <ProjectComp />
      <TimelineExpComp />
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
import LoadingElement from './components/LoadingElement.vue';
//import AboutComp from './components/AboutComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    ProjectComp,
    FooterComp,
    DocumentCompVue,
    TimelineExpComp,
    BioComp,
    LoadingElement
  },
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
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