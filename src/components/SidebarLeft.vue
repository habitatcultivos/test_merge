<template>
  <v-navigation-drawer
      app
      permanent
      left
      fixed
      :width= "sidebarwith"
      class="sidebarLeft"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Eduardo Tapia</v-list-item-title>
            <v-list-item-subtitle>Options</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :href="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    sidebarwith: {
      default: '400px'
    }
  },
  
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-city', link: '/' },
          { title: 'About', icon: 'mdi-account', link: '/about' }
        ],
      }
    }
}
</script>

<style>
  .sidebarLeft{
    background-color: #bbbaba !important;
  }
</style>