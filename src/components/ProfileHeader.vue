<script setup lang="ts">
import type { Profile } from '../types/Career';

defineProps<{
  profile: Profile;
}>();
</script>

<template>
  <div class="profile-header">
    <div class="avatar">
      {{ profile.name.split(' ').map(n => n[0]).join('') }}
    </div>
    <div class="profile-info">
      <h1 class="name">{{ profile.name }}</h1>
      <p class="title">{{ profile.title }}</p>
      <div class="contact-info">
        <span class="contact-item">📍 {{ profile.location }}</span>
        <span class="contact-item">📧 {{ profile.email }}</span>
        <span class="contact-item">📱 {{ profile.phone }}</span>
      </div>
    </div>
  </div>
  <div class="summary">
    <p>{{ profile.summary }}</p>
  </div>
</template>

<style scoped>
.profile-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
}

.profile-info {
  flex: 1;
  min-width: 250px;
}

.name {
  margin: 0;
  font-size: 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title {
  margin: 0.5rem 0 1rem 0;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.contact-item {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.summary {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
}

.summary p {
  margin: 0;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.05rem;
}

@media (max-width: 600px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }

  .contact-info {
    justify-content: center;
  }

  .name {
    font-size: 2rem;
  }
}
</style>

