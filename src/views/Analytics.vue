<template>
    <v-container fluid>

        <v-row>
            <v-col>
                <h1 class="text-h4 font-weight-bold">Analytics</h1>
            </v-col>
        </v-row>


         <v-row>
            <v-col cols="12" md="3">
                <v-card>
                    <v-card-title>Model Accuracy</v-card-title>
                    <div class="text-h5">{{ metrics ? metrics.accuracy.toFixed(3) : 'Loading...' }}</div>
                    <!-- <div class="text-green">+12%</div> -->
                     <div :class="change !== null && change == 0 ? 'text-green' : 'text-red'">
                        {{ change !== null ? `${change >= 0 ? '+' : ''}${change.toFixed(2)}%` : '...' }}
                     </div>
                </v-card>
            </v-col>

            <v-col cols="12" md="3">
                <v-card>
                    <v-card-title>Page views</v-card-title>
                    <div class="text-h5">24.5k</div>
                    <div class="text-green">+12%</div>
                </v-card>
            </v-col>

            <v-col cols="12" md="3">
                <v-card>
                    <v-card-title>Page views</v-card-title>
                    <div class="text-h5">24.5k</div>
                    <div class="text-green">+12%</div>
                </v-card>
            </v-col>

            <v-col cols="12" md="3">
                <v-card>
                    <v-card-title>Page views</v-card-title>
                    <div class="text-h5">24.5k</div>
                    <div class="text-green">+12%</div>
                </v-card>
            </v-col>
         </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const metrics = ref<any>(null)
const change = ref<number | null>()



const SUPABASE_URL = "https://tmhwaeusylkfxplqyzxf.supabase.co"
const SUPABASE_ANON_KEY = "sb_publishable_SjEXm8SksDhy8CurunJO-w_oej1v8qj"

onMounted(async () => {
    try {
        const res = await fetch(
        `${SUPABASE_URL}/rest/v1/runs?select=*&order=created_at.desc&limit=2`,
        {
            headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`
            }
        }
        )

        if (!res.ok) {
        const text = await res.text()
        console.error("Supabase error:", text)
        throw new Error("Fetch failed")
        }

        const data = await res.json()

        metrics.value = data[0]

        if (data.length > 1) {
            const latest = data[0].accuracy
            const previous = data[1].accuracy

            change.value = ((latest - previous) / previous) * 100
        }

    } catch (err) {
        console.error(err)
    }
    })
</script>

<style scoped>

</style>