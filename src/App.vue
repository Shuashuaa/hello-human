<template>
	<div class="App">
		<div class="header">  
			<h1 style="font-size: 20px;">hello there, Human!</h1>
    	</div>
		
		
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import HomeComp from './components/HomeComp.vue';

export default defineComponent({
	name: 'App',
	components: { HomeComp },

	data(){
		return {
			name: 'Josh',
			age: 18 as string | number
		}
	},
	methods: {
		changeName(name: string){
			this.name = name;
			return name;
		},
		changeAge(age: string | number){
			this.age = age;
			return age;
		}
	},
});
</script>

<style>
	.app{
		display: flex;
		flex-direction: column;
		height: 100vh;
		margin: 0;  /* Remove default margin */
  		padding: 0;  /* Remove default padding */
	}
	.header{
		height: 5vh;
		background-color: beige; 
		padding: 1rem;
		position: fixed;
		top: 0;
		width: 100%;
		display: flex;
		align-items: center; 
	}
</style>