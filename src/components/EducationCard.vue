<script setup lang="ts">
import type { Education } from '../types/Career';

defineProps<{
  education: Education;
}>();
</script>

<template>
  <div class="education-card">
    <div class="card-icon">🎓</div>
    <div class="card-content">
      <div class="card-header">
        <h3 class="degree">{{ education.degree }} - {{ education.field }}</h3>
        <span class="years">{{ education.startYear }} - {{ education.endYear }}</span>
      </div>
      <p class="institution">{{ education.institution }}</p>
      <p v-if="education.description" class="description">{{ education.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.education-card {
  display: flex;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.education-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 40px rgba(16, 185, 129, 0.2);
}

.card-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.card-content {
  flex: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.degree {
  margin: 0;
  font-size: 1.1rem;
  color: #fff;
  font-weight: 600;
}

.years {
  background: rgba(16, 185, 129, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #6ee7b7;
  white-space: nowrap;
}

.institution {
  margin: 0 0 0.5rem 0;
  color: #10b981;
  font-weight: 500;
}

.description {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .card-header {
    flex-direction: column;
  }

  .years {
    align-self: flex-start;
  }
}
</style>

