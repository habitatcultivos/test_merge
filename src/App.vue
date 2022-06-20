<template>
  <v-app>
    <!--<SidebarLeft v-if="$mq !== 'mobile'" />
    <v-main>
      <div>aqui unos cambios</div>
      <router-view/>
      <div>otros cambios</div>
      <p>Este es el App.js"
      <router-view/>
     <div>Aqui más cosas para hacer merge</div> 
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
