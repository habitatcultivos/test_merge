<template>
  <div>
    <v-container v-if="$mq !== 'mobile'">
      <v-row class="text-center">
        <v-col cols="12">
          <h1>This is an HOME page</h1>
        </v-col>
      </v-row>
    </v-container>
    </v-container>
    <SidebarLeft sidebarwith="100%" v-if="$mq === 'mobile'" />
  </div>
</template>

<script>
  import SidebarLeft from '../components/SidebarLeft.vue'
  import LayoutSidebar from '../layouts/LayoutSidebar.vue'

  export default {
    name: 'Home',
    components: {
      SidebarLeft
    },
    created() {
      this.$emit('update:layout', LayoutSidebar);
    }
  }
</script>
