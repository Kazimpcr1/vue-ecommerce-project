<template>
    <div class="modal fade" id="childModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Shopping Cart</h5>
                    <button type="button" class="btn close" @click="$emit('close')" data-dismiss="modal" aria-label="Close">X
                        <!-- <span aria-hidden="true">&times;</span> -->
                    </button>
                </div>
                <div class="modal-body">
                    <!-- Modal body content here -->
                    <table v-if="cart.length === 0" class="table table-image">
                        <tbody>
                            <tr>
                                <td class="text-center ">
                                    <img src="@/assets/icons/cart.png" style="width: 100px;" >
                                    <p>Shopping Cart Empty</p>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    <table v-else class="table table-image">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Total</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- <tr >
              <td class="w-25">
                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png" class="img-fluid img-thumbnail" alt="Sheep">
              </td>
              <td>Vans Sk8-Hi MTE Shoes</td>
              <td>89$</td>
              <td class="qty"><input type="text" class="form-control" id="input1" value="2"></td>
              <td>178$</td>
              <td>
                <a href="#" class="btn btn-danger btn-sm">
                  <i class="fa fa-times"></i>
                </a>
              </td>
            </tr> -->
                            <tr v-for="itemCart in cart" :key="itemCart.product.id">
                                <td class="w-25">
                                    <img :src="itemCart.product.image" class="img-fluid img-thumbnail" alt="Product Image" style="max-height:100px">
                                </td>
                                <td>{{ itemCart.product.title }}</td>
                                <td>{{ itemCart.product.price }}</td>
                                <td class="qty"><input type="text" class="form-control p-0 py-1 text-center" id="input1"
                                        style="width:40px !important; box-shadow: none; " v-model="itemCart.quantity">
                                </td>
                                <td>{{ itemCart.product.price * itemCart.quantity }}$</td>
                                <td>
                                    <a class="btn btn-danger btn-sm" @click.prevent="removeProduct(itemCart.product)">
                                        <i class="fa fa-times"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-end">
                        <h5>Total: <span class="price text-success">{{ subTotal2 }}$</span></h5>
                    </div>
                </div>
                <div v-if="cart.length === 0" class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                    <button class="btn btn-success text-decoration-none text-white " disabled>Checkout</button>
                </div>
                <div v-else class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-secondary">Close</button>
                    <RouterLink to="/CheckOut" >
                        <a class="btn btn-success text-decoration-none text-white">Checkout</a>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            showModal: false
        }
    },


    computed: {
        cart() {
            return this.$store.state.cart;
        },

        totalPriceCount() {
            return this.cart.map(itemCart => itemCart.quantity * itemCart.product.price);
        },

        subTotal2() {
            return this.totalPriceCount.reduce((total, price) => total + price, 0).toFixed(2);
        },
    },


    methods: {

        // increment() {
        //     this.quantity++
        // },
        // decrement() {
        //     if (this.quantity === 1) {
        //         alert('Negative quantity not allowed')
        //     } else {
        //         this.quantity--
        //     }
        // },

        removeProduct(product) {
            console.log("clicked")
            this.$store.dispatch("removeProduct", product);

        },

        // closeModal() {
        //     this.$emit('close');
        // },

        // closeModal() {
        //     this.showModal = false;
        // }
    }
}

</script>


<style scoped>
/* .modal {
    z-index: 999999;
} */

nav a.router-link {
    color: #fff;
}


/* .container {
    padding: 2rem 0rem;
}  */


/* .table-image thead td,
.table-image thead th {
    border: 0;
    color: #666;
    font-size: 0.8rem;
}

.table-image td,
.table-image th {
    vertical-align: middle;
    text-align: center;
}

.table-image td.qty,
.table-image th.qty {
    max-width: 2rem;
}

.price {
    margin-left: 1rem;
}

.modal-footer {
    padding-top: 0rem;
} */
</style>