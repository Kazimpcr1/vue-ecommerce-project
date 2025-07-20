<template>

    <AppNavbar />
    <section class="product-detail" style="background-color: #F5F7FA;">

        <div class="container">
            <div class="row justify-content-center">
                <div v-if="loading" class="col-md-12 col-lg-10">
                    <div class="row justify-content-center">
                        <div class="col-sm-2 col-xs-4 text-center">
                            <div class="dots-loader"> </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="error" class="col-md-12 col-lg-12">
                    {{ error }}
                </div>

                <div v-else class="col-md-12 col-lg-12">

                    <div class="row product-card" v-if="product">
                        <div class="col-sm-4 col-md-5">
                            <div class="image-container">
                                <div class="cover-image product-image">
                                    <img :src="product.image" alt="">
                                </div>
                                <!-- <div class="more-image-container">
                                    <div class="more-image product-image">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alternate.nl%2Fp%2F600x600%2Fk%2FRazer_Kraken___Kitty_Edition___Quartz_gaming_headset%40%40kh-r59_31.jpg&f=1&nofb=1"
                                            alt="">
                                    </div>
                                    <div class="more-image product-image">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komplett.no%2Fimg%2Fp%2F1144%2F1146947_6.jpg&f=1&nofb=1"
                                            alt="">
                                    </div>
                                    <div class="more-image product-image">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komplett.no%2Fimg%2Fp%2F870%2F1146947_4.jpg&f=1&nofb=1"
                                            alt="">
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <div class="col-sm-8 col-md-7">
                            <div class="product-info">
                                <!-- <a href="#" class="free-shipping">Free shipping</a> -->
                                <h3 class="product-name">{{ product.title }}</h3>
                                <p class="offer-info">{{ product.description }}</p>
                                <strong class="offer-info">{{ product.category }}</strong>
                                <div class="d-flex justify-items-center">
                                    <p class="discount-price">{{ product.price }}<i class="bi bi-currency-dollar"></i>
                                    </p>
                                    <p class="regular-price my-auto justify-items-center px-2">{{
                                        product.price +
                                            25 / 100 * product.price
                                    }}
                                    </p>
                                </div>
                                <!-- <a href="#" class="add-to-cart">
                                     Add to cart
                                </a> -->
                                <div class="d-flex justify-content-start">
                                    <div class="stock d-inline-flex p-2">
                                        <div class="stock-status"></div>
                                        <p class="stock-info m-auto">in stock.</p>
                                    </div>
                                    <div class="quantity-toggle" id="quentity">
                                        <button class="dec-btn" @click="decrement()"> &mdash;</button>
                                        <input type="text" :value="quantity" readonly>
                                        <button class="inc-btn" @click="increment()">&#xff0b;</button>
                                    </div>
                                </div>
                                <div class="buttons">
                                    <a class="btn button" @click="addToCart(cardData)">
                                        Add to Cart
                                    </a>
                                    <RouterLink to="/CheckOut" @click="addToCart(cardData)">
                                        <a class="btn button">
                                            Buy Now
                                        </a>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Product Delivery //-->
      <div class="w-100 list-group list-group-horizontal-lg my-5">
         <div class="list-group-item col-lg-4 d-flex">
            <div style="max-width:3rem;">
               <svg class="w-100" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m511.98 222.49c-0.033-2.573-1.021-5.096-2.894-7.009l-96.095-98.118c-1.919-1.958-4.545-3.063-7.287-3.063h-395.51c-5.632 0-10.199 4.566-10.199 10.199v228.61c0 5.633 4.567 10.199 10.199 10.199h26.395c4.626 19.686 22.322 34.392 43.4 34.392s38.774-14.705 43.401-34.392h208.56c4.626 19.686 22.323 34.392 43.401 34.392s38.774-14.705 43.4-34.392h83.042c5.632 0 10.199-4.566 10.199-10.199v-130.49c-2e-3 -0.045-0.014-0.085-0.021-0.128zm-157.78-87.791h47.217l76.117 77.719h-123.33v-77.719zm-274.21 242.6c-13.34 0-24.193-10.853-24.193-24.193s10.853-24.193 24.193-24.193c13.341 0 24.194 10.853 24.194 24.193s-10.853 24.193-24.194 24.193zm218.41-34.392h-175c-4.626-19.687-22.323-34.392-43.401-34.392s-38.774 14.705-43.4 34.392h-16.196v-68.616h278v68.616zm0-89.015h-278v-119.19h278v119.19zm76.96 123.41c-13.341 0-24.193-10.853-24.193-24.193s10.853-24.193 24.193-24.193 24.193 10.853 24.193 24.193-10.853 24.193-24.193 24.193zm116.24-123.41h-56.562c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h56.562v68.616h-72.841c-4.626-19.687-22.322-34.392-43.4-34.392s-38.774 14.705-43.401 34.392h-13.16v-208.21h15.004v87.919c0 5.633 4.567 10.199 10.199 10.199h147.6v21.075z"/><path d="m396.3 253.89h-11.985c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h11.985c5.632 0 10.199-4.566 10.199-10.199 0-5.632-4.567-10.199-10.199-10.199z"/></svg>
            </div>
            <div class="flex-grow-1 ps-4">
               <h4 class="fw-bold mb-1">Free delivery over $20</h4>
               <p class="fs-6 mb-0">Free standard over £20 and free express over $200.</p>
            </div>
         </div>
         <div class="list-group-item col-lg-4 d-flex">
            <div style="max-width:3rem;">
               <svg class="w-100" version="1.1" viewBox="0 0 490.08 490.08" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m489.14 311.5-45.03-97.583c-0.03-0.065-1.93-4.798-7.617-5.796l-189.76-31.188c-0.172-0.028-1.824-0.291-3.419 0.018l-189.65 31.17c-3.344 0.548-6.195 2.722-7.617 5.796l-45.029 97.583c-4.109 9.608 5.339 14.978 9.271 14.485h34.822v122.72c0 4.999 3.619 9.261 8.554 10.073l189.76 31.188c0.159 0.026 3.147 0.027 3.31 0l189.76-31.188c4.935-0.813 8.553-5.074 8.553-10.073v-122.72h34.822c3.479 0 6.724-1.775 8.598-4.706 1.873-2.93 2.127-6.619 0.672-9.779zm-462.9-5.931 36.073-78.177 103.72-17.05 63.728-10.474-36.96 105.7h-166.56zm208.63 162.3-169.34-27.834v-114.05h134.52c4.337 0 8.205-2.742 9.635-6.839l25.187-72.026v220.74zm189.76-27.834-169.34 27.834v-220.74l25.187 72.024c1.43 4.098 5.298 6.839 9.635 6.839h134.52v114.05zm-127.28-134.46-36.96-105.7 66.363 10.907 101.09 16.616 36.073 78.177h-166.56z"/><path d="m325.88 83.004h-46.83v-82.908h-67.938v82.908h-46.83l80.799 80.331 80.799-80.331zm-94.352 20.416v-82.908h27.105v82.908h17.75l-31.303 31.123-31.303-31.123h17.751z"/></svg>
            </div>
            <div class="flex-grow-1 ps-4">
               <h4 class="fw-bold mb-1">Free Returns</h4>
               <p class="fs-6 mb-0">Shop with confidence, we offer free returns with all orders!</p>
            </div>
         </div>
         <div class="list-group-item col-lg-4 d-flex">
            <div style="max-width:3rem;">
               <svg class="w-100" version="1.1" viewBox="0 0 395.37 395.37" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m387.88 94.902h-114.17c11.513-6.518 20.934-14.953 28.182-25.278 12.214-17.399 5.531-36.432-7.382-46.241-12.891-9.793-32.99-11.124-46.457 5.285-11.166 13.606-18.507 28.396-23.291 41.08-5.936-7.878-15.366-12.982-25.968-12.982h-2.195c-10.602 0-20.032 5.104-25.968 12.982-4.783-12.684-12.125-27.474-23.291-41.08-13.468-16.409-33.563-15.079-46.457-5.285-12.913 9.809-19.596 28.843-7.382 46.241 7.248 10.325 16.669 18.76 28.182 25.278h-114.18c-4.143 0-7.5 3.358-7.5 7.5v78.016c0 4.142 3.357 7.5 7.5 7.5h10.443v183.81c0 4.142 3.357 7.5 7.5 7.5h344.49c4.143 0 7.5-3.358 7.5-7.5v-183.81h10.442c4.143 0 7.5-3.358 7.5-7.5v-78.016c2e-3 -4.142-3.355-7.5-7.498-7.5zm-282.1-33.896c-7.118-10.139-3.03-20.203 4.178-25.679 3.397-2.581 7.593-4.217 11.901-4.217 4.807 0 9.753 2.038 13.887 7.074 16.036 19.539 23.373 42.41 26.445 55.193-25.777-4.857-44.724-15.721-56.411-32.371zm58.319 303.22h-131.15v-176.31h131.15v176.31zm1e-3 -191.31h-138.56c-0.029 0-0.058-4e-3 -0.087-4e-3s-0.058 4e-3 -0.087 4e-3h-10.357v-63.016h149.09v63.016zm52.195 191.31h-37.195v-176.31h37.195v176.31zm0-191.31h-37.195v-63.016h37.195v63.016zm0-78.016h-37.195v-5.635c0-9.65 7.85-17.5 17.5-17.5h2.195c9.649 0 17.5 7.85 17.5 17.5v5.635zm43.355-56.717c4.134-5.038 9.08-7.074 13.887-7.074 4.308 0 8.504 1.637 11.901 4.217 7.208 5.476 11.296 15.54 4.178 25.679-11.688 16.65-30.635 27.514-56.411 32.371 3.072-12.784 10.408-35.654 26.445-55.193zm-28.355 326.05v-176.31h131.15v176.31h-131.15zm149.09-191.31h-10.356c-0.029 0-0.058-4e-3 -0.087-4e-3s-0.058 4e-3 -0.087 4e-3h-138.56v-63.016h149.09v63.016z"/></svg>
            </div>
            <div class="flex-grow-1 ps-4">
               <h4 class="fw-bold mb-1">My Points</h4>
               <p class="fs-6 mb-0">Redeem your Points for exclusive rewards!</p>
            </div>
         </div>
      </div>

            <div class="row pt-3">
                <div class="section-title">
                    <h2>Related Products</h2>
                    <hr>
                    <span></span>
                </div>
            </div>

            <div v-if="loading" class="row">
                <!-- <div class="row pt-3 justify-content-center">
                    <div class="col-sm-2 col-xs-4 text-center">
                        <div class="dots-loader"> </div>
                    </div>
                </div> -->
            </div>
            <div v-else-if="error" class="row">
                {{ error }}
            </div>
            <div v-else class="row related-products">
                <RelatedProducts v-for="product in related" :key="product.id" :product="product" />
            </div>

        </div>
    </section>

   

    <AppFooter />
</template>

<script>

import { mapState, mapActions } from 'vuex';

import AppNavbar from '@/components/layout/AppNavbar.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

import RelatedProducts from '@/components/RelatedProducts.vue';


export default {
    name: 'ProdutView',

    props: ['id'],

    components: {
        AppNavbar,
        AppFooter,
        RelatedProducts,
    },

    data() {
        return {
            quantity: 1,
            counter: 0,
            animationDown: {
                translateY: 'translateY(-100%)',
                translateY: 'translateY(100%)'
            }
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },

        product() {
            return this.$store.state.product;
        },

        related() {
            return this.$store.state.relatedProducts;
        },

        loading() {
            return this.$store.state.loading;
        },

        error() {
            return this.$store.state.error;
        },

        // selectedProduct() {
        //     return this.$store.state.selectedProduct;
        // }

    },

    mounted() {
        this.$store.dispatch("getProduct", this.id)
    },

    created() {
        this.fetchData()
    },

    methods: {
        ...mapActions(['fetchData']),

        increment() {
            this.quantity++
        },
        decrement() {
            if (this.quantity === 1) {
                alert('Negative quantity not allowed')
            } else {
                this.quantity--
            }
        },

        addToCart() {
            this.$store.dispatch("addProductToCart", {
                product: this.product,
                quantity: this.quantity,
            });
        }
    }
}


</script>

<style scoped>
.product-detail {
    padding: 100px 0;
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

/* All Related Products -----------------  */

.product-detail .related-products a {
    text-decoration: none !important;
}

.product-detail .related-products .card {
    border: 0;
    background-color: #f2f1f1;
}

.product-detail .related-products .card .card-header {
    height: 280px;
    border: 0;
    padding: 0;
}

.product-detail .related-products .card .card-header img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.product-detail .related-products .card .card-body {
    display: flex;
    justify-content: space-between;
    color: #3e3e3f;
    line-height: 20px;
}

.product-detail .related-products .card .card-body .desc-box h5 {
    font-size: 1rem;
    font-weight: 600;
    color: rgb(0, 0, 0, 0.6);
}

.product-detail .related-products .card .card-body .desc-box p {
    font-size: 0.9rem;
    font-weight: 500;
}


/* Product detail  */

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");


.product-card {
    background: white;
    width: 100%;
    /* max-width: 800px; */
    margin: 0 auto;
    margin-top: 50px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: #dbe2ee 0 0 20px 5px;
    display: flex;
    /* gap: 30px; */
    color: #191847;
    text-align: start;
}

@media only screen and (max-width:480px) {
    .product-card {
    margin-top: 0px;
    padding: 20px 5px;
}
}

.image-container .cover-image {
    width: 100%;
    height: 350px;
    overflow: hidden;

}

.image-container img:hover {
    transform: scale(2.05);

}

.more-image-container {
    display: flex;
}

.more-image {
    width: 100px;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.5s ease-in-out;
}

.free-shipping {
    display: inline-block;
    background: #191847;
    padding: 5px 10px;
    border-radius: 30px;
    font-size: 14px;
    color: white;
    font-weight: 400;
}

.product-name {
    margin: 10px 0 20px 0;
    font-size: 22px;
}

.regular-price {
    text-decoration: line-through;
    font-size: 20px;
    font-weight: 600;
    color: rgb(25, 24, 71, 0.6);
    margin-bottom: 0;
}

.discount-price {
    /* display: inline-block; */
    font-size: 30px;
    font-weight: 700;
}

.offer-info {
    font-size: 14px;
    color: gray;
}

.add-to-cart {
    display: inline-block;
    width: 100%;
    background: #191847;
    color: white;
    padding: 15px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    box-shadow: #e2e9f3 0 5px;
    margin: 20px 0;
}

.add-to-cart ion-icon {
    font-size: 30px;
    margin-bottom: -8px;
}

.add-to-cart:hover {
    background: #e2e9f3;
    box-shadow: #191847 0 5px;
    color: #191847;
}

.add-to-cart:hover ion-icon {
    transform: rotate(360deg);
}

.stock {
    display: flex;
    align-items: center;
    gap: 10px;
}

.stock-status {
    width: 14px;
    height: 14px;
    background: #00d98b;
    border-radius: 50%;
}

.stock-info {
    font-size: 14px;
    font-weight: 600;
    color: black;
}

.buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

@media only screen and (max-width: 480px) {
    .buttons {
        justify-content: center;
    }
}

/* .buttons .button {
    width: 150px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    padding: 6px 5px;
    background-color: #e3a049;
    border: solid rgb(125, 125, 86) 2px;
    border-radius: 50px;
    text-decoration: none;
    margin: 0 2px;
} */

/* Default btn sre-tyling */
/* .btn {
  border: none;
  padding: 15px 30px !important;
}
.btn.btn-outline-white {
  border: 2px solid #fff;
  background: none;
  color: #fff;
}
.btn.btn-outline-white:hover {
  background: #fff;
  color: #2d71a1;
} */
.buttons .button {
    background: #2d71a1;
    background: linear-gradient(-45deg, #1391a5, #274685);
    color: #fff;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
    padding: 10px 20px !important;
    margin: 0 3px;
    font-size: 16px;
}


.buttons .button:hover {
    /* box-shadow: #e2e9f3 0 0 10px; */
    box-shadow: 0 0 0.8rem 0.1rem rgba(23, 146, 187, 0.2), 0 20px 30px -10px rgba(0, 0, 0, 0.26);

}

.buttons .button:hover ion-icon {
    transform: rotate(360deg);
}



/* counter  */

#quentity {
    display: flex;
    /* width: 100%; */
    /* height: 100vh; */
    justify-content: center;
    align-items: center;
    border-radius: 50px;

}

pre {
    background: #eee;
    padding: 1rem;
    border-radius: 5px;
    border-radius: 20px 0 0 20px;

}

.quantity-toggle {
    display: flex;
}

.quantity-toggle input {
    border: 0;
    /* border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd; */
    width: 2.5rem;
    text-align: center;
    /* padding: 0 0.5rem; */
    /* height: 100%; */
}

.quantity-toggle button {
    border: 2px solid #ddd;
    padding: 0.5rem;
    background: #f5f5f5;
    color: #888;
    font-size: 1rem;
    cursor: pointer;
}

.quantity-toggle .dec-btn {
    border-radius: 15px 0 0 15px;
}

.quantity-toggle .inc-btn {
    border-radius: 0 15px 15px 0;
}




/* /////////////////////////////////////Loading//////////////////////////////// */


@-moz-keyframes dots-loader {
    0% {
        -moz-box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    8.33% {
        -moz-box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    16.67% {
        -moz-box-shadow: #f86 14px 14px 0 7px, #fc6 14px 14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 14px 14px 0 7px, #fc6 14px 14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    25% {
        -moz-box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    33.33% {
        -moz-box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae -14px -14px 0 7px;
        box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae -14px -14px 0 7px;
    }

    41.67% {
        -moz-box-shadow: #f86 14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    50% {
        -moz-box-shadow: #f86 14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    58.33% {
        -moz-box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    66.67% {
        -moz-box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px -14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px -14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    75% {
        -moz-box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    83.33% {
        -moz-box-shadow: #f86 14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae 14px 14px 0 7px;
        box-shadow: #f86 14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae 14px 14px 0 7px;
    }

    91.67% {
        -moz-box-shadow: #f86 -14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 -14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    100% {
        -moz-box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }
}

@-webkit-keyframes dots-loader {
    0% {
        -webkit-box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    8.33% {
        -webkit-box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    16.67% {
        -webkit-box-shadow: #f86 14px 14px 0 7px, #fc6 14px 14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 14px 14px 0 7px, #fc6 14px 14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    25% {
        -webkit-box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    33.33% {
        -webkit-box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae -14px -14px 0 7px;
        box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae -14px -14px 0 7px;
    }

    41.67% {
        -webkit-box-shadow: #f86 14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    50% {
        -webkit-box-shadow: #f86 14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    58.33% {
        -webkit-box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    66.67% {
        -webkit-box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px -14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px -14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    75% {
        -webkit-box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    83.33% {
        -webkit-box-shadow: #f86 14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae 14px 14px 0 7px;
        box-shadow: #f86 14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae 14px 14px 0 7px;
    }

    91.67% {
        -webkit-box-shadow: #f86 -14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 -14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    100% {
        -webkit-box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }
}

@keyframes dots-loader {
    0% {
        -moz-box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        -webkit-box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    8.33% {
        -moz-box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        -webkit-box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    16.67% {
        -moz-box-shadow: #f86 14px 14px 0 7px, #fc6 14px 14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        -webkit-box-shadow: #f86 14px 14px 0 7px, #fc6 14px 14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 14px 14px 0 7px, #fc6 14px 14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    25% {
        -moz-box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px 14px 0 7px, #4ae -14px 14px 0 7px;
        -webkit-box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    33.33% {
        -moz-box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae -14px -14px 0 7px;
        -webkit-box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae -14px -14px 0 7px;
        box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae -14px -14px 0 7px;
    }

    41.67% {
        -moz-box-shadow: #f86 14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        -webkit-box-shadow: #f86 14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    50% {
        -moz-box-shadow: #f86 14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        -webkit-box-shadow: #f86 14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    58.33% {
        -moz-box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        -webkit-box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    66.67% {
        -moz-box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px -14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        -webkit-box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px -14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px -14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    75% {
        -moz-box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px -14px 0 7px, #4ae 14px -14px 0 7px;
        -webkit-box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px -14px 0 7px, #4ae 14px -14px 0 7px;
        box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px -14px 0 7px, #4ae 14px -14px 0 7px;
    }

    83.33% {
        -moz-box-shadow: #f86 14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae 14px 14px 0 7px;
        -webkit-box-shadow: #f86 14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae 14px 14px 0 7px;
        box-shadow: #f86 14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae 14px 14px 0 7px;
    }

    91.67% {
        -moz-box-shadow: #f86 -14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        -webkit-box-shadow: #f86 -14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 -14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }

    100% {
        -moz-box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        -webkit-box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
        box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    }
}

/* :not(:required) hides this rule from IE9 and below */
.dots-loader:not(:required) {
    overflow: hidden;
    position: relative;
    text-indent: -9999px;
    display: inline-block;
    width: 7px;
    height: 7px;
    background: transparent;
    border-radius: 100%;
    -moz-box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    -webkit-box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    -moz-animation: dots-loader 5s infinite ease-in-out;
    -webkit-animation: dots-loader 5s infinite ease-in-out;
    animation: dots-loader 5s infinite ease-in-out;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
}
</style>