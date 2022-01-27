import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/",
		name: "Home",
		component: Home,
	},
];

const router = createRouter({
	// eslint-disable-next-line no-undef
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
