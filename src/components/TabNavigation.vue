<script setup lang="ts">
defineProps<{
  tabs: { id: string; label: string; icon: string }[];
  activeTab: string;
}>();

defineEmits<{
  (e: 'update:activeTab', value: string): void;
}>();
</script>

<template>
  <nav class="tab-navigation">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :class="['tab-button', { active: activeTab === tab.id }]"
      @click="$emit('update:activeTab', tab.id)"
    >
      <span class="tab-icon">{{ tab.icon }}</span>
      <span class="tab-label">{{ tab.label }}</span>
    </button>
  </nav>
</template>

<style scoped>
.tab-navigation {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(26, 26, 46, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(102, 126, 234, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.tab-button:hover {
  background: rgba(102, 126, 234, 0.1);
  color: rgba(255, 255, 255, 0.9);
}

.tab-button.active {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  color: #fff;
  border: 1px solid rgba(102, 126, 234, 0.4);
}

.tab-icon {
  font-size: 1.2rem;
}

@media (max-width: 600px) {
  .tab-navigation {
    flex-wrap: wrap;
  }

  .tab-button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .tab-label {
    display: none;
  }

  .tab-icon {
    font-size: 1.5rem;
  }
}
</style>

