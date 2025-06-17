<script setup lang="ts">
import SocialLinks from '@/components/home/SocialLinks.vue'
import { userData } from '@/constants/userData'
</script>

<template>
  <div class="hero-main-content">
    <h2>
      Hello World!
      <span> My name is {{ userData.name }} </span>
    </h2>
    <h4>Oh! and I'm a {{ userData.title }}</h4>
    <SocialLinks />
  </div>
</template>

<style lang="scss" scoped>
.hero-main-content {
  position: relative;
  text-align: left;
  color: #fff;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
  padding: 2rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(1.5rem) saturate(1.8);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    inset 0 -1px 0 rgba(255, 255, 255, 0.2);

  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-family: 'cursive', serif;

    &:first-child {
      font-weight: 400;
    }

    span {
      display: block;
      font-size: inherit;
      font-family: inherit;
      font-weight: bold;
    }
  }

  h4 {
    font-size: clamp(1rem, 2vw, 1.5rem);
    margin-bottom: 2rem;
  }
}
</style>
