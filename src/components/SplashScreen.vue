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

//export default class SplashScreen extends Vue {
	gameName: string; // do NOT use the Prop() decorator here - and keep this in maybe, for now, just as
	@Prop() gameBoardId: string; // this NEEDS to be a prop because it's getting passed from the parent

	created() { 
		// This cannot be in "mounted()", maybe because the template compiles between created() 
		// and mounted()? Or because it is being called by Scythe, the master component? Weird.
		this.gameName = "Scythe";
	}

	clearSplash() {
		document.getElementById("splashContainer").classList.toggle("d-none");
    	document.getElementById(this.gameBoardId).classList.toggle("d-none");
  	}
}
</script>
