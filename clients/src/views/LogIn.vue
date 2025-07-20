<template>
    <section class="bg-light">


        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <main class="form-signin shadow p-3 bg-white">
                        <form>
                            <div class="text-center">
                                <img class="mb-2" src="../assets/logo.png" alt="" width="72" height="60" />
                                <h1 class="h3 mb-3 fw-normal">User Login</h1>
                            </div>

                            <div class="form-floating py-2">
                                <input type="email" class="form-control shadow-none" id="floatingInput" v-model="email"
                                    v-validate="'required|email'" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                                <!-- <span v-show="errors.has('email')">{{ errors.first('email') }}</span> -->
                            </div>
                            <div class="form-floating py-2">
                                <input type="password" class="form-control shadow-none" id="floatingPassword"
                                    v-model="password" v-validate="'required'" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                                <!-- <span v-show="errors.has('password')">{{ errors.first('password') }}</span> -->
                            </div>

                            <!-- ////////////////////////////////// -->

                            <!-- 2 column grid layout -->
                            <div class="row mb-4 d-flex">
                                <div class="col-md-6 checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                </div>

                                <div class="col-md-6 text-end">
                                    <!-- Simple link -->
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary btn-block mb-4">
                                Sign in
                            </button>

                            <!-- Register buttons -->
                            <div class="text-center">
                                <p>Not a member? <RouterLink to="Registration">Register Now</RouterLink></p>
                            </div>

                            <!-- /////////////////////////////////// -->
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

section{
    height: 100vh;
}
.form-signin{
    margin: 5rem auto;
    width: 450px;
}

@media only screen and (max-width: 480px) {
    .form-signin{
    margin: 3rem auto;
    width: 100%;
}
}
</style>
