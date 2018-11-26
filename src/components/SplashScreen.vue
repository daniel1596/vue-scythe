<template>
	<div>
		<h3>Scythe</h3>
		<button @click="clearSplash()">Play</button>
	</div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class SplashScreen extends Vue {

//export default class SplashScreen extends Vue {
	@Prop() gameBoardId: string; // this NEEDS to be a prop because it's getting passed from the parent - can it be initialized? probably shouldn't be...

	clearSplash() {
		const splashContainer = document.getElementById("splashContainer");
		const gameBoard = document.getElementById(this.gameBoardId);

		for (let element of [splashContainer, gameBoard]) {
			if (element != null) {
				element.classList.toggle("d-none");
			}
		}
  	}
}
</script>
