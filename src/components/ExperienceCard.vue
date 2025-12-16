<script setup lang="ts">
import type { Experience } from '../types/Career';

defineProps<{
  experience: Experience;
}>();

const formatDate = (date: string | null): string => {
  if (!date) return 'Présent';
  const [year, month] = date.split('-');
  const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
  return `${months[parseInt(month) - 1]} ${year}`;
};
</script>

<template>
  <div class="experience-card">
    <div class="timeline-dot"></div>
    <div class="card-content">
      <div class="card-header">
        <div class="company-info">
          <h3 class="position">{{ experience.position }}</h3>
          <p class="company">{{ experience.company }}</p>
        </div>
        <div class="date-range">
          {{ formatDate(experience.startDate) }} - {{ formatDate(experience.endDate) }}
        </div>
      </div>
      <p class="description">{{ experience.description }}</p>
      <div class="skills">
        <span v-for="skill in experience.skills" :key="skill" class="skill-tag">
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-card {
  position: relative;
  padding-left: 30px;
  margin-bottom: 2rem;
}

.timeline-dot {
  position: absolute;
  left: 0;
  top: 8px;
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  border: 3px solid #1a1a2e;
}

.experience-card::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 24px;
  width: 2px;
  height: calc(100% + 1rem);
  background: linear-gradient(180deg, #667eea 0%, transparent 100%);
}

.experience-card:last-child::before {
  display: none;
}

.card-content {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-content:hover {
  transform: translateX(5px);
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.position {
  margin: 0;
  font-size: 1.25rem;
  color: #fff;
  font-weight: 600;
}

.company {
  margin: 0.25rem 0 0 0;
  color: #667eea;
  font-weight: 500;
}

.date-range {
  background: rgba(102, 126, 234, 0.2);
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #a5b4fc;
  white-space: nowrap;
}

.description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: rgba(102, 126, 234, 0.15);
  border: 1px solid rgba(102, 126, 234, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #c7d2fe;
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: rgba(102, 126, 234, 0.3);
  border-color: rgba(102, 126, 234, 0.5);
}

@media (max-width: 600px) {
  .card-header {
    flex-direction: column;
  }

  .date-range {
    align-self: flex-start;
  }
}
</style>

