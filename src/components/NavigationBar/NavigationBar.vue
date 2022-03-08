<template>
  <div class="container px-1">
    <ul class="d-flex list-style-none mx-n1">
      <li class="p-1"
        v-for="(route, idx) of routes"
        v-bind:key="idx"
      >
        <router-link class="link"
          v-bind:to="route.link"
        >
          <span>{{ route.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    setup() {
      const routes = [
        { name: 'О проекте', link: '/' },
        { name: 'Дела', link: '/todos' }
      ]

      return {
        routes
      }
    }
  }
</script>