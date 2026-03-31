<template>
    <v-container fluid>

        <!-- title -->
        <v-row>
            <v-col>
                <h1 class="text-h4 font-weight-bold">Analytics</h1>
            </v-col>
        </v-row>

        <!-- metric cards -->
         <v-row>
            <v-col cols="12" md="3">
                <v-card>
                    <v-card-title>Model Accuracy</v-card-title>
                    <div class="text-h5">{{ metrics ? metrics.accuracy.toFixed(3) : 'Loading...' }}</div>
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

const pages = [
    {
        name: "/getting-started/installation",
        sessions: 12453,
        change: "+24%",
    },
    {
        name: "/getting-started/installation",
        sessions: 12453,
        change: "+24%",
    },
    {
        name: "/getting-started/installation",
        sessions: 12453,
        change: "+24%",
    }
]

import { ref, onMounted } from 'vue'

const metrics = ref<any>(null)

// onMounted(async() => {
//     const res = await fetch("https://raw.githubusercontent.com/charlesanthony1996/just-a-little-foggy/main/metrics.json")
//     metrics.value = await res.json()
// })

// onMounted(async () => {
//   try {
//     const res = await fetch("https://raw.githubusercontent.com/charlesanthony1996/just-a-little-foggy/main/metrics.json")

//     if (!res.ok) {
//       throw new Error("Failed to fetch metrics")
//     }

//     const data = await res.json()
//     console.log("METRICS:", data)

//     metrics.value = data
//   } catch (err) {
//     console.error("ERROR:", err)
//   }
// })

// onMounted(async () => {
//   try {
//     const res = await fetch(
//       "https://cdn.jsdelivr.net/gh/charlesanthony1996/just-a-little-foggy@main/metrics.json"
//     )

//     if (!res.ok) throw new Error("Fetch failed")

//     const data = await res.json()
//     metrics.value = data

//     console.log("Loaded metrics:", data)
//   } catch (err) {
//     console.error(err)
//   }
// })

// onMounted(async () => {
//   try {
//     const res = await fetch(
//       "https://tmhwaeusylkfxplqyzxf.supabase.co/rest/v1/runs?select=*&order=created_at.desc&limit=1",
//       {
//         headers: {
//           apikey: "YOUR_PUBLIC_ANON_KEY",
//           Authorization: "Bearer YOUR_PUBLIC_ANON_KEY"
//         }
//       }
//     )

//     if (!res.ok) throw new Error("Fetch failed")

//     const data = await res.json()

//     console.log("Supabase data:", data)

//     metrics.value = data[0]

//   } catch (err) {
//     console.error(err)
//   }
// })

const SUPABASE_URL = "https://tmhwaeusylkfxplqyzxf.supabase.co"
// const SUPABASE_ANON_KEY = "YOUR_ANON_PUBLIC_KEY"
const SUPABASE_ANON_KEY = "sb_publishable_SjEXm8SksDhy8CurunJO-w_oej1v8qj"

onMounted(async () => {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/runs?select=*&order=created_at.desc&limit=1`,
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

    console.log("Supabase data:", data)

    metrics.value = data[0]

  } catch (err) {
    console.error(err)
  }
})

</script>

<style scoped>

</style>