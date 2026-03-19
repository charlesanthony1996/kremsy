import { ref, onMounted } from 'vue'

const metrics = ref(null)

onMounted(async () => {
    const res = await fetch("/api/fog-metrics")
    metrics.value = await res.json()
})
