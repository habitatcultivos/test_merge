<template>
  <div>
    <AppBarBack href="/" title="About" v-if="$mq === 'mobile'" />
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1>Esto debe cambiar</h1>
          <p>Nuevas cosas</p>
          <h4>Muy bien</h4>
        </v-col>
      </v-row>
    </v-container>
  </div>
  
</template>
<script>
  import AppBarBack from '../components/AppBarBack.vue';
  import LayoutSidebar from '../layouts/LayoutSidebar.vue'

  export default {
    name: 'About',
    components: {
      AppBarBack
    },
    created() {
      this.$emit('update:layout', LayoutSidebar);
    }
  }
</script>
