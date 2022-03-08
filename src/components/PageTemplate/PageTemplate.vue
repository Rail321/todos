<template>
  <div class="h-100 d-flex flex-column">
    <navigation-bar />

    <div class="flex-basis-100 container px-1">
      <slot />
    </div>
  </div>
</template>

<script>
  import NavigationBar from '@/components/NavigationBar'

  export default {
    components: { NavigationBar }  
  }
</script>