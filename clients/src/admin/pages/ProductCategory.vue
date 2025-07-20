<template>
    <TopHeader></TopHeader>
    <NavbarHeader></NavbarHeader>

    <div class="container-fluid">
        <div class="row">
            <SideNavbar></SideNavbar>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h4 class="font-weight-bold">Categories</h4>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group me-2">
                            <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Share</button> -->
                            <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"><i class="bi bi-plus"></i> Add Category</button>
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar" class="align-text-bottom"></span>
                            This week
                        </button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <!-- cart items details -->

                        <div class="small-container cart-page table-responsive">
                            <table>
                                <tr>
                                    <th>S.No</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>

                                <tr v-for="(category, index) in categories" :key="category._id">
                                    <td>{{ getSerialNumber(index) }}</td>
                                    <td>
                                        <div class="cart-info">
                                            <img :src="category.image" alt="" />
                                        </div>
                                    </td>
                                    <td>{{ category.name }}</td>
                                    <td>{{ category.description }}</td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white" href=""><i
                                                class="bi bi-pencil-square"></i></a>
                                        <a class="btn btn-sm btn-danger text-white" @click="deleteCategory(category._id)"><i
                                                class="bi bi-trash3-fill"></i></a>

                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>





    <!-- Modal -->
    <div class="modal fade bg-transparent" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div aria-live="polite" aria-atomic="true" class="position-fixed top-0 end-0 p-3">
                <div class="toast align-items-center text-white bg-success border-0" role="alert" aria-live="assertive"
                    aria-atomic="true" data-bs-delay="5000" ref="successToast">
                    <div class="d-flex">
                        <div class="toast-body">
                            Data saved successfully!
                        </div>
                        <button type="button" class="btn-close ms-auto me-2" data-bs-dismiss="toast"
                            aria-label="Close"></button>
                    </div>
                </div>
            </div>
            <div class="modal-content">
                <form @submit.prevent="addCategory">
                    <div class="modal-header border-0 bg-dark text-white">
                        <h5 class="modal-title" id="staticBackdropLabel">Add Category</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body pt-0 text-left">
                        <!-- <div class="container">
                            <div class="row"> -->
                        <div class="col-md-12 py-1">
                            <div class="">
                                <label for="category_name">Category Name</label>
                                <input class="form-control form-control-sm rounded-0 shadow-none border border-dark"
                                    type="text" id="category_name" v-model="name" name="category-name" />
                                <div v-if="errors.name" class="error">{{ errors.name }}</div>
                            </div>
                        </div>
                        <div class="col-md-12 py-1">
                            <div class="">
                                <label for="category_image">Category Image (Url)</label>
                                <input class="form-control rounded-0 shadow-none border border-dark" type="text"
                                    id="category_image" v-model="image" name="category-name" />
                                <div v-if="errors.image" class="error">{{ errors.image }}</div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="">
                                <label for="category_desc">Category Description</label>
                                <textarea class="form-control form-control-sm rounded-0 shadow-none border border-dark"
                                    id="category_desc" v-model="description" rows="3"></textarea>
                                <div v-if="errors.description" class="error">{{ errors.description }}</div>
                            </div>
                        </div>
                        <!-- </div>
                        </div> -->
                    </div>
                    <div class="modal-footer border-0 pt-0 justify-content-end">
                        <button type="button" class="btn btn-sm border border-secondary btn-outline-secondary w-auto mx-2"
                            data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-sm btn-primary w-auto">Save Category</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

import TopHeader from '../layout/TopHeader.vue';
import NavbarHeader from '../layout/NavbarHeader.vue';
import OrderList from '../components/OrderList.vue';
import SideNavbar from '../layout/SideNavbar.vue';

export default {
    name: 'ProductCategory',

    components: {
        OrderList,
        SideNavbar,
        TopHeader,
        NavbarHeader,
    },

    data() {
        return {
            serialNumber: 1,
            name: "",
            image: "",
            description: "",
            errors: {},



            categories: []
        };
    },

    mounted() {
        this.getCategories();
    },

    methods: {
        getSerialNumber(index) {
            return index + this.serialNumber;
        },

        addCategory() {

            this.validateForm();

            // check if form input is valid
            if (this.isFormInvalid) {
                return;
            }

            // Clear any previous errors
            const category = {
                name: this.name,
                image: this.image,
                description: this.description
            };

            // make API call to add user
            axios.post('http://localhost:5000/api/categories', category)
                .then(response => {
                    // handle successful response
                    console.log(response.data, "category store");
                    this.$refs.successToast.classList.add("show");
                    // clear form input values
                    this.name = '';
                    this.image = '';
                    this.description = '';
                    this.getCategories();
                })
                .catch(error => {
                    // handle error
                    console.log(error.response.data, "data are not store");
                });
                
        },

        validateForm() {
            this.errors = {};
            if (!this.name) {
                this.errors.name = 'Name is required.';
            }
            if (!this.image) {
                this.errors.image = 'Image Url is required.';
            } else {
                const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
                if (!urlRegex.test(this.image)) {
                    this.errors.image = 'Please enter a valid URL.';
                }
            }
            if (!this.description) {
                this.errors.description = 'Description is required.';
            }
        },


        ////////////////////Show Categories/////////////////////
        async getCategories() {
            try {
                const response = await axios.get('http://localhost:5000/api/categories');
                this.categories = response.data;
            } catch (error) {
                console.error(error);
            }
        },

        ////////////////////Delete Categories/////////////////////////
        async deleteCategory(categoryId) {
            try {
                const response = await fetch(`http://localhost:5000/api/categories/${categoryId}`, {
                    method: 'DELETE'
                });
                const data = await response.json();
                console.log(data.message);
                this.categories = this.categories.filter(category => category._id !== categoryId);
            } catch (error) {
                console.error(error);
            }
        }

    },
    computed: {
        isFormInvalid() {
            return Object.keys(this.errors).length > 0;
        }
    }
}

</script>
<style scoped>
/* all products page */


/* cart items */

.cart-page {
    /* margin: 90px auto; */
}

table {
    width: 100%;
    border-collapse: collapse;
}

.cart-info {
    display: flex;
    flex-wrap: wrap;
}

th {
    text-align: left;
    padding: 5px;
    color: #ffffff;
    background: #3bb1ff;
    font-weight: normal;
}

td {
    padding: 10px 5px;
}

td input {
    width: 40px;
    height: 30px;
    padding: 5px;
}

td a {
    color: blue;
    font-size: 12px;
    text-decoration: none;
}

td img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
}

.total-price {
    display: flex;
    justify-content: flex-end;
}

.total-price table {
    border-top: 3px solid #ff523b;
    width: 100%;
    max-width: 400px;
}

td:last-child {
    text-align: right;
}

th:last-child {
    text-align: right;
}

/* account page */
.account-page {
    padding: 50px 0;
    background: radial-gradient(#fff, #ffd6d6);
}

.form-container {
    background: #ffffff;
    width: 300px;
    height: 400px;
    position: relative;
    text-align: center;
    padding: 20px 0;
    margin: auto;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.form-container span {
    font-weight: bold;
    padding: 0 10px;
    color: #555555;
    cursor: pointer;
    width: 100px;
    display: inline-block;
}

.form-btn {
    display: inline-block;
}

.form-container form {
    max-width: 300px;
    padding: 0 20px;
    position: absolute;
    top: 130px;
    transition: transform 1s;
}

form input {
    width: 100%;
    height: 30px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid #ccc;
}

form .btn {
    width: 100%;
    border: none;
    cursor: pointer;
    margin: 10px 0;
}

form .btn:focus {
    outline: none;
}

#LoginForm {
    left: -300px;
}

#RegForm {
    left: 0;
}

form a {
    font-size: 12px;
}

#Indicator {
    width: 100px;
    border: none;
    background: #ff523b;
    height: 3px;
    margin-top: 8px;
    transform: translateX(100px);
    transition: transform 1s;
}

/* media query for less than 600 screen size */

@media only screen and (max-width: 600px) {
    .row {
        text-align: center;
    }

    .col-2,
    .col-3,
    .col-4 {
        flex-basis: 100%;
    }

    .single-product .row {
        text-align: left;
    }

    .single-product .col-2 {
        padding: 20px 0;
    }

    .single-product h1 {
        font-size: 26px;
        line-height: 32px;
    }

    .cart-info p {
        display: none;
    }
}
</style>