import { template1 } from "../template/vue-widget-2.component.templeate.mjs";

export const component = {
	template: template1,
	data() {
		return {
			title: "Vue Widget 2",
			pokemons: ["Pikachu", "Wartortle", "Handlerpluff", "Onixindo"],
		};
	},
};
