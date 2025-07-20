<template>
    <section class="descount-item">
        <div class="container">
            <div class="row">
                <div class="col-md-8  py-1">
                    <div class="card discount-item-image">
                        <img :src="product.image" class="card-img-top" alt="">
                        <div class="card-img-overlay ">
                            <span class="bg-danger px-2 py-1 rounded float-end text-white">Sale</span>
                            <div class="float-start">
                                <!-- <h3 class="text-dark font-weight-bold">
                                    Get Comfort in <br>Your Fashion
                                </h3> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 py-1">
                    <div
                        class="card discount-item-desc h-100 bg-light text-white d-flex align-items-center p-3 justify-content-center">
                        <!-- <img src="../assets/product/woman-1284029__340.jpg" class="card-img" alt="..."> -->
                        <div class="card-body text-dark " style="display:contents">
                            <h4 class="card-title">SALE</h4>
                            <h3 class="card-text font-weight-bold">40% OFF</h3>
                            <a class="btn" 
                                style=" border: 1px solid #000; background: transparent; padding: 5px 7px; border-radius: 0;">
                                <router-link :to="{ name: 'product', params: { id: product.id } }">SHOP NOW</router-link>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'DiscountItem',
    props: ['product']
}

</script>
<style>
.descount-item {
    margin-top: 80px;
}

.descount-item .card {
    height: 260px;
    overflow: hidden;
    border: 0;
}

.descount-item .card img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.discount-item-image,
.discount-item-desc {
    background-image: linear-gradient(rgb(224, 186, 186), rgb(224, 186, 186, 0.5));
}

.card .card-body a{
    text-decoration: none;
    color: #000;
}
</style>