<template>
	<div class="hello">
		<h2>{{ titleMessage }}</h2>
		<h4>Installed CLI Plugins</h4>
		<ul>
			<li v-for="url in urls"> <a :href="url">{{ url }}</a></li>
		</ul>
	</div>
</template>


<!-- Add "scoped" keyword to limit CSS to this component only -->
<style src="./HelloWorld.vue.scss" />


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

class Url {
	constructor(title: string, href: string) {}
}

@Component
export default class HelloWorld extends Vue {
	private titleMessage: string = "vue app";
	
	urls: Url[] = []; // NOTE: this is still not working :(
	
	constructor() {
		super();
		this.urls.push(
			new Url("Babel", "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"),
			new Url("TypeScript", "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"),
			new Url("ESLint", "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint")
		);
	}

}
</script>


