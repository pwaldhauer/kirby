import { addDecorator, addParameters } from '@storybook/vue';
import Vue from "vue";

/* Ui */
import "@/ui/css/index.scss";
import Ui from "@/ui/index.js";
Vue.use(Ui);
import "@/ui/css/utilities.scss";

/* Fake API */
import "@/api/fake/index.js";

/* Mocks */
import Api from "@/api/index.js";
import I18n from "./mocks/i18n.js";
import Model from "../src/app/plugins/models.js";
import Router from "./mocks/router.js";
import Store from "./mocks/store.js";

Vue.prototype.$t = Vue.$t = I18n;
Vue.prototype.$api = Vue.$api = Api();
Vue.use(Router);
Vue.prototype.$store = Vue.$store = Store;
Vue.prototype.$user = Vue.$user = {
  role: { name: "admin" }
};

Vue.use(Model, Store);

/** App components */
import components from "@/app/components/index.js";
Vue.use(components);

addDecorator(() => {
  return {
    template: `
      <div :dir="$direction">
        <k-icons />
        <div>
          <story />
        </div>
      </div>
    `
  };
});

import { withA11y } from '@storybook/addon-a11y';
addDecorator(withA11y);

/* Docs */
import "./theme/theme.css";

/* Custom Components for our docs */
import ApiExample from "./components/ApiExample.vue";

Vue.component("api-example", ApiExample);

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});