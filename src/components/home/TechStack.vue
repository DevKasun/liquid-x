<template>
  <div class="hero-main-content stack-container">
    <h3>My Dev Stack</h3>
    <ul>
      <li>
        <img src="@/assets/stack/react.webp" alt="reactjs" />
      </li>
      <li>
        <img src="@/assets/stack/nextjs.png" alt="nextjs" />
      </li>
      <li>
        <img src="@/assets/stack/vue.png" alt="vuejs" />
      </li>
      <li>
        <img src="@/assets/stack/typescript.png" alt="typescript" />
      </li>
      <li>
        <img src="@/assets/stack/supabase.png" alt="supabase" />
      </li>
      <li>
        <img src="@/assets/stack/vercel.png" alt="vercel" />
      </li>
      <li>
        <img src="@/assets/stack/cloudflare.png" alt="cloudflare" />
      </li>
    </ul>
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

  &.stack-container {
    h3 {
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 700;
      margin-bottom: 0.5rem;
      font-family: 'cursive', serif;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
        border-radius: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(0.5rem) saturate(1.5);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.15));
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        img {
          max-width: 40px;
          max-height: 40px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
      }

      // Responsive design for smaller screens
      @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;

        li {
          padding: 0.5rem;

          img {
            max-width: 32px;
            max-height: 32px;
          }
        }
      }

      @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;

        li {
          padding: 0.5rem;

          img {
            max-width: 28px;
            max-height: 28px;
          }
        }
      }
    }
  }
}
</style>
