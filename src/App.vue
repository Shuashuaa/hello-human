<template>
	<div class="App">
		<div class="header">  
			<h1 style="font-size: 20px;">hello there, Human!</h1>
    	</div>
		
		<!-- <button @click="changeName('juswa'), changeAge('25')"></button> -->
		{{ name }} - {{ age }}
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import HomeComp from './components/HomeComp.vue';
import type Job from './types/Job';

export default defineComponent({
	name: 'App',
	components: { HomeComp },

	setup() {

		/*
			reactive 1
		*/
		const state = reactive({
			name: 'Link',
			age: 25 as string | number //Type Assertion
		})

		state.name = ''
		state.age = 0
		return { 
			...toRefs(state)
		}

		/*
			Refs 2
		*/
		// const name = ref('Link');
		// const age = ref<number | string>(25); //Generic arguments

		// return { name, age }
	},

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