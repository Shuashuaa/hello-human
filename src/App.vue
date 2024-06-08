<template>
	<div class="App">
		<div class="header">  
			<h1 style="font-size: 24px;">hello there, Human!</h1>
			<div style="display: flex;">
				<svg style="margin-right: 20px;" xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
				</svg>
			</div>
    	</div>
		
		<div class="components">
			<button @click="handleClick('title')">Order by title</button>
			<button @click="handleClick('salary')">Order by salary</button>
			<button @click="handleClick('location')">Order by location</button>
			<router-view 
				:jobs="jobs" 
				:order="order"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import HomeComp from './components/HomeComp.vue';
import type Job from './types/Job';
import type OrderTerm from './types/OrderTerm';

export default defineComponent({
	name: 'App',
	components: { HomeComp },

	setup() {
		const jobs = ref<Job[]>([
			{ title: 'Farm Worker', location: 'Ranch', salary: 10000, id: '1'},
			{ title: 'Flavor Scientist', location: 'US based company', salary: 60000, id: '2'},
			{ title: 'Coach', location: 'Somewhere near', salary: 15000, id: '3'},
			{ title: 'Wood Cutter', location: 'Somewhere far', salary: 50000, id: '4'},
			{ title: 'Grass Cleaner', location: 'House', salary: 80000, id: '5'},
			{ title: 'Full-Stack Staff', location: 'Cavite', salary: 10000, id: '6'},
			{ title: 'Aircon Engineer', location: 'Ilocos', salary: 30000, id: '7'},
			{ title: 'Diswasher', location: 'Manila', salary: 15000, id: '8'},
			{ title: 'Fire Fighter', location: 'Tarlac', salary: 70000, id: '9'},
			{ title: 'Senior Staff', location: 'General Trias', salary: 80000, id: '10'},
		])

		const order = ref<OrderTerm>('title') //default value for sort

		const handleClick = (term: OrderTerm) => {
			// console.log(term)
			order.value = term
		}

		return { handleClick, jobs, order }
	},
});
</script>

<style>
	.App {
		display: flex; 
		flex-direction: column;
		height: 100vh;
		width: 100vw;
		overflow: auto;
	}
	
	.header {
		display: flex;
		justify-content: space-between;
		flex: 0 0 5%;
		background-color: #dfddc8; 
		padding: 10px 50px;
		text-align: left; 
		border-bottom: 2px solid;
		position: sticky;
		top: 0;
	}
	
	.components {
		flex: 1; 
		background-color: #dfddc8;
		padding: 20px;
	}

	button{
		border: solid 1px;
		border-radius: 8px;
		margin: 5px;
		padding: 5px;
		font-family:'Courier New', Courier, monospace;
		font-weight: bold;
		cursor: pointer;
	}
</style>

