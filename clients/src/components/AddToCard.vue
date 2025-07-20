<template>
    <div class="container">
        <div class="row">

            <div class="product" v-for="item in cartItems" :key="item.id">
                <div class="product-image">
                    <img :src="item.image">
                </div>
                <div class="product-details">
                    <div class="product-title">{{ item.title }}</div>
                    <p class="product-description"></p>
                </div>
                <div class="product-price">{{ item.price }}</div>
                <div class="product-quantity">
                    <input type="number" min="1">
                </div>
                <div class="product-removal">
                    <button class="remove-product">
                        Remove
                    </button>
                </div>
                <div class="product-line-price"></div>
            </div>

        </div>
    </div>
</template>



<script>
import { mapState } from 'vuex'

export default{
    name : 'AddToCard',

    computed: {
    ...mapState(['cart'])
  },

//   computed:{
    cartItems(){
     return this.cart
    }
//   }

}
</script>


<style>

.product-image {
    float: left;
    width: 20%;
}

.product-details {
    float: left;
    width: 37%;
}

.product-price {
    float: left;
    width: 12%;
}

.product-quantity {
    float: left;
    width: 10%;
}

.product-removal {
    float: left;
    width: 9%;
}

.product-line-price {
    float: left;
    width: 12%;
    text-align: right;
}

</style>