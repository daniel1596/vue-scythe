<template>
	<div class="hello">
		<h2>{{ counterMessage }}</h2>

		<!-- Had some fun messing around with properties -->
		<h4>Installed CLI Plugins</h4>
		<ul v-if="urls && urls.length">
			<li v-for="url in urls" :key="url.title" :value="url.href"> 
				<a :href="url.href" :target="url.href.includes('localhost') ? '' : '_blank'">{{ url.title }}</a>
			</li>
		</ul>

		<button @click="increment()">Increment</button>
	</div>
</template>


<script lang="ts" src="./HelloWorld.vue.ts" />

<!-- Add "scoped" keyword to limit CSS to this component only -->
<style src="./HelloWorld.vue.scss" />

