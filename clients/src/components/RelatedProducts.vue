<template>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3 py-3 related-product-card-box">
        <div class="card h-100 shadow">
            <div class="card-header">
                <img :src="product.image" alt="">
            </div>
            <div class="card-body py-2">
                <div class="desc-box text-center">
                    <a class="text-decoration-none">
                        <router-link :to="{ name: 'product', params: { id: product.id } }">
                            {{ product.title }}</router-link>
                    </a>
                </div>
            </div>
            <div class="card-footer py-1">
                <p class="card-subtitle">{{ product.category }}</p>
                <p class="">{{ product.price }}<b class=""> <i class="bi bi-currency-dollar"></i></b>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],
}
</script>

<style>
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
    object-fit: fill;
    padding: 0 30px;
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



/* All Categories Products -----------------  */

.related-product-card-box .card {
    border: 0;
}

.related-product-card-box a {
    text-decoration: none;
}

.related-product-card-box .card .card-header {
    height: 280px;
    border: 0;
    padding: 0;
    background-color: transparent;

}

.related-product-card-box .card .card-header img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.related-product-card-box .card .card-body {
    /* display: flex; */
    /* justify-content: space-between; */
    color: #3e3e3f;
    background-color: #f2f1f1;
    line-height: 20px;

}

.related-product-card-box .card .card-footer {
    display: flex;
    justify-content: space-between;
    border: 0;
    background-color: #f2f1f1;
    text-decoration: none;
    color: #000;
    /* padding: 5px auto; */
}

.related-product-card-box .card .card-body .desc-box a {
    font-size: 1.05rem;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.7) !important;
    text-align: center;
}

.related-product-card-box .card .card-body .desc-box a:hover {
    color: #068cda;
}

.related-product-card-box .card .card-footer p {
    font-size: 1rem;
    font-weight: 500;
}
</style>