<template>
    <v-carousel
      cycle
      height="800"
      hide-delimiter-background
      show-arrows-on-hover class="mt-0">
    <v-carousel-item
      v-for="(slide) in slides"
      :key="slide.title">
      <v-sheet height="100%">
        <v-row
          class="fill-height my-0 py-0"
          align="center"
          justify="center">
          <a href="#">
            <div class="slide-text text-center">
              <div class="mb-10 text-center text-capitalize">{{slide.text}}</div>
              <div class="mb-25 slider-title text-center text-capitalize">{{slide.title}}</div>
              <v-btn
                depressed
                color="btnslider"
                class="text-capitalize body--text text-center py-10 px-24 rounded-0 slider-border" 
                height="45px"
                width="40%">
                Shop now
              </v-btn>
            </div>
            <v-img class="slide-img"
              :src="slide.src"
              contain
              width="1903"
              alt='img'/>
          </a>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

export default {
    name: 'CarouselUnit',
    data: function () {
      return {
        colors: '',
        slides: [
          { 
            title: 'Big Collection Styles modern wear',
            text: 'Shop now & save up to 25% OFF',
            src: '//cdn.shopify.com/s/files/1/0549/6517/4492/files/slider-01_7fd7a08e-fc04-445c-8c85-c7513444fb1b_1903x870.jpg?v=1634628647',
          },
          { 
            title: 'The new branded wear incoming',
            text: 'The all new gorgeous collection, 2021',
            src: '//cdn.shopify.com/s/files/1/0549/6517/4492/files/slider-02_1903x870.jpg?v=1632726148',
          }
          ]
      }
    }
}
</script>

<style scoped>
.slide-img {
  position: relative;
}
.slide-text {
  position: absolute;
  left: 11%;
  top: 21%;
  z-index: 10;
  width: 25%;
}
div {
  font-family : Roboto, sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 18px;
}
.slider-title {
  font-size: 50px;
  line-height: 50px;
}
.slider-border {
  border-bottom: 1px solid #272727;
  font-family : Roboto, sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  line-height: 13px;
}
</style>
