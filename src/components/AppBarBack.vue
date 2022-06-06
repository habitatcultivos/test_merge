<template>
    <v-app-bar
      color="green accent-5"
      dark
    >
      <v-btn
        icon
        :link="true"
        :href="href"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppBarBack',
    props: {
        title: {
            default: ''
        },
        href: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>