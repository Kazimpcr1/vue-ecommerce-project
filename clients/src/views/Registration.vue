<template>
    <section class="bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <main class="form-signup shadow p-3 bg-white">
                        <form>
                            <div class="text-center">
                                <!-- <img class="mb-2" src="../assets/logo.png" alt="" width="72" height="60" /> -->
                                <h1 class="h3 mb-3 fw-normal">User Registration</h1>
                            </div>

                            <div class="form-floating py-2">
                                <input type="name" class="form-control shadow-none" id="floatingInput" v-model="name"
                                    v-validate="'required|name'" placeholder="name@example.com" />
                                <label for="floatingInput">Name</label>
                                <!-- <span v-show="errors.has('name')">{{ errors.first('name') }}</span> -->
                            </div>
                            <div class="form-floating py-2">
                                <input type="email" class="form-control shadow-none" id="floatingInput" v-model="email"
                                    v-validate="'required|email'" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                                <!-- <span v-show="errors.has('email')">{{ errors.first('email') }}</span> -->
                            </div>
                            <div class="form-floating py-2">
                                <input type="text" class="form-control shadow-none" id="floatingInput" v-model="email"
                                    v-validate="'required|phone'" placeholder="0092 30********" />
                                <label for="floatingInput">Phone Number</label>
                                <!-- <span v-show="errors.has('email')">{{ errors.first('email') }}</span> -->
                            </div>
                            <div class="form-floating py-2">
                                <input type="password" class="form-control shadow-none" id="floatingPassword"
                                    v-model="password" v-validate="'required'" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                                <!-- <span v-show="errors.has('password')">{{ errors.first('password') }}</span> -->
                            </div>

                            <!-- ////////////////////////////////// -->

                            <div class="row mb-2">
                                <div class="col-md-12 checkbox mb-2">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Accept Terms & Condition
                                    </label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 text-end">
                                    <button type="submit" class="btn btn-primary btn-block mb-4">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                            <div class="text-center">
                                <p>All Ready Member? <RouterLink to="Login">Log in</RouterLink>
                                </p>
                            </div>

                            <p class="mt-4 mb-2 text-muted text-center">
                                &copy; Online Ecommerce
                            </p>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "LogIn",
};
</script>


<style scoped>
section {
    height: 100vh;
}

.form-signup {
    margin: 3rem auto;
    width: 450px;
}

@media only screen and (max-width: 480px) {
    .form-signup {
        margin: 3rem auto;
        width: 100%;
    }
}
</style>
