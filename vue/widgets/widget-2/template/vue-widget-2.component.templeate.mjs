import { style1, style2, style3, style4 } from "../styles/vue-widget-2.component.styles.mjs";

const template1 = `
<div style="border: 1px solid blue; padding: .5rem;">
	<h2 style="${style1 + style2}">{{ title }}</h2>

	<ul style="${style3}">
		<li v-for="pokemon in pokemons" style="${style4}">{{ pokemon }}</li>
	</ul>
	
	<button
		style="margin-top: .5rem;
		padding: .5rem;
		cursor: pointer;"
		@click="shiftPokemons">
			Shuffle Pokemons!
	</button>

	<button
		style="margin-left: .5rem;
		padding: .5rem;
		cursor: pointer;"
		@click="gimmeDate(new Date())">
			Alert this moment!
	</button>

	<button
		style="margin-left: .5rem;
		padding: .5rem;
		cursor: pointer;"
		@click="randomNum()">
			Random "1" shows
	</button>

	<small
		style="margin-left: .5rem;"
		v-if="random>0">
			Random is {{ random }}
	</small>
</div>
`;

export { template1 };
