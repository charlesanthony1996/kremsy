<template>
    <v-app-bar flat>

        <v-spacer></v-spacer>

        <v-menu>
            <template #activator="props">
                <v-btn v-bind="props" icon>
                    <v-avatar size="36">
                        <v-img src="https://i.pravatar.cc/40"></v-img>
                    </v-avatar>
                </v-btn>
            </template>

            <v-list>
                <v-list-item prepend-icon="mdi-account" title="Profile"></v-list-item>
                <v-list-item prepend-icon="mdi-cog" title="Settings"></v-list-item>
                <v-list-item prepend-icon="mdi-logout" title="Logout"></v-list-item>

            </v-list>
        </v-menu>

    </v-app-bar>
</template>

<script lang="ts">


</script>

<style scoped>

</style>