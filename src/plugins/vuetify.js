import Vue from "vue";
import Vuetify from "vuetify/lib/";

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 460,
      sm: 750,
      md: 1264,
      lg: 1904,
      xl: 2400
    }
  }
});
