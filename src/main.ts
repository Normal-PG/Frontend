import { createApp } from "vue";
import "./style.css";
import Antd from "ant-design-vue";
import App from "./App.vue";
import { router } from "./router/index";
import "ant-design-vue/dist/antd.css";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "./scripts/apolloClient";

const app = createApp(App);
app.provide(DefaultApolloClient, apolloClient);
app.use(Antd);
app.use(router);
app.mount("#app");
