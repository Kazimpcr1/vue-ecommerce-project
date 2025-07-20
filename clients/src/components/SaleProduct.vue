<template>
    <!-- <section class="trend-outfits"> -->
        <!-- <div class="container"> -->
            <!-- <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <h2>Sale Product</h2>
                    </div>
                </div>
            </div> -->


            <!-- <div class="row pt-3"> -->
                <div class="col-sm-6 col-md-6 col-lg-3 py-1">
                    <div class="card product-item shadow h-100">
                        <div class="ribbon-wrapper">
                            <div class="ribbon"> Sale </div>
                        </div>
                        <div class="image-box">
                            <img :src="product.image" width="100%" alt="">
                        </div>
                        <div class="card-body">
                            <a class="text-decoration-none text-dark">
                                <router-link :to="{ name: 'product', params: { id: product.id } }">{{ product.title }}</router-link>
                            </a>
                        </div>
                        <div class="card-footer pt-2 bg-transparent product-item__price">
                            <a @click="addToCart(cardData)" class="btn btn--buy">Add to Card</a>
                            <div class="price">
                                <a class="delivery pt-2 text-decoration-line-through"> 8000.00</a>
                                <!-- <div class="rating">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </div> -->
                                <span><span class="font-weight-bold"></span>{{ product.price }}<i
                                    class="bi bi-currency-dollar"></i><span
                                        class="rouble"></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- </div> -->

            <!-- <AddToCard /> -->

        <!-- </div> -->
    <!-- </section> -->
</template>

<script>

import AddToCard from './AddToCard.vue';

import { mapMutations } from 'vuex'


export default {
    name: 'SaleProduct',

    props: ['product'],

    // props: ['cardData'],

    components: {
        AddToCard,
    },

    data() {
        return {

        }
    },

    methods: {

        addToCart() {
            alert("Card Succssfully Added")
        },

        addToCart() {
            this.$store.dispatch("addProductToCart", {
                product: this.product,
                quantity: 1
            });
        },

    },
}


</script>

<style scoped>

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

.product-item {
    /* height: 330px; */
    /* width: 260px; */
    border: 2px solid #f1f1f0;
    text-align: center;
    padding: 15px;
    position: relative;
}

.card-body a {
    font-size: 1rem;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.7) !important;
    text-align: center;
    text-decoration: none;
    padding: 5px auto;
}

.btn--buy:hover {
    background-color: #e3a049;
}

.price span {
    font-size: 18px;
    font-weight: 600;
}

.btn {
    display: block;
    /* background-color: #cc324b; */
    background-color: #e3a049;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 14px;

    text-align: center;
    padding: 6px 7px;
    text-decoration: none;
}

a.btn {
    color: #fff;
}

.product-item {
    position: relative;
}

.product-item .image-box {
    height: 280px;
}

.product-item .image-box img {
    height: 100%;
    width: 100%;
    object-fit: fill;
}

.product-item__price {
    width: 100%;
    height: 50px;
}

.product-item__price .rating i {
    margin: 0 2px;
    font-size: 14px;
}

.btn--buy,
.price {
    position: absolute;
    bottom: 20px;
}

.price {
    right: 20px;
}

/*Corner ribbons*/

.ribbon-wrapper {
    /* background-color: blue; */
    width: 90px;
    height: 90px;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
}

.ribbon {
    font: 20px Roboto Condensed;
    color: #fff;
    background-color: #cc324b;
    text-align: center;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    position: relative;
    padding: 3px 0;
    left: -30px;
    /*top: 15px;*/
    top: 15px;
    width: 120px;
    /*  -webkit-box-shadow: 5px 2px 3px rgba(229,229,229,0.9);
  -moz-box-shadow:    5px 2px 3px rgba(229,229,229,0.9);
  box-shadow:         5px 2px 3px rgba(229,229,229,0.9);*/
}

/* .product-item ul {
    text-align: left;
    font-size: 18px;
    line-height: 18px;
    color: #338dc9;
}

.product-item li span {
    color: #34363d;
    font-size: 14px;
} */

.delivery {
    font-size: 14px;
    color: #888888;
    margin:  0 0 1px 0px;
    display: block;
    text-align: end;

}
</style>