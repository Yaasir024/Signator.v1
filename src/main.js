import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./assets/tailwinds.css";
import prismic from "./services/prismic";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(prismic);
// app.use(axios);

app.mount("#app");
