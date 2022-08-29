import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#222222', 
        secondary: '#111111', 
        error: '#dc0000',
        success: '#0a942a',
        body: '#ffffff',
        metacolor: '#777777',
        headertext: '#444444',
        hoverbr: '#ff8149',
        breadcrumb: '#f5f5f5',
        btnslider: '#272727'
        // root {
            //     --color-text: #222222;
            //     --color-body-text: #777777;
            //     --color-body: #ffffff;
            //     --color-border: #e5e5e5;
            //     --color-header-text: #444444;
            //     --color-sale-text: #111111;
            //     --color-meta: #777777;
            //     --color-text-field: #777777;
            //     --color-text-hover-field: #111111;
            //     --color-text-breadcrumb: #ffffff;
            //     --color-text-hover-breadcrumb: #ff8149;
            //     --color-bg-breadcrumb: #f5f5f5;
            //     --errorRed: #dc0000;
            //     --successGreen: #0a942a;
            //     --color-btn-primary: #222222;
            //     --color-btn-primary-text: #ffffff;
            //     --color-btn-secondary: #ff8149;
            //     --color-btn-secondary-text: #ffffff;
            //     --color-product-primary: #ffffff;
            //     --color-product-primary-text: #111111;
            //     --color-product-secondary: #222222;
            //     --color-product-secondary-text: #ffffff;
      }
    },
  },
})