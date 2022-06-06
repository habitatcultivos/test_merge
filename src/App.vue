<template>
  <v-app>
    <!--<SidebarLeft v-if="$mq !== 'mobile'" />
    <v-main>
      <router-view/>
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
