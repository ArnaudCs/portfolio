<template>
  <v-navigation-drawer color="primary" v-model="drawer" temporary class="drawer" style="width: 100%; opacity: 0.95; padding-top: 15vh;">
    <v-list class="drawer" nav v-for="(menu, index) in menus" :key="index">
      <v-list-item @click="drawer = null" :href=menu.link>
        <v-list-item-title class="mobileLinks" @click="drawer = null">{{menu.title}}</v-list-item-title>
      </v-list-item>
    </v-list>
    <div class="closeBtn d-flex align-center justify-center">
      <v-btn variant="text" :ripple="false" @click="drawer = false"><v-icon size="x-large" icon="mdi-close-outline"></v-icon></v-btn>
    </div>
  </v-navigation-drawer>
  <v-app-bar
    app
    elevation="0"
    color="primary"
    elevate-on-scroll
    class="appBar">
  
    <v-toolbar-title v-if="windowWidth> 350" class="logo"><a href="#home" class="colorLogo">Arnaud Cossu</a></v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-if="windowWidth > 945">
      <v-list class="d-flex align-center my-list" style="background-color: secondary;">
        <v-list-item link v-for="(menu, index) in menus" :key="index" :href=menu.link>
          <v-list-item-title class="menus">{{menu.title}}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-switch v-model="ex11"
              true-icon="mdi-white-balance-sunny"
              false-icon="mdi-weather-night"
              value="secondary"
              hide-details
              class="ml-2"
              inset
              @click="toggleTheme">
              <v-icon>mdi-magnify</v-icon>
          </v-switch> 
        </v-list-item>
      </v-list>
    </template>
    <div id="container" v-if="windowWidth <= 945" style="display: flex; justify-content: flex-end;">
      <v-switch
        true-icon="mdi-white-balance-sunny"
        false-icon="mdi-weather-night"
        value="secondary"
        hide-details
        inset
        @click="toggleTheme">
      </v-switch>
    </div>
    <v-menu v-if="windowWidth <= 960" right>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-bind="on" @click.stop="drawer = !drawer">
          <v-icon color="hamburger">mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link v-for="(menu, index) in menus" :key="index" :href=menu.link>
          <v-list-item-title>{{menu.title}}</v-list-item-title>
        </v-list-item> 
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
  
<script>
  import { useTheme } from 'vuetify'
  export default {
    setup () {
      const theme = useTheme()

      return {
        theme,
        toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
      }
    },
    data() {
      return { 
        drawer: null,
        windowWidth: 0,
        ex11: 'enable',
        menus: [
          {
            title: 'Accueil',
            link: '#home',
            icon: 'mdi-home',
          },
          {
            title: 'Projets',
            link: '#projects',
            icon: 'mdi-folder',
          },
          {
            title: 'Expériences',
            link: '#experiences',
            icon: 'mdi-briefcase',
          },
          {
            title: 'Documents',
            link: '#docs',
            icon: 'mdi-file'
          },
          {
            title: 'Contact',
            link: '#contact',
            icon: 'mdi-email'
          }
        ]
      }
    },
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

<style scoped>
@import url('https://fonts.cdnfonts.com/css/oswald-4');
@import url('https://fonts.cdnfonts.com/css/gotham-rounded');
.mobileLinks{
  font-size: 1.5rem;
  line-height: 50px;
  font-family: 'Gotham Rounded', sans-serif;
}

.appBar{
  display: block;
  position: relative;
}

.closeBtn{
  margin-top: 6vh;
  scale: 1.7;
}

.logo{
  margin-left: 2vw;
  font-family: 'Gotham Rounded', sans-serif;
}

.my-list {
  background-color: var(--v-card-background); /* utilise la variable de thème pour la couleur de fond */
  color: var(--v-text-primary-on-background); /* utilise la variable de thème pour la couleur du texte */
}

.colorLogo{
  text-decoration: none;
  color: var(--v-text-primary-on-background); /* utilise la variable de thème pour la couleur du texte */
}

@media only screen and (max-device-width : 450px) {
  .logo{
    font-size: 1em;
    font-weight: 700;
    margin-left: 4vw;
  }
}

@media only screen and (min-width: 1750px) {
  .logo{
    font-size: 1.2vw;
    font-weight: 500;
    margin-left: 2vw;
  }
  .menus{
    font-size: 1.1vw;
  }
}

.drawer{
  display: flex;
  justify-content: center;
  text-align: center;
  backdrop-filter: blur(10px);
}
</style>  