<script setup lang="ts">
import ProfileHeader from '../components/ProfileHeader.vue';
import ExperienceCard from '../components/ExperienceCard.vue';
import EducationCard from '../components/EducationCard.vue';
import { profileData, experienceData, educationData } from '../data/careerData';
</script>

<template>
  <div class="career-view">
    <ProfileHeader :profile="profileData" />

    <section class="section">
      <h2 class="section-title">
        <span class="icon">💼</span>
        Expérience Professionnelle
      </h2>
      <div class="timeline">
        <ExperienceCard
          v-for="exp in experienceData"
          :key="exp.id"
          :experience="exp"
        />
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">
        <span class="icon">🎓</span>
        Formation
      </h2>
      <div class="education-list">
        <EducationCard
          v-for="edu in educationData"
          :key="edu.id"
          :education="edu"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.career-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.section {
  margin-top: 3rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 2rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(102, 126, 234, 0.3);
}

.icon {
  font-size: 1.5rem;
}

.timeline {
  position: relative;
}

.education-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

