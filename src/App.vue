<template>
	<div class="App">
		<div class="header">  
			<h1 style="font-size: 20px;">hello there, Human!</h1>
    	</div>
	
		<div v-for="job in jobs" :key="job.id">
			<p>{{ job.title }} - {{ job.location }} - {{ job.salary }}</p>
		</div>
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

		const jobs = ref<Job[]>([
			{ title: 'Farm Worker', location: 'lon-lon ranch', salary: 10000, id: '1'},
			{ title: 'Flavor Scientist', location: 'US based company', salary: 60000, id: '2'},
			{ title: 'Coach', location: 'Somewhere near', salary: 15000, id: '3'},
			{ title: 'Wood Cutter', location: 'Somewhere far', salary: 50000, id: '4'},
			{ title: 'Grass Cleaner', location: 'house', salary: 80000, id: '5'},
			{ title: 'Grass Cleaner', location: 'house', salary: 80000, id: '5'},
			{ title: 'Grass Cleaner', location: 'house', salary: 80000, id: '5'},
			{ title: 'Grass Cleaner', location: 'house', salary: 80000, id: '5'},
			{ title: 'Grass Cleaner', location: 'house', salary: 80000, id: '5'},
			{ title: 'Grass Cleaner', location: 'house', salary: 80000, id: '5'},
			{ title: 'Grass Cleaner', location: 'house', salary: 80000, id: '5'},
			{ title: 'Grass Cleaner', location: 'house', salary: 80000, id: '5'}
		])

		return { jobs }
	},
});
</script>