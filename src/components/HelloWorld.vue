<template>
  <div>
    <v-row class="primary d-flex align-center px-3 mt-0 body--text" height="42" color-color.black>
      <v-col cols="4" class="pa-0 d-none d-md-inline-block">
        <v-menu elevation="0" 
          :close-on-content-click="true"
          :offset-y="true"
          class="body--text">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              plain
              v-bind="attrs"
              v-on="on"
              @mouseover="hoverIcon3=true" @mouseleave="hoverIcon3=false"
              class="text-capitalize py-8 px-24 body--text roboto rounded-0">
              {{langItem}}
              <v-icon right v-text="changeIcon3" class="py-2 pr-3 border" color="body"></v-icon>
            </v-btn>
          </template>
          <v-list width="280" class="py-30 rounded-0 border-menu" plain>
            <v-list-item
              v-for="(n, i) in language"
              :key="i"
              class="px-5 ml-0">
              <a href='#' @click="langItem=n">
                <v-list-item-title class="roboto">{{ n }}</v-list-item-title>
              </a>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu elevation="0" 
          :close-on-content-click="true"
          :offset-y="true"
          class="body--text mx-3">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              plain
              v-bind="attrs"
              v-on="on"
              @mouseover="hoverIcon3=true" @mouseleave="hoverIcon3=false"
              class="text-capitalize py-8 px-24 body--text roboto rounded-0">
              <v-img
                  :src="currencyItem.url"
                  class="mr-2 d-inline-block"
                  contain
                  height="11"
                  width="16"/>
              {{currencyItem.name}}
              <v-icon right v-text="changeIcon3" color="body" class="py-2 pr-3 border"></v-icon>
            </v-btn>
          </template>
          <v-list class="py-30 px-15 rounded-0 border-menu" plain>
            <v-list-item
              v-for="(item, i) in currency"
              :key="i"
              class="ml-0">
              <a href='#' @click="currencyChange(i)">
                <v-img
                  :src="item.curUrl"
                  class="d-inline-block"
                  contain
                  height="11"
                  width="16"/>
                <v-list-item-title class="ml-2 roboto d-inline">{{ item.name }}</v-list-item-title>
              </a>
            </v-list-item>
          </v-list>
        </v-menu>
        <a href="#" class="hoverbr--text">
          <v-icon left inline color="hoverbr">
            mdi-percent 
          </v-icon>
        Clearance sales</a>
      </v-col>
      <v-col cols="12" md="4" class="py-0">
          <div class="roboto">
            <v-icon left color="body">
            mdi-odnoklassniki
            </v-icon>
          Hurrah! Get Free Shipping on All Orders Over $99!</div>
      </v-col>
      <v-col cols="4" class="py-0 d-none d-md-flex justify-end">
          <div class="d-inline-block px-3 roboto">
            <v-icon left color="body">
            mdi-phone-in-talk
            </v-icon>
          +01-987-654-3210</div>
          <div class="d-inline-block px-3 roboto">
            <v-icon left color="body">
            mdi-email-open
            </v-icon>
          contact@store.com</div>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-app-bar
        color="body"
        height="70"
        plain
        elevation="0"
        class="ma-0 py-30">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>
          <a href="#">
            <v-img
            src="//cdn.shopify.com/s/files/1/0549/6517/4492/files/logo_24c466ba-4775-4bc1-9c42-25d442f5af92_125x20.png?v=1632726079"
            class="my-3"
            contain
            height="20"
            width="125"/>
          </a>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        
        <v-menu open-on-hover elevation="0" 
          :offset-y="true"
          :close-on-content-click="false" color="body">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              plain
              v-bind="attrs"
              v-on="on"
              @mouseover="hoverIcon=true" @mouseleave="hoverIcon=false"
              class="hover-lined text-capitalize py-8 px-24 text-сormorant secondary--text d-none d-md-flex">
              Home
              <v-icon right v-text="changeIcon"></v-icon>
            </v-btn>
          </template>
          <v-list width="280" class="py-30 rounded-0 border-menu" plain>
            <v-list-item
              v-for="n in home"
              :key="n"
              class="px-5 ml-0">
              <a href='#'>
                <v-list-item-title>{{ n }}</v-list-item-title>
              </a>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-on-hover 
          :close-on-content-click="false"
          :nudge-width="1850"
          height="500"
          elevation="0"
          color="body"
          :offset-y="true">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              plain
              v-bind="attrs"
              v-on="on"
              @mouseover="hoverIcon2=true" @mouseleave="hoverIcon2=false"
              class="hover-lined text-capitalize py-8 px-24 text-сormorant secondary--text d-none d-md-flex">
              Shop
              <v-icon right v-text="changeIcon2"></v-icon>
            </v-btn>
          </template>
          <v-row height="400" class="py-30 rounded-0 border-menu">
            <v-col cols="6">
              <v-row>
                <v-col cols="6"
                  v-for="n in shopCateg"
                  :key="n.id"
                  class="px-10">
                  <h4 class="py-10 secondary--text">{{n.name}}</h4>
                  <p v-for="item in n.items"
                  :key="item"
                  class="secondary--text"
                  >{{item}}</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3">
              <a href="#">
                <v-img
                  src="//cdn.shopify.com/s/files/1/0549/6517/4492/files/menu-banner-01.jpg?v=1632726696"
                  class="my-3"
                  contain
                  width="320"/>
              </a>
            </v-col>
            <v-col cols="3">
              <a href="#">
                <v-img
                  src="//cdn.shopify.com/s/files/1/0549/6517/4492/files/menu-banner-02.jpg?v=1632726697"
                  class="my-3"
                  contain
                  width="320"/>
              </a>
            </v-col>
          </v-row>
        </v-menu>
        <v-menu open-on-hover elevation="0" 
          :close-on-content-click="false"
          :offset-y="true"
          color="body">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              plain
              v-bind="attrs"
              v-on="on"
              @mouseover="hoverIcon3=true" @mouseleave="hoverIcon3=false"
              class="hover-lined text-capitalize py-8 px-24 text-сormorant secondary--text d-none d-md-flex">
              Pages
              <v-icon right v-text="changeIcon3"></v-icon>
            </v-btn>
          </template>
          <v-list width="280" class="py-30 rounded-0 border-menu" plain>
            <v-list-item
              v-for="n in pages"
              :key="n"
              class="px-5 ml-0">
              <a href='#'>
                <v-list-item-title>{{ n }}</v-list-item-title>
              </a>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-on-hover elevation="0" 
          :offset-y="true"
          color="body">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              plain
              v-bind="attrs"
              v-on="on"
              @mouseover="hoverIcon4=true" @mouseleave="hoverIcon4=false"
              class="hover-lined text-capitalize py-8 px-24 text-сormorant secondary--text d-none d-md-flex">
              Blog
              <v-icon right v-text="changeIcon4"></v-icon>
            </v-btn>
          </template>
          <v-list width="280" class="py-30 rounded-0 border-menu" plain>
            <v-list-item
              v-for="n in blog"
              :key="n"
              class="px-5 ml-0">
              <a href='#'>
                <v-list-item-title>{{ n }}</v-list-item-title>
              </a>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-on-hover 
          :close-on-content-click="false"
          :nudge-width="1950"
          height="500"
          elevation="0"
          color="body"
          :offset-y="true">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              plain
              v-bind="attrs"
              v-on="on"
              @mouseover="hoverIcon2=true" @mouseleave="hoverIcon2=false"
              class="hover-lined text-capitalize py-8 px-24 text-сormorant secondary--text d-none d-md-flex">
              Look Book
              <v-icon right v-text="changeIcon2"></v-icon>
            </v-btn>
          </template>
          <v-row height="400" class="d-flex justify-center py-30 rounded-0 border-menu">
            <v-col cols="4"
              v-for="n in lookBook"
              :key="n.name"
              class="px-30 mt-0 ml-0">
              <h4 class="pb-8 d-block text-сormorant">{{n.name}}</h4>
              <a href="#">
                <v-img
                  :src="n.src"
                  contain
                  width="360"
                  alt='img'/>
              </a>
            </v-col>
          </v-row>
        </v-menu>
        
        <v-spacer></v-spacer>
        <a href="#" class="roboto headertext--text">
          <v-icon left inline>
            mdi-magnify 
          </v-icon>
          Search</a>
        <v-menu elevation="0" 
          :offset-y="true"
          color="body">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              plain
              v-bind="attrs"
              v-on="on"
              @mouseover="hoverIcon3=true" @mouseleave="hoverIcon3=false"
              class="hover-lined text-capitalize py-8 px-24 roboto headertext--text d-none d-md-flex">
              My account
              <v-icon right v-text="changeIcon3" color="headertext"></v-icon>
            </v-btn>
            <v-btn
              icon
              color="headertext"
              class="d-md-none d-flex">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list width="280" class="py-30 rounded-0 border-menu" plain>
            <v-list-item
              v-for="n in myAccount"
              :key="n"
              class="px-5 ml-0">
              <a href='#'>
                <v-list-item-title class="roboto">{{ n }}</v-list-item-title>
              </a>
            </v-list-item>
          </v-list>
        </v-menu>
        
      </v-app-bar>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: function () {
      return {
        language: [
        'English',
        'Deutsch',
        'Арабский'
        ],
        langItem: 'English',
        currency: [
          {
            name: 'USD',
            curUrl: '//cdn.shopify.com/s/files/1/0549/6517/4492/t/2/assets/currency_1.png?v=18239196963075170161632548150'
          },
          {
            name: 'EUR',
            curUrl: '//cdn.shopify.com/s/files/1/0549/6517/4492/t/2/assets/currency_2.png?v=142449562045385239011632548150'
          },
          {
            name: 'GBP',
            curUrl: '//cdn.shopify.com/s/files/1/0549/6517/4492/t/2/assets/currency_3.png?v=170596593875287525321632548151'
          },
          {
            name: 'AUD',
            curUrl: '//cdn.shopify.com/s/files/1/0549/6517/4492/t/2/assets/currency_4.png?v=183532650322902660331632548151'
          },
          {
            name: 'INR',
            curUrl: '//cdn.shopify.com/s/files/1/0549/6517/4492/t/2/assets/currency_5.png?v=31126371714934889051632548152'
          }
          ],
        currencyItem: {
          name: 'USD',
          url: '//cdn.shopify.com/s/files/1/0549/6517/4492/t/2/assets/currency_1.png?v=18239196963075170161632548150'
        },
        color: {
          black: '#272727'
        },
        iconBar: "mdi-chevron-up",
        hoverIcon: false,
        hoverIcon2: false,
        hoverIcon3: false,
        hoverIcon4: false,
        home: ['Cosmetic 1','Cosmetic 2','Cosmetic 3'],
        shopCateg: [
          {
            id: 0,
            name: 'Category page layout',
            items: ['Left sidebar','Right sidebar','Filter toggle']
          },
          {
            id: 1,
            name: 'Product hover effect',
            items: ['Center product button','bottom fade effect','Zoom fade effecte']
          },
          {
            id: 2,
            name: 'Product hover effect',
            items: ['Center product button','bottom fade effect','Zoom fade effecte']
          }
        ],
        pages: ['About us','Contact As',"FAQ's"],
        blog: ['Blog grid','Blog list','Article page'],
        myAccount: ['Log in','Create account','Wishlist','Compare(0)'],
        lookBook: [
          {
            name: 'Beauty',
            src: '//cdn.shopify.com/s/files/1/0549/6517/4492/files/Beauty.jpg?v=1632726637'
          },
          {
            name: 'Cosmetics',
            src: '//cdn.shopify.com/s/files/1/0549/6517/4492/files/Cosmetics.jpg?v=1632726638'
          },
          {
            name: 'Skin',
            src: '//cdn.shopify.com/s/files/1/0549/6517/4492/files/Skin.jpg?v=1632726641'
          },
          {
            name: 'Skin',
            src: '//cdn.shopify.com/s/files/1/0549/6517/4492/files/Spa.jpg?v=1632726645'
          }
        ]
      }
    },
    computed: {
      changeIcon () {
        return this.iconHover(this.hoverIcon);
      },
      changeIcon2 () {
        return this.iconHover(this.hoverIcon2);
      },
      changeIcon3 () {
        return this.iconHover(this.hoverIcon3);
      },
      changeIcon4 () {
        return this.iconHover(this.hoverIcon4);
      }
    },
    methods: {
      iconHover (h) {
        if(h===true) {
          return "mdi-chevron-down"
        } else {
          return "mdi-chevron-up"
        }
      },
      currencyChange(i) {
        this.currencyItem.name = this.currency[i].name;
        this.currencyItem.url = this.currency[i].curUrl;
      }
    }
  }
</script>
<style scoped>
a {
  text-decoration: none;
}
.roboto {
  font-family : Cormorant, sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 18px;
}
.text-сormorant {
  font-family : Cormorant, sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 16px;
}
.border {
  border-right: 1px solid #e5e5e5;
}
.border-menu {
  border: 1px solid #e5e5e5;
  background-color: #ffffff;
}
.hover-lined:hover {
  border-bottom: 1px solid #111111;
}

</style>
