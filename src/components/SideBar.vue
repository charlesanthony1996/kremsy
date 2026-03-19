<template>
    <v-navigation-drawer :model-value="drawer" width="230">
        <v-list nav>
            <!-- <v-list-item title="kremsy" prepend-icon="mdi-home-city">

            </v-list-item> -->

            <v-divider></v-divider>

            <v-list-item prepend-icon="mdi-home" title="Home" to="/"></v-list-item>

            <v-list-item prepend-icon="mdi-home-search" title="Rent" to="/rent"></v-list-item>

            <v-list-item prepend-icon="mdi-store" title="Marketplace" to="/marketplace"></v-list-item>

            <v-list-item prepend-icon="mdi-message" title="Messages" to="/messages"></v-list-item>

            <v-list-item prepend-icon="mdi-graph" title="Analytics" to="/analytics"></v-list-item>

            <template v-slot:append>
                <v-divider></v-divider>

                <v-list-item prepend-icon="mdi-cog" title="Settings" to="/settings">
                </v-list-item>
            </template>

        </v-list>

    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { defineProps } from 'vue';

// const drawer = ref(true)
defineProps({ drawer: Boolean })

</script>

<style scoped>

</style>