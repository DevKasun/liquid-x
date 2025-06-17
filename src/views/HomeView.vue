<script setup lang="ts">
import HeroUserImage from '@/components/home/HeroUserImage.vue'
import userImage from '@/assets/images/user-image.jpg'
import UserInfo from '@/components/home/UserInfo.vue'
import TechStack from '@/components/home/TechStack.vue'
</script>

<template>
  <main>
    <div class="hero-main">
      <div class="hero-container">
        <HeroUserImage :imageSrc="userImage" :altText="'Mike - Web Developer'" />
        <div class="hero-main-content-container">
          <UserInfo />
          <TechStack />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.hero-main {
  background-color: #000000;
  padding: 20px;
  min-height: 100vh;
  background-image: url('@/assets/images/pattern-leaf.webp');
  -webkit-animation: moveBackground 120s linear infinite;
  animation: moveBackground 120s linear infinite;
  background-size: cover;
  background-position: center;
  background-repeat: repeat-y;
  display: grid;
  place-items: center;

  .hero-container {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 768px) {
      align-items: stretch;
      flex-direction: column;
      gap: 1rem;
    }

    .hero-main-content-container {
      flex: 1;
      flex-grow: 8;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @media (max-width: 768px) {
        gap: 1rem;
      }
    }
  }
}

@-webkit-keyframes moveBackground {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 0% 1000%;
  }
}

@keyframes moveBackground {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 0% 1000%;
  }
}
</style>
