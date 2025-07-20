<template>
    <TopHeader></TopHeader>
    <NavbarHeader></NavbarHeader>

    <div class="container-fluid">
        <div class="row">
            <SideNavbar></SideNavbar>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h4 class="">Register User</h4>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group me-2">
                            <div class="btn-group rounded me-2">
                                <input type="text" class="" placeholder="Search..." />
                                <button type="button" class="btn btn-sm btn-outline-secondary"><i
                                        class="bi bi-search"></i></button>
                            </div>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar" class="align-text-bottom"></span>
                            This week
                        </button>
                    </div>
                </div>
                <!-- Bootstrap toast -->
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

                <div aria-live="polite" aria-atomic="true" class="position-fixed top-0 end-0 p-3">
                    <div class="toast align-items-center text-white bg-warning border-0" role="alert" aria-live="assertive"
                        aria-atomic="true" data-bs-delay="5000" ref="warningToast">
                        <div class="d-flex">
                            <div class="toast-body">
                                This Email already exist!
                            </div>
                            <button type="button" class="btn-close ms-auto me-2" data-bs-dismiss="toast"
                                aria-label="Close"></button>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <form @submit.prevent="addUser">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <!-- <label for="name" class="form-label">Name</label> -->
                                    <input type="name" class="form-control form-control-sm rounded-0 shadow-none" id="name"
                                        v-model="name" placeholder="Enter User Name">
                                    <span v-if="errors.name" class="error text-danger">{{ errors.name }}</span>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input type="text" class="form-control form-control-sm rounded-0 shadow-none"
                                        id="number" v-model="number" placeholder="Enter User Phone No">
                                    <span v-if="errors.number" class="error text-danger">{{ errors.number }}</span>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input type="email" class="form-control form-control-sm rounded-0 shadow-none"
                                        id="email" v-model="email" placeholder="Enter User Email">
                                    <span v-if="errors.email" class="error text-danger">{{ errors.email }}</span>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input type="password" class="form-control form-control-sm rounded-0 shadow-none"
                                        id="password" placeholder="Enter User Password" v-model="password">
                                    <span v-if="errors.password" class="error text-danger">{{ errors.password }}</span>
                                </div>
                                <div class="col-12 position-relative text-center">
                                    <button type="submit" class="btn btn-sm w-25 btn-primary mb-0">Add User</button>
                                    <!-- <button type="submit" :disabled="isFormInvalid" class="btn btn-primary">Submit</button> -->
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <hr>

                <div class="row pt-3">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(user, index) in users" :key="user._id">
                                        <th scope="row">{{ getSerialNumber(index) }}</th>
                                        <td>{{ user.name }}</td>
                                        <td>{{ user.number }}</td>
                                        <td>{{ user.email }}</td>
                                        <td class="text-center">
                                            <a class="btn btn-sm shadow-sm border btn-white m-1 text-success" href=""><i
                                                    class="bi bi-pencil-square"></i></a>
                                            <a class="btn btn-sm shadow-sm border btn-white m-1 text-danger"
                                                @click="deleteUser(user._id)"><i class="bi bi-trash3-fill"></i></a>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
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
    name: 'Users',

    components: {
        OrderList,
        SideNavbar,
        TopHeader,
        NavbarHeader,
    },

    data() {
        return {
            serialNumber: 1,
            
            name: '',
            number: '',
            email: '',
            password: '',
            errors: {},

            users: [],
        };
    },

    methods: {
        getSerialNumber(index) {
            return index + this.serialNumber;
        },

        addUser() {
            // validate form input
            this.validateForm();

            // check if form input is valid
            if (this.isFormInvalid) {
                return;
            }

            // // make API call to check if user already exists
            // axios.get(`http://localhost:5000/api/users?email=${this.email}`)
            //     .then(response => {
            //         if (response.data.length > 0) {
            //             // user already exists, show error message or handle it appropriately
            //             console.log("User already exists");
            //             this.$refs.warningToast.classList.add("show");
            //         } else {

            // create a user object with the form input values
            const user = {
                name: this.name,
                number: this.number,
                email: this.email,
                password: this.password
            };

            // make API call to add user
            axios.post('http://localhost:5000/api/users', user)
                .then(response => {
                    // handle successful response
                    console.log(response.data, "data store");
                    this.$refs.successToast.classList.add("show");
                    // clear form input values
                    this.name = '';
                    this.number = '',
                        this.email = '';
                    this.password = '';

                    this.getUsers();
                })
                .catch(error => {
                    // handle error
                    console.log(error.response.data, "data are not store");
                });
            // }
            // })
            // .catch(error => {
            //     // handle error
            //     console.log(error.response.data);
            // });
        },


        validateForm() {
            this.errors = {};
            if (!this.name) {
                this.errors.name = 'Name is required.';
            }
            // if (!this.number) {
            //     this.errors.number = 'Number is required.';
            // }
            if (!this.email) {
                this.errors.email = 'Email is required.';
            } else if (!this.isValidEmail(this.email)) {
                this.errors.email = 'Invalid email format.';
            }
            if (!this.password) {
                this.errors.password = 'Password is required.';
            } else if (this.password.length < 8) {
                this.errors.password = 'Password must be at least 8 characters.';
            }
        },
        isValidEmail(email) {
            // check if email is valid using a regular expression
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },

        // Get Users from database 
        async getUsers() {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                this.users = response.data;
            } catch (error) {
                console.error(error);
            }
        },

        // Delete user by ID
        deleteUser(userId) {
            axios.delete(`http://localhost:5000/api/users/${userId}`)
                .then(response => {
                    console.log(response.data.message);
                    // Refresh the user list after deleting
                    this.getUsers();
                })
                .catch(error => {
                    console.log(error);
                });
        }

    },
    computed: {
        isFormInvalid() {
            return Object.keys(this.errors).length > 0;
        }
    },

    mounted() {
        this.getUsers();

        this.deleteUser();
    },


}

</script>

<style scoped></style>