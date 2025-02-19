<script setup lang="ts">
import { RouterView } from 'vue-router'
import { IconHome } from '@tabler/icons-vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="ma-4">
    <div class="row justify-content-start">
      <div class="col-2">
        <div class="p-1"></div>
        <div class="grid gap-0 column-gap-0 d-flex align-items-end">
          <div class="p-2 g-col-3">
            <img src="./assets/logo.png" alt="Logo" style="height: 50px; width: 50px;" />
          </div>
          <div class="p-2 g-col-8 ">
            <p class="fs-5 fw-medium">Komgrip Technologies</p>
          </div>
        </div>
        <div class="p-2">

          <ul class="nav flex-column">
            <div class="card" v-if="$route.path === '/'">
              <li class="nav-item">
                <a class="nav-link active d-flex align-items-end" aria-current="page" href="/">
                  <div class="p-1 d-flex align-items-start align-self-center badge" style="background-color: #cb0d9f;">
                    <IconHome></IconHome>
                  </div>
                  <div class="d-flex align-items-start p-2 align-self-center">
                    Dashboard
                  </div>
                </a>
              </li>
            </div>
            <li class="nav-item" v-else>
              <a class="nav-link active" aria-current="page" href="/">
                <IconHome></IconHome> Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="test">Menu 1</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-10">
        <main>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active">Pages</li>
              <li class="breadcrumb-item">Library</li>
            </ol>
          </nav>
        </main>
        <RouterView />
      </div>
    </div>
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
