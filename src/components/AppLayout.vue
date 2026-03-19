<template>
<v-layout>

    <ToolBar :drawer="drawer" @toggleDrawer="drawer = !drawer"></ToolBar>
    <SideBar :drawer="drawer"></SideBar>

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

import { ref } from 'vue'

const drawer = ref(true)

</script>

<style scoped>

</style>