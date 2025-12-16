<script setup lang="ts">
import { ref } from 'vue';
import TabNavigation from './components/TabNavigation.vue';
import CareerView from './views/CareerView.vue';
import { SpeedInsights } from "@vercel/speed-insights/next"

const tabs = [
  { id: 'career', label: 'Parcours', icon: '👤' },
];

const activeTab = ref('career');
</script>

<template>

  <div class="app-container">
    <SpeedInsights></SpeedInsights>
    <TabNavigation
      :tabs="tabs"
      :active-tab="activeTab"
      @update:active-tab="activeTab = $event"
    />

    <main class="main-content">
      <Transition name="fade" mode="out-in">
        <CareerView v-if="activeTab === 'career'" />
      </Transition>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
}

.main-content {
  min-height: calc(100vh - 70px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
