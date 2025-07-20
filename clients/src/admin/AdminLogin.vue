<template class="">
    <section class="bg-light screen">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 py-5">
                    <main class="form-signin p-3 bg-white">
                        <form>
                            <div class="text-center">
                                <img class="mb-2" src="../assets/logo.png" alt="" width="72" height="60">
                                <h1 class="h3 mb-3 fw-normal">Admin Login</h1>
                            </div>

                            <div class="form-floating py-2">
                                <input type="email" class="form-control shadow-none" id="floatingInput" v-model="email"
                                    v-validate="'required|email'" placeholder="name@example.com">
                                <label for="floatingInput">Email address</label>
                                <!-- <span v-show="errors.has('email')">{{ errors.first('email') }}</span> -->
                            </div>
                            <div class="form-floating py-2">
                                <input type="password" class="form-control shadow-none" id="floatingPassword"
                                    v-model="password" v-validate="'required'" placeholder="Password">
                                <label for="floatingPassword">Password</label>
                                <!-- <span v-show="errors.has('password')">{{ errors.first('password') }}</span> -->
                            </div>

                            <div class="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me"> Remember me
                                </label>
                            </div>
                            <div class="pt-4">
                                <button v-on:click="login"
                                    class="w-100 btn btn-lg btn-primary border border-dark text-white" type="button">
                                    Sign in
                                </button>
                            </div>
                            <div class="pt-4 float-right">
                                <RouterLink to="/Admin-Home">
                                    <a v-on:click="login" class="text-dark" type="button">
                                        dashboard
                                    </a>
                                </RouterLink>
                            </div>
                            <p class="mt-4 mb-2 text-muted text-center">&copy; Online Ecommerce</p>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {

    name: 'AdminLogin',

    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        // login() {
            // console.log(this.email, this.password);
            // this.email = '',
            // this.password = ''
            async login() {
                try {
                    // validate form before submitting
                    this.$validator.validateAll();

                    if (!this.errors.any()) {
                        const response = await axios.post("/login", {
                            email: this.email,
                            password: this.password,
                        });

                        const token = response.data.token;
                        // store the token in local storage or Vuex store for future use
                    }
                } catch (err) {
                    console.error(err);
                    // handle error response
                }
            }

            //     axios.post('/login', {
            //         email: this.email,
            //         password: this.password
            //     }).then(response => {
            //         localStorage.setItem('token', response.data.token);
            //         this.$router.push('/');
            //     }).catch(error => {
            //         console.log(error.response.data);
            //     });
            // },
        }

    }

</script>

<style scoped>
.screen {
    background-image: url("../assets/product/abc_123.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    position: relative;
    z-index: 995;
    /* background-color: rgb(216, 220, 220); */
}

.screen::before {
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
}

.form-signin {
    width: 25rem;
    margin: 0 auto;
    box-shadow: 0 0 10px 5px rgb(0, 0, 0, 0.5);
    z-index: 996;
    position: relative;
}

@media only screen and (max-width: 480px) {
    .form-signin {
        width: 100%;
    }
}

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}
</style>