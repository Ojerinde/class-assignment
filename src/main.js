import { createApp } from "vue";
import App from "./App.vue";
import BaseButton from "@/components/UI/BaseButton";
import router from "./router";
import store from "./store";

// All styles entry point
import "@/Stylesheets/main.scss";

// Icon config component
import { FontAwesomeIcon } from "@/vue-icons";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-button", BaseButton);
app.use(store);
app.use(router);
app.mount("#app");
