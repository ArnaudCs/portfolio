<template>
  <v-navigation-drawer v-model="drawer" temporary class="drawer" style="opacity: 0.9; padding-top: 5vh; padding-left: 2vh;">
    <v-list nav v-for="(menu, index) in menus" :key="index">
      <v-list-item @click="drawer = null" :prepend-icon="menu.icon" :href=menu.link>
        <v-list-item-title class="mobileLinks" @click="drawer = null">{{menu.title}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar
    app 
    dark
    elevation="0"
    elevate-on-scroll>
  
    <v-toolbar-title v-if="windowWidth> 350" class="logo">Arnaud Cossu</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-if="windowWidth > 945">
      <v-list class="d-flex align-center">
        <v-list-item link v-for="(menu, index) in menus" :key="index" :href=menu.link>
          <v-list-item-title class="menus">{{menu.title}}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-switch v-model="ex11"
              false-icon="mdi-white-balance-sunny"
              true-icon="mdi-weather-night"
              value="grey"
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
        false-icon="mdi-white-balance-sunny"
        true-icon="mdi-weather-night"
        value="grey"
        hide-details
        inset
        @click="toggleTheme">
      </v-switch>
    </div>
    <v-menu v-if="windowWidth <= 960" right>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-bind="on" @click.stop="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
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
            link: '#documents',
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
.mobileLinks{
  font-size: 1.2rem;
}

.logo{
  margin-left: 5vw;
}

@media only screen and (max-device-width : 450px) {
  .logo{
    font-size: 1.1em;
    font-weight: 700;
    margin-left: 5vw;
  }
}

@media only screen and (min-width: 1750px) {
  .logo{
    font-size: 1.8vw;
    font-weight: 700;
    margin-left: 5vw;
  }
  .menus{
    font-size: 1.1vw;
  }
}
</style>  