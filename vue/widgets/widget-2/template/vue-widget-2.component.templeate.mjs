import { style1, style2, style3, style4 } from "../styles/vue-widget-2.component.styles.mjs";

const template1 = `
<div style="border: 1px solid blue; padding: .5rem;">
	<h2 style="${style1 + style2}">{{ title }}</h2>

	<ul style="${style3}">
		<li v-for="pokemon in pokemons" style="${style4}">{{ pokemon }}</li>
	</ul>
</div>
`;

export { template1 };
