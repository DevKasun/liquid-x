<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  imageSrc?: string
  altText?: string
}

const props = withDefaults(defineProps<Props>(), {
  imageSrc: '',
  altText: 'Liquid X',
})

const imageUrl = computed(() => {
  return props.imageSrc
})
</script>

<template>
  <figure>
    <img :src="imageUrl" :alt="props.altText" />
  </figure>
</template>

<style lang="scss" scoped>
figure {
  position: relative;
  flex: 1;
  flex-grow: 4;
  margin: 1rem;

  img {
    max-width: 100%;
    position: relative;
    z-index: 2;
    border-radius: 1rem;
  }

  @media (max-width: 768px) {
    max-height: 200px;
    img {
      max-height: inherit;
      width: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  &:before {
    content: '';
    position: absolute;
    display: grid;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: translate(-1rem, -1rem);
    width: calc(100% + 2rem);
    height: calc(100% + 2rem);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
    z-index: 0;
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(1.5rem) saturate(1.8);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 2px 8px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.6),
      inset 0 -1px 0 rgba(255, 255, 255, 0.2);
  }
}
</style>
