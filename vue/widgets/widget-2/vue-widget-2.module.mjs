import { component } from "./logic/vue-widget-2.component.logic.mjs";

Vue
	// "Vue" obj. from CDN
	.createApp(component)
	// HTML injection
	.mount("#app-widget-2");
