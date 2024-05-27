<template>
	<div class="App">
		<h1 style="font-size: 77px;">hello there, Human!.</h1>
		<button @click="changeName('zelda')">ChangeNAme</button>
	</div>
	
	<router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
	components: {},

	data(){
		return {
			name: 'Link',
			age: 18 as number | string
		}
	},
	methods: {
		changeName(name: string) {
			this.name = name; 
			alert(this.name)
		},
		changeAge(age: number){
			this.age = age
		}
	}
});
</script>

<style>

</style>


<!-- <template>
	<div class="App">
		<h1 style="font-size: 77px;">hello there, Human!.</h1>
	</div>
	
	<router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
	components: {}
});
</script>

<style>

</style> -->
