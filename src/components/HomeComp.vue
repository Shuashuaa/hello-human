<template>
    <h1>Tickets</h1>
    <p>ordered by {{ order }}</p>
    <transition-group name="list" tag="div" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; ">
        <div v-for="job in sortJob" :key="job.id" style="width: 300px;">
            <div style="border: 1px solid; border-radius: 10px; margin: 10px; height: 200px; padding: 30px;">
                <h1 style="margin: 0; font-size: 24px;">
                    {{ job.title }} in {{ job.location }}
                </h1>
                <h3>{{ job.salary }} pesos</h3>
                <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            </div>
            
        </div>
    </transition-group>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type Job from '@/types/Job';
import type orderTerm from '@/types/OrderTerm';
import { computed } from 'vue'; //##

export default defineComponent({
    props: {
        jobs: {
            required: true,
            type: Array as PropType<Job[]>
        },
        order: {
            required: true,
            type: String as PropType<orderTerm>
        }
    },
    setup(props) { //##
        const sortJob = computed(() => {
            return [...props.jobs].sort((a: Job, b: Job) => {
                return a[props.order] > b[props.order] ? 1 : -1;
            })
        }) 

        return { sortJob }
    }
})
</script>

<style>
p{
    font-family: "Josefin Slab", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: italic;
}
.list-move{
    transition: all 1s;
}
</style>