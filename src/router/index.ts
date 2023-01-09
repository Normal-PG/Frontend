import {
	createRouter,
	RouteRecordRaw,
	Router,
	createWebHistory,
} from "vue-router";
const routes: Array<RouteRecordRaw> = [
	// Login Pages
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/Home.vue"),
	},
];
export const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});
