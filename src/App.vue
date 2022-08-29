<template>
  <v-app>
    <header>
      <HelloWorld/>
    </header>
    <v-main>
      <v-row width="2526">
        <v-col col="12" class="py-0">
          <CarouselUnit/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import CarouselUnit from './components/CarouselUnit';

export default {
  name: 'App',

  components: {
    HelloWorld,
    CarouselUnit
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.v-main {
  font: Roboto, sans-serif;
}
header {
  font: Cormorant, sans-serif;
}

</style>
