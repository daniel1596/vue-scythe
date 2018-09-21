import { Component, Prop, Vue } from "vue-property-decorator";

class Url {
	constructor(public title: string, public href: string) {}
}

@Component
export default class HelloWorld extends Vue {
	urls: Url[] = [
		new Url("Babel", "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"),
		new Url("TypeScript", "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"),
		new Url("ESLint", "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint")
	];

	counter: number = 0;
	counterMessage: string = "Counter: 0";
	
	increment() {
		this.counter += 1;
		this.counterMessage = "Counter: " + this.counter;
	}

	// This works... but what about through an API? Might need a service for that.
}