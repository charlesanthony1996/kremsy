<template>
<v-layout>

    <ToolBar></ToolBar>
    <SideBar></SideBar>

        <!-- <TopBar></TopBar> -->

        <!-- <ToolBar></ToolBar> -->

        <v-main>
        <v-container fluid>
            <RouterView></RouterView>
        </v-container>

    </v-main>

</v-layout>
</template>


<script setup lang="ts">
import SideBar from './SideBar.vue';
import ToolBar from './ToolBar.vue';
import TopBar from './TopBar2.vue';

</script>

<style scoped>

</style>