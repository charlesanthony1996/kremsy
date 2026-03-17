<template>
    <v-app-bar flat>
        <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Kremsy</v-toolbar-title>

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
                <v-list-item title="Profile" prepend-icon="mdi-account"></v-list-item>
                <v-list-item title="Settings" prepend-icon="mdi-cog"></v-list-item>
                <v-divider></v-divider>
                <v-list-item title="Logout" prepend-icon="mdi-logout"></v-list-item>

            </v-list>

        </v-menu>

    </v-app-bar>

</template>


<script lang="ts" setup>
import { ref} from 'vue'

const drawer = ref(true)

</script>

<style scoped>

</style>