import { style1, style2, style3, style4 } from "../styles/vue-widget-2.component.styles.mjs";

const template1 = `
<div style="border: 1px solid blue; padding: .5rem;">
	<h2 v-show="titleShow" style="${style1 + style2}">{{ title }}</h2>

	<ul style="${style3}">
		<li v-for="pokemon in pokemons" style="${style4}">{{ pokemon }}</li>
	</ul>
	
	<button
		style="margin: .5rem;
		padding: .5rem;
		cursor: pointer;"
		@click="shiftPokemons">
			Shuffle Pokemons!
	</button>

	<button
		style="margin: .5rem;
		padding: .5rem;
		cursor: pointer;"
		@click="gimmeDate(new Date())">
			Alert this moment!
	</button>

	<button
		style="margin: .5rem;
		padding: .5rem;
		cursor: pointer;"
		@click="randomNum()">
			Random "1" shows
	</button>
	
	<small
		style="margin: .5rem;"
		v-if="random>0">
		Random is {{ random }}
	</small>

	<button
		style="margin: .5rem;
		padding: .5rem;
		cursor: pointer;"
		@click="toggleTitle()">
			Display None Title
	</button>

	<button
		style="margin: .5rem;
		padding: .5rem;
		cursor: pointer;"
		@click="prompTitle($event, 'Enter New Title')">
			Prompt Title
	</button>

	<h3>Move the mouse move</h3>
	<div
		style="position: relative; 
		margin: .5rem;
		border: 1px dashed black;
		height: 5rem;
		padding: .5rem;
		cursor: crosshair;"
		@mousemove="crosshairMe($event)">

			<div
				style="position: absolute;"
				:style="{
					top: crosshair[1]+'px',
					left: crosshair[0]+'px'
				}"				
			>
			{{ cCrosshair }}
			</div>
	</div>

	<h3>Cicling through Ojects</h3>
	
	<ul>
		<li v-for="(value, key, i) in anyObject" :key="value.id">
			{{ key }} : {{ value }}  // force indexation order: {{ i }}
		</li>
	</ul>

	<hr/>

	<h3>Data Binding</h3>
		<h4>1. HTML Attributes</h4>
		<a :href="anyObject.href" target="_blank">Link to Vue.js</a>
		
		<h4>1. Dynamic CSS Class</h4>
		<span style="display: block;">pokemon.length &lt; 8 is "fire" class</span>
		<span>pokemon.length >= 8 is "ice" class</span>
		<ul>
			<li v-for="pokemon in pokemons" :class="{ 
				fire : pokemon.length < 8,
				ice : pokemon.length >= 8
			}">
			{{ pokemon }}
			</li>
		</ul>

		<hr>

		<h3>Computed Props</h3>
		<ul>
			<li v-for="pokeduty in cPokemonsOnDuty">
				{{ pokeduty }}
			</li>
		</ul>

</div>


`;

export { template1 };
