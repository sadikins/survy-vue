
<template>
    <div class="min-h-full">
 

        <Header>Dashboard</Header>

        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <DashboardContent/>
            </div>
        </main>
    </div>
</template>

<script setup>

import Navigation from '../components/layout/Navigation.vue';
import Header from '../components/layout/Header.vue';
import DashboardContent from '../components/dashboard/DashboardContent.vue';

</script>