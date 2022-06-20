<template>
  <v-app>
    <!--<SidebarLeft v-if="$mq !== 'mobile'" />
    <v-main>
      <div>aqui unos cambios</div>
      <router-view/>
      <div>otros cambios</div>
    </v-main>-->
    <component :is="layout">
      <router-view :layout.sync="layout"/>
    </component>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    layout: 'div'
  }),
};
</script>
