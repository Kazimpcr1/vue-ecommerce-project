<template>

    <AppNavbar />
    <AppSlider />

    <section class="categories-product py-5" style="background-color: #F5F7FA;">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-md-3">
                    <div class="categorie-name category-checkbox text-start">
                        <h5>Categories</h5>

                        <div class="list-group border-0 text-start">

                            <!-- <div class="custom-control list-group-item list-group-item-action custom-checkbox border-0">
                                <input type="checkbox" class="custom-control-input" v-bind:value="Category"
                                    v-bind:id="Category">
                                <RouterLink to="/categories-details">Sandals</RouterLink>
                            </div> -->

                            <!-- <div class="custom-control list-group-item list-group-item-action custom-checkbox border-0"
                                v-for="Category in categories" :key="Category">
                                <input type="checkbox" class="custom-control-input" v-bind:value="Category"
                                    v-bind:id="Category">
                                <label class="custom-control-label" v-bind:for="Category">{{ Category }}</label>
                            </div> -->


                            <div class="custom-control list-group-item list-group-item-action custom-checkbox py-1 border-0"
                                style="background:transparent;">
                                <input type="checkbox" class="custom-control-input bg-transparent"
                                    v-model="allOptionSelected" style="accent-color: #274685;" id="all_product" checked>
                                <label class="custom-control-label" for="all_product">All Products</label>
                                <!-- ////////////// -->
                                <div class="pt-1 pt-sm-0" v-for="category in categories" :key="category">
                                    <input type="checkbox" class="custom-control-input bg-transparent"
                                        v-model="selectedCategories" style="accent-color: #274685;"
                                        @change="toggleCategory(category)" :value="category.name"
                                        v-bind:id="category.name">
                                    <label class="custom-control-label" v-bind:for="category.name">{{
                                        category.name
                                    }}</label>
                                </div>
                            </div>




                            <!--<a class="list-group-item list-group-item-action border-0 ">
                                <input type="checkbox">
                                <RouterLink to="/categories-details">Sandals</RouterLink>
                            </a>
                             <a class="list-group-item list-group-item-action border-0" v-for="Category in categories"
                                :key="Category">
                                <input type="checkbox">
                                <RouterLink to="/categories-details">{{ Category }}</RouterLink>
                            </a> -->
                        </div>
                    </div>
                    <hr>

                    <div class="categorie-name pt-3 text-start">
                        <h5>Filter by Price</h5>

                        <div class=" d-flex price-range-value justify-content-center">
                            <div class="">
                                <label type="text" aria-label="min" class="form-control border-0">Minimum</label>
                                <!-- <input type="number" min="0" max="10000" step="1" v-model="minInputPrice"> -->
                            </div>
                            <div class="">
                                <label type="text" aria-label="max" class="form-control border-0">Maximum</label>
                                <!-- <input type="number" min="0" max="10000" step="1" v-model="maxInputPrice"> -->
                            </div>
                        </div>
                        <!-- <div class="input-group">
                            <input type="number" class="form-control" id="min-price" v-model="minInputPrice"
                                placeholder="Min">
                            <input type="number" class="form-control" id="max-price" v-model="maxInputPrice"
                                placeholder="Max">
                            <button class="btn btn-outline-secondary px-2" type="submit"
                                @click.prevent="applyPriceRangeFilter"><i class="bi bi-arrow-right-short"></i></button>
                        </div> -->

                        <div>
                            <div id="app" class="price-filter-range">
                                <div class='range-slider'>
                                    <input type="range" min="0" max="10000" step="1" v-model="minInputPrice">
                                    <input type="number" min="0" max="10000" step="1" v-model="minInputPrice">
                                    <input type="range" min="0" max="10000" step="1" v-model="maxInputPrice">
                                    <input type="number" min="0" max="10000" step="1" v-model="maxInputPrice">
                                </div>
                            </div>
                        </div>

                    </div>

                    <hr>
                    <div class="categorie-name pt-3 text-start">
                        <h5>Featured Products</h5>
                    </div>
                    <div class="row">
                        <div class="col-6 col-sm-12">
                            <div class="card mb-3 border-0">
                                <div class="row g-0 py-1">
                                    <div class="col-md-6">
                                        <div class="future-produt-image">
                                            <img src="https://cdn.shopify.com/s/files/1/0508/2690/3702/products/02SECL22V12S_2_d23cf314-394c-4b8e-945b-ca6d0d792130.jpg?v=1666253009"
                                                width="100%" class="img-fluid rounded-start" alt="...">
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-flex m-auto">
                                        <div class="card-body">
                                            <h5 class="card-title">pink-dress</h5>
                                            <p class="card-text">Rs. 2000</p>
                                            <!-- <p class="card-text"><small class="text-muted">Best Product</small></p> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-sm-12">
                            <div class="card mb-3 border-0">
                                <div class="row g-0 py-1">
                                    <div class="col-md-6">
                                        <div class="future-produt-image">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj2-WeQiuhHSU0B7oUF5nXVQzmcpZPG-HDKaXVv_DAY6YhcI0OZZKsup-_quscrLJbTQw&usqp=CAU"
                                                width="100%" class="img-fluid rounded-start" alt="...">
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-flex m-auto">
                                        <div class="card-body">
                                            <h5 class="card-title">Blue-dress</h5>
                                            <p class="card-text">Rs. 2000</p>
                                            <!-- <p class="card-text"><small class="text-muted">Best Product</small></p> -->
                                        </div>
                                        <!-- <RouterLink :to="{name: 'product', params : {id : items.id}}">New</RouterLink> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8 col-md-9">
                    <div class="row">
                        <div class="col-12">
                            <div class="brand-filtration d-flex justify-content-between py-1">
                                <span>
                                    Products
                                </span>
                                <div class="d-flex">
                                    <form class="d-flex">
                                        <label for="filter-by-name">Filter by Brand : </label>
                                        <select id="filter-by-name" v-model="selectedName"
                                            style="background:transparent;">
                                            <option value="">All</option>
                                            <option v-for="item in products" :value="item.category">{{ item.category }}
                                            </option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </div>
                    <div v-if="loading" class="row justify-content-center pt-5 all-products">
                        <div class="col-sm-2 col-xs-4 text-center">
                            <div class="dots-loader"> </div>
                        </div>
                    </div>
                    <div v-else-if="error" class="row all-products">
                        <div class="empty-state">
                            <div class="empty-state__content">
                                <div class="empty-state__icon">
                                    <img src="data:image/png;base64,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"
                                        alt="">
                                </div>
                                <div class="empty-state__message">No product has been found.</div>
                                <div class="empty-state__help">
                                    Check daily we will update any time
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="row all-products">
                        <div class="col-6 col-sm-12 col-md-6 col-lg-4 col-xl-3 py-3" v-for="item in paginatedItems"
                            :key="item.id">
                            <div class="card h-100 shadow">
                                <div class="card-header">
                                    <img :src="item.image" alt="">
                                </div>
                                <div class="card-body px-1 py-2">
                                    <div class="desc-box text-center">
                                        <a class="text-decoration-none">
                                            <router-link tag="a" :to="{ name: 'product', params: { id: item.id } }">
                                                {{ item.title }}</router-link>
                                        </a>
                                    </div>
                                </div>
                                <div class="card-footer d-flex py-2">
                                    <p class="card-subtitle pt-2">{{ item.category }}</p>
                                    <p class="product_price">{{ item.price }}<b class=""> <i class="bi bi-currency-dollar"></i></b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- ////////////////////////////////////////// -->


                        <div v-if="paginatedItems.length === 0">
                            <div class="empty-state">
                                <div class="empty-state__content">
                                    <div class="empty-state__icon">
                                        <img src="data:image/png;base64,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"
                                            alt="">
                                    </div>
                                    <div class="empty-state__message">No Product has been found.</div>
                                    <div class="empty-state__help">
                                        Check daily we will update any time
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="row">
                            <div class="col-3">
                                <div v-for="product in productsByCategory" :key="product.id">
                                    {{ product.name }}
                                </div>
                            </div>
                        </div> -->

                        <div class=" pt-3" v-if="showPagination">
                        <div class="pagination justify-content-center">
                            <button class="btn btn-sm text-white" @click="previousPage"
                                style="width:90px; background: linear-gradient(-45deg, #1391a5, #274685);"><i
                                    class="bi bi-chevron-double-left"></i> Previous</button>
                            <span class="mx-2"
                                style="width:fit-content; background-color: transparent; font-size: 18px; font-weight: 600; border: 0; color: #000;">{{
                                    currentPage
                                }} of {{ totalPages }}</span>
                            <button class="btn btn-sm text-white" @click="nextPage"
                                style="width:90px; background: linear-gradient(-45deg,#274685, #1391a5 );">Next <i
                                    class="bi bi-chevron-double-right"></i></button>
                        </div>
                    </div>

                    </div>
                    
                </div>
            </div>
        </div>
    </section>


    <AppFooter />

</template>

<script>
import axios from "axios";
import { mapActions } from 'vuex'; // Data from store

import { mapState } from 'vuex'

import { mapGetters } from 'vuex';

import AppNavbar from '@/components/layout/AppNavbar.vue';
import AppSlider from '@/components/layout/AppSlider.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

export default {
    name: 'CategorieView',
    el: '#app',
    components: {
        AppNavbar,
        AppSlider,
        AppFooter
    },

    data() {
        return {
            minInputPrice: 1,
            maxInputPrice: 10000,

            selectedName: '',
            allOptionSelected: true,
            selectedCategories: [],

            page: 1,
            limit: 8,

            minAngle: 10,
            maxAngle: 30,
        }
    },


    // new API Product Array -------------------------------start
    created() {
        this.$store.dispatch('fetchProducts');
    },


    // mounted() {
    //     this.$store.dispatch("getProduct", this.id)
    // },
    // computed: {

    // },
    // new API Product Array --------------------------------End


    computed: {
        sliderMin: {
            get: function () {
                var val = parseInt(this.minAngle);
                return val;
            },
            set: function (val) {
                val = parseInt(val);
                if (val > this.maxAngle) {
                    this.maxAngle = val;
                }
                this.minAngle = val;
            }
        },
        sliderMax: {
            get: function () {
                var val = parseInt(this.maxAngle);
                return val;
            },
            set: function (val) {
                val = parseInt(val);
                if (val < this.minAngle) {
                    this.minAngle = val;
                }
                this.maxAngle = val;
            }
        },

        //////////////////1st Methods////////////////

        // Function for Filteration By Price and Brand name 
        // filteredItems() {
        //     let filtered = this.products;
        //     if (this.selectedName !== '') {
        //         filtered = filtered.filter(item => item.category === this.selectedName)
        //     }
        //     if (this.minInputPrice !== null && this.maxInputPrice !== null) {
        //         filtered = filtered.filter(item => {
        //             return item.price >= this.minInputPrice && item.price <= this.maxInputPrice
        //         })
        //     }
        //     return filtered;
        // },


        //////////////////2nd Methods////////////////

        filteredItems() {
            let filtered = this.products;
            // if (this.allOptionSelected) {
            //     return filtered;
            // }
            if (!this.allOptionSelected) {
                if (this.allOptionSelected) {
                    return filtered;
                }
                if (this.selectedCategories.length === 0) {
                    return [];
                }
                if (this.selectedCategories.length > 0) {
                    filtered = filtered.filter(item => this.selectedCategories.includes(item.category))
                }

            }
            if (this.minInputPrice !== null && this.maxInputPrice !== null) {
                filtered = filtered.filter(item => {
                    return item.price >= this.minInputPrice && item.price <= this.maxInputPrice
                })
            }
            return filtered;
        },

        paginatedItems() {
            return this.filteredItems.slice((this.page - 1) * this.limit, this.page * this.limit);
        },
        totalPages() {
            return Math.ceil(this.filteredItems.length / this.limit);
        },
        currentPage() {
            return this.page;
        },

        showPagination() {
            return this.filteredItems.length > this.limit;
        },

        //////////////////////////////////////////////////////////////

        products() {
            return this.$store.getters.products;
        },

        loading() {
            return this.$store.state.loading;
        },

        error() {
            return this.$store.state.error;
        },


        categories() {
            return this.$store.getters.uniqueCategories;
        },


        // filter through category 
        filteredProducts() {
            return this.products.filter(product => {
                return this.selectedCategories.includes(product.category)
            })
        },
        ...mapState(['selectedCategories', 'filteredProducts']),
    },

    methods: {
        applyPriceRangeFilter() {
            this.products = this.filteredItems
        },

        previousPage() {
            if (this.page > 1) {
                this.page--;
            }
        },
        nextPage() {
            if (this.page < this.totalPages) {
                this.page++;
            }
        },

    },
}

</script>

<style scoped>
.category-checkbox {}

.category-checkbox .custom-control {}

.category-checkbox .custom-control input {
    margin-right: 10px;
    transform: scale(1.5);
}

.categories-product .card .future-produt-image {
    height: 200px;
    width: 100%;
}

.categories-product .card .future-produt-image img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

/* End Range Slider */


/* All Categories Products -----------------  */

.categories-product .all-products .card {
    border: 0;
}

.categories-product .all-products a {
    text-decoration: none;
}

.categories-product .all-products .card .card-header {
    height: 220px;
    border: 0;
    padding: 0;
    background-color: transparent;
}

.categories-product .all-products .card .card-header img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.categories-product .all-products .card .card-body {
    /* display: flex; */
    /* justify-content: space-between; */
    color: #3e3e3f;
    background-color: #f2f1f1;
    line-height: 20px;

}

.categories-product .all-products .card .card-footer {
    display: flex;
    justify-content: space-between;
    border: 0;
    border-top: 1px solid rgb(0, 0, 0, 0.1);
    background-color: #f2f1f1;
    text-decoration: none;
    color: #000;
    /* padding: 5px auto; */
}

.categories-product .all-products .card .card-body .desc-box a {
    font-size: 0.9rem;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.7) !important;
    text-align: center;
}

.categories-product .all-products .card .card-body .desc-box a:hover {
    color: #068cda;
}

.categories-product .all-products .card .card-footer .card-subtitle {
    font-size: 0.9rem;
    font-weight: 500;
    justify-items: center;
    display: inline-block;
    vertical-align:bottom;
}

.categories-product .all-products .card .card-footer .product_price {
    font-size: 1.1rem;
    font-weight: 700;
}


/* Filtration By Brand --------------------------------------- */
.brand-filtration form select {
    border: 0;
    border-bottom: 1px solid #000;
}

.brand-filtration form select:focus,
.brand-filtration form select:active {
    box-shadow: none;
    outline: 0;
}



/* ///////////////////////////////////Loader////////////////////////////////// */


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



/* /////////  No Recorde Found message  */


.empty-state {
    /* width: 750px; */
    margin: 10px auto;
    background: transparent;
    /* box-shadow: 1px 2px 10px #e1e3ec; */
    border-radius: 4px;
}

.empty-state__content {
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.empty-state__content .empty-state__icon {
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    border-radius: 200px;
    justify-content: center;
    background-color: #f7fafc;
    box-shadow: 0px 2px 1px #e1e3ec;
}

.empty-state__content .empty-state__icon img {
    width: 110px;
}

.empty-state__content .empty-state__message {
    color: #2497e3;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 0.85rem;
}

@media only screen and (max-width:480px) {
    .empty-state__content .empty-state__message {
    font-size: 1.3rem;
}
}

.empty-state__content .empty-state__help {
    color: #a2a5b9;
    font-size: 0.875rem;
}

.credit {
    color: #A2A5B9;
    font-size: 0.75rem;
    text-align: center;
}

.credit a {
    color: #444;
}












/* //////////////////////////// Range //////////////////////////////////  */
.price-filter-range .range-slider {
    width: 100%;
    margin: auto;
    text-align: center;
    position: relative;
    height: 4em;
}

.price-filter-range .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
}

.price-filter-range input[type=number] {
    border: 1px solid #ddd;
    text-align: center;
    font-size: 1em;
    -moz-appearance: textfield;
}

.price-range-value input[type=number] {
    border: 0;
    text-align: center;
    font-size: 1.1rem;
}

.price-range-value label {
    font-size: 0.9rem;
    margin-bottom: -7px;
    background-color: transparent;
}

.price-filter-range input[type=number]::-webkit-outer-spin-button,
.price-filter-range input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.price-filter-range input[type=number]:invalid,
.price-filter-range input[type=number]:out-of-range {
    border: 2px solid #ff6347;
}

.price-filter-range input[type=range] {
    -webkit-appearance: none;
    width: 100%;
}

.price-filter-range input[type=range]:focus {
    outline: none;
}

.price-filter-range input[type=range]:focus::-webkit-slider-runnable-track {
    background: #2497e3;
}

.price-filter-range input[type=range]:focus::-ms-fill-lower {
    background: #2497e3;
}

.price-filter-range input[type=range]:focus::-ms-fill-upper {
    background: #2497e3;
}

.price-filter-range input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    background: #2497e3;
    border-radius: 1px;
    box-shadow: none;
    border: 0;
}

.price-filter-range input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    box-shadow: 0px 0px 0px #000;
    border: 1px solid #2497e3;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #a1d0ff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
}
</style>