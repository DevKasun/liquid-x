<script setup lang="ts"></script>

<template>
  <main>
    <div class="hero-main">
      <div class="hero-container">
        <figure>
          <img src="@/assets/images/user-image.jpg" alt="Liquid X" />
        </figure>
        <div class="hero-main-content-container">
          <div class="hero-main-content">
            <h2>
              Hello World!
              <span> My name is Mike </span>
            </h2>
            <h4>Oh! and I'm a web developer</h4>

            <ul class="social-links">
              <li>
                <a href="#"> Github </a>
              </li>
              <li>
                <a href="#"> LinkedIn </a>
              </li>
              <li>
                <a href="#"> Instagram </a>
              </li>
            </ul>
          </div>
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

    .hero-main-content-container {
      flex: 1;
      flex-grow: 8;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

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

      h3 {
        font-size: clamp(1.5rem, 3vw, 2rem);
        font-weight: 700;
        margin-bottom: 0.5rem;
        font-family: 'cursive', serif;
      }

      h4 {
        font-size: clamp(1rem, 2vw, 1.5rem);
        margin-bottom: 2rem;
      }

      .social-links {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;

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
    }

    .stack-container {
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
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.15)
            );
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
