<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <div class="home" style="background-color: #F5F7FA;">
    <AppNavbar />
    <AppSlider />
    <!-- <Categories /> -->
    <div class="container">
      <div class="row justify-content-center py-5">
        <div class="col-xl-3 col-sm-6 col-12 py-2" v-for="category in categories" :key="category">
          <!-- <router-link :to="{ name: 'category', params: { category: category }}"> -->
          <div class="card shadow border-0">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="media-body text-left">
                    <h5 class="danger">{{ category.name }}</h5>
                    <h3> <img src="../assets/icons/cubes.png" style="width:30px" /> {{ category.count }}</h3>
                  </div>
                  <div class="align-self-center">
                    <i class="icon-rocket danger font-large-2 float-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
    <BestSell />
    <DiscountItem v-for="product in discountProduct" :key="product.id" :product="product" />

    <!-- <TrendOutfits /> -->
    <div class="container trend-outfits">
      <div class="row mb-3">
        <div class="col-12">
          <div class="section-title">
            <h2>Sale Product</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <SaleProduct v-for="product in topSaleProducts" :key="product.id" :product="product" />
      </div>
      <div class="row mb-3 pt-5">
        <div class="col-12">
          <div class="section-title">
            <h2>Trending Outfits</h2>
          </div>
        </div>
      </div>
      <div class="row pb-4">
        <TrendingProduct v-for="product in topReviewProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>

  <AppFooter />
</template>

<script>
import { mapState, mapActions } from 'vuex';

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import AppNavbar from '@/components/layout/AppNavbar.vue';
import AppSlider from '@/components/layout/AppSlider.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import Categories from '@/components/Categories.vue';
import BestSell from '@/components/BestSell.vue';
import DiscountItem from '@/components/DiscountItem.vue';
import TrendOutfits from '@/components/TrendOutfits.vue';
import SaleProduct from '@/components/SaleProduct.vue';
import TrendingProduct from '@/components/TrendingProduct.vue';


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    AppNavbar,
    AppSlider,
    AppFooter,
    Categories,
    BestSell,
    DiscountItem,
    SaleProduct,
    TrendOutfits,
    TrendingProduct,
  },

  data() {
    return {
      productLimit: 8,
      saleproductLimit: 4,
      discountItem: 1,
    }
  },

  created() {
    this.$store.dispatch('fetchProducts');


    /////////////////Mongo DB Data/////////////////////
    // this.$store.dispatch("fetchProducts2");

    /////////////////Mongo DB Data/////////////////////
  },

  computed: {

    /////////////////Mongo DB Data/////////////////////
    // products2() {
    //   return this.$store.getters.products2;
    // },
    /////////////////Mongo DB Data/////////////////////


    products() {
      return this.$store.getters.products;
    },
    productsByCategory() {
      return this.$store.getters.productsByCategory(this.selectedCategory);
    },
    productsByDiscount() {
      return this.$store.getters.productsByDiscount(this.selectedDiscount);
    },
    productsByReview() {
      return this.$store.getters.productsByReview(this.selectedReview);
    },

    // To Display Only Categories ------------------------
    categories() {
      return this.$store.getters.uniqueCategories;
    },

    filteredProducts() {
      return this.$store.state.products.filter(product => product.category === this.selectedCategory)
    },


    topReviewProducts() {
      return this.$store.state.products
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, this.productLimit);
    },

    topSaleProducts() {
      return this.$store.state.products
        .sort((a, b) => b.rating.count - a.rating.count)
        .slice(0, this.saleproductLimit);
    },

    discountProduct() {
      return this.$store.state.products
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, this.discountItem);
    }

  },

  methods: {
    selectProduct(product) {
      this.$store.dispatch('selectProduct', product);
    },

    selectProduct(product) {
      this.$router.push({ path: `/product/${product.id}` });
    }
  }

}
</script>








<style scoped>
.trend-outfits {
  padding-top: 80px;
}

.section-title {
  margin-bottom: 20px;
}

.section-title h2 {
  font-size: 1.2rem;
  font-weight: 900;
  text-align: start;
}

.section-title {
  width: 98%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
}

.section-title p span {
  font-size: 40px;
  margin: 0 5px;
  cursor: pointer;
  color: #555;
  width: 30PX;
  height: 30PX;
  padding: 3px;
  display: inline-block;
  text-align: center;
  line-height: 19px;
  border-radius: 3px;
}

.section-title p span:hover {
  background-color: #222;
  color: white;
}
</style>
