import { createApp } from "vue";

import App from "./App.vue";
import animerouter from "./animerouter";
import "/assets/main.scss";

createApp(App).use(animerouter).mount("#app");
