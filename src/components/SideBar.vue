<template>
    <v-navigation-drawer v-model="drawer" permanent width="230">
        <v-list nav>
            <!-- <v-list-item title="kremsy" prepend-icon="mdi-home-city">

            </v-list-item> -->

            <v-divider></v-divider>

            <v-list-item prepend-icon="mdi-home" title="Home" to="/"></v-list-item>

            <v-list-item prepend-icon="mdi-home-search" title="Rent" to="/rent"></v-list-item>

            <v-list-item prepend-icon="mdi-store" title="Marketplace" to="/marketplace"></v-list-item>

            <v-list-item prepend-icon="mdi-message" title="Messages" to="/messages"></v-list-item>

            <template v-slot:append>
                <v-divider></v-divider>

                <v-list-item prepend-icon="mdi-cog" title="Settings" to="/settings">
                </v-list-item>
            </template>

        </v-list>

    </v-navigation-drawer>
</template>

<script lang="ts">
import { ref } from 'vue'

const drawer = ref(true)

</script>

<style scoped>

</style>