<script setup lang="ts">
import { userData } from '@/constants/userData'
</script>

<template>
  <ul class="social-links">
    <li v-for="data in userData.socialLinks" :key="data.name">
      <a :href="data.url" target="_blank"> {{ data.name }} </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.social-links {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  li {
    flex: 1;
    min-width: 120px;
  }

  a {
    display: block;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    text-align: center;
    border-radius: 1rem;
    backdrop-filter: blur(1rem) saturate(1.5);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      transition: left 0.5s;
    }

    &:active {
      transform: translateY(0);
    }
  }

  // GitHub - Glossy Green
  li:nth-child(1) a {
    background: linear-gradient(135deg, rgba(40, 167, 69, 0.25), rgba(40, 167, 69, 0.1));
    border: 1px solid rgba(40, 167, 69, 0.4);
    box-shadow:
      0 4px 16px rgba(40, 167, 69, 0.3),
      0 1px 4px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 rgba(40, 167, 69, 0.2);

    &:before {
      background: linear-gradient(90deg, transparent, rgba(40, 167, 69, 0.3), transparent);
    }

    &:hover {
      transform: translateY(-2px);
      background: linear-gradient(135deg, rgba(40, 167, 69, 0.35), rgba(40, 167, 69, 0.15));
      border-color: rgba(40, 167, 69, 0.6);
      box-shadow:
        0 8px 24px rgba(40, 167, 69, 0.4),
        0 2px 8px rgba(40, 167, 69, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 rgba(40, 167, 69, 0.3);

      &:before {
        left: 100%;
      }
    }

    &:active {
      box-shadow:
        0 2px 8px rgba(40, 167, 69, 0.3),
        0 1px 4px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        inset 0 -1px 0 rgba(40, 167, 69, 0.2);
    }
  }

  // LinkedIn - Glossy Blue
  li:nth-child(2) a {
    background: linear-gradient(135deg, rgba(0, 119, 181, 0.25), rgba(0, 119, 181, 0.1));
    border: 1px solid rgba(0, 119, 181, 0.4);
    box-shadow:
      0 4px 16px rgba(0, 119, 181, 0.3),
      0 1px 4px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 rgba(0, 119, 181, 0.2);

    &:before {
      background: linear-gradient(90deg, transparent, rgba(0, 119, 181, 0.3), transparent);
    }

    &:hover {
      transform: translateY(-2px);
      background: linear-gradient(135deg, rgba(0, 119, 181, 0.35), rgba(0, 119, 181, 0.15));
      border-color: rgba(0, 119, 181, 0.6);
      box-shadow:
        0 8px 24px rgba(0, 119, 181, 0.4),
        0 2px 8px rgba(0, 119, 181, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 rgba(0, 119, 181, 0.3);

      &:before {
        left: 100%;
      }
    }

    &:active {
      box-shadow:
        0 2px 8px rgba(0, 119, 181, 0.3),
        0 1px 4px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        inset 0 -1px 0 rgba(0, 119, 181, 0.2);
    }
  }

  // Instagram - Glossy Pink/Red
  li:nth-child(3) a {
    background: linear-gradient(135deg, rgba(228, 64, 95, 0.25), rgba(228, 64, 95, 0.1));
    border: 1px solid rgba(228, 64, 95, 0.4);
    box-shadow:
      0 4px 16px rgba(228, 64, 95, 0.3),
      0 1px 4px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 rgba(228, 64, 95, 0.2);

    &:before {
      background: linear-gradient(90deg, transparent, rgba(228, 64, 95, 0.3), transparent);
    }

    &:hover {
      transform: translateY(-2px);
      background: linear-gradient(135deg, rgba(228, 64, 95, 0.35), rgba(228, 64, 95, 0.15));
      border-color: rgba(228, 64, 95, 0.6);
      box-shadow:
        0 8px 24px rgba(228, 64, 95, 0.4),
        0 2px 8px rgba(228, 64, 95, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 rgba(228, 64, 95, 0.3);

      &:before {
        left: 100%;
      }
    }

    &:active {
      box-shadow:
        0 2px 8px rgba(228, 64, 95, 0.3),
        0 1px 4px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        inset 0 -1px 0 rgba(228, 64, 95, 0.2);
    }
  }
}
</style>
