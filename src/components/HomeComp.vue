<template>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center;">
        <div v-for="job in jobs" :key="job.id" style="width: 500px;">
            <div style="border: 1px solid; border-radius: 10px; margin: 10px; height: 200px; padding: 30px;">
                <h1 style="margin: 0;">
                    {{ job.title }} in {{ job.location }}
                </h1>
                <h2>{{ job.salary }} pesos</h2>
                <i>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</i>
            </div>
            
        </div>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue' //##
import type Job from '@/types/Job.ts'; //##

export default defineComponent({ //##
    props: {
        jobs: {
            required: true,
            type: Array as PropType<Job[]>
        }
    }
})
</script>