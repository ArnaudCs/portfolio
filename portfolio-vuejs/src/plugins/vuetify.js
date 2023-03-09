// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify} from 'vuetify'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    // Définit le thème par défaut
    defaultTheme: 'light',

    // Définit les couleurs pour chaque thème
    themes: {
      light: {
        primary: '#1976D2', // Couleur principale
        secondary: '#424242', // Couleur secondaire
        accent: '#82B1FF', // Couleur d'accentuation
        error: '#FF5252', // Couleur d'erreur
        info: '#2196F3', // Couleur d'information
        success: '#4CAF50', // Couleur de succès
        warning: '#FFC107', // Couleur d'avertissement
        // Couleurs personnalisées
        projectButton: 'deep-purple',
      },
      dark: {
        primary: '#2196F3', // Couleur principale
        secondary: '#757575', // Couleur secondaire
        accent: '#FF4081', // Couleur d'accentuation
        error: '#FF5252', // Couleur d'erreur
        info: '#2196F3', // Couleur d'information
        success: '#4CAF50', // Couleur de succès
        warning: '#FFC107', // Couleur d'avertissement
        // Couleurs personnalisées
        projectButton: '#79A2FF',
      },
    },
  },
})
