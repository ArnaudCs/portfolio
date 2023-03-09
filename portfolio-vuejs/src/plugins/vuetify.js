// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify} from 'vuetify'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        projectButton: 'deep-purple',
      },
      dark: {
        projectButton: '#79A2FF',
      },
    }
  }
})
