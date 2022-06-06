<template>
  <div class="LayoutSidebar">
      <SidebarLeft  v-if="$mq !== 'mobile'" />
      <v-main class="LayoutDefault__main">
          <slot/>
      </v-main>
  </div>
</template>

<script>
import SidebarLeft from '../components/SidebarLeft.vue'
export default {
    components: {
        SidebarLeft
    }
}
</script>

<style>

</style>