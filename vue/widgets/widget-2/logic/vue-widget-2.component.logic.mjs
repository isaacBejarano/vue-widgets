import { template1 } from "../template/vue-widget-2.component.templeate.mjs";

export const component = {
	template: template1,
	data() {
		return {
			title: "Vue Widget 2",
			pokemons: ["Pikachu", "Wartortle", "Handlerpluff", "Onixindo"],
			random: 0,
			titleShow: true,
			crosshair: [0, 0],
			anyObject: {
				app: "Vue",
				version: "3.0",
				href: "https://vuejs.org/",
			},
		};
	},
	methods: {
		shiftPokemons() {
			this.pokemons.push(this.pokemons.shift());
		},

		gimmeDate(d) {
			alert(d);
		},

		randomNum() {
			this.random = Math.round(Math.random());
		},

		toggleTitle() {
			this.titleShow = !this.titleShow;
		},

		prompTitle(e, legend) {
			this.title = prompt(legend + "\nTouched at TimeStamp " + e.timeStamp);
		},

		crosshairMe(e) {
			this.crosshair = [e.offsetX, e.offsetY];
		},
	},
	computed: {
		cCrosshair() {
			return this.crosshair[0] + "px" + " , " + this.crosshair[1] + "px";
		},
		cPokemonsOnDuty() {
			let onDuty = this.pokemons.filter(p => p.length < 9);

			for (let [k, v] of onDuty.entries()) {
				onDuty[k] = v + " on duty!";
			}

			return onDuty;
		},
	},
};
