<template>
	<div>
		<h3>{{ gameName }}</h3>
		<button @click="clearSplash()">Play</button>
	</div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component()
export default class SplashScreen extends Vue {
	gameName: string = "Scythe"; // do NOT use the Prop() decorator here
	@Prop() gameBoardId: string; // this NEEDS to be a prop because it's getting passed from the parent

	clearSplash() {
		document.getElementById("splashContainer").classList.toggle("d-none");
    	document.getElementById(this.gameBoardId).classList.toggle("d-none");
  	}
}

</script>
