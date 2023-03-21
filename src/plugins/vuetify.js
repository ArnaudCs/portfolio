// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify} from 'vuetify'


export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    // Définit le thème par défaut
    defaultTheme: 'dark',

    // Définit les couleurs pour chaque thème
    themes: {
      light: {
        colors: {
          secondary: '#ffffff',
          hamburger: '#000000',
          primary: '#ffffff',
          buttonDownload: '#1E3851',
        }
      },
      dark: {
        colors: {
          primary: '#0D2438',
          button: '#0D2438',
          secondary: '#1E3851',
          background: '#0D2438',
          hamburger: '#ffffff',
          buttonDownload: '#1E3851',
        }
      },
    },
  },
})
