<template>
    <v-app-bar flat>
        <v-app-bar-nav-icon @click="$emit('toggleDrawer')"></v-app-bar-nav-icon>

        <v-toolbar-title>Prefog ML</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu>
            <template #activator="{ props}">
                <v-btn icon v-bind="props">
                    <v-avatar>
                        <v-img src="https://i.pravatar.cc/40"></v-img>
                    </v-avatar>
                </v-btn>
            </template>

            <v-list>
                <v-list-item title="Profile" prepend-icon="mdi-account" to="/profile"></v-list-item>
                <v-list-item title="Settings" prepend-icon="mdi-cog" to="/settings"></v-list-item>
                <v-divider></v-divider>
                <v-list-item title="Logout" prepend-icon="mdi-logout" to="/logout"></v-list-item>

            </v-list>

        </v-menu>

    </v-app-bar>

</template>


<script setup lang="ts">
import { ref} from 'vue'
import { defineEmits } from 'vue';

// const drawer = ref(true)
defineEmits(['toggleDrawer'])

</script>

<style scoped>

</style>