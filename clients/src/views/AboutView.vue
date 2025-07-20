<template>

  <AppNavbar />
  <AppSlider />

  <div class="about">
    <!-- <h1>This is an about page</h1> -->
  </div>

  <!-- ======= About Section ======= -->
  <section class="about py-5" data-aos="fade-up">
    <div class="container">

      <div class="row">
        <div class="col-lg-6">
          <img src="https://media.istockphoto.com/id/1283119095/photo/about-us-word-on-a-red-wooden-block.jpg?b=1&s=170667a&w=0&k=20&c=_KI4jJlJoCAt40B6AnMjc-MbQtxZYtlKrWvpgEIIkEg=" class="img-fluid" alt="">
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0">
              <h1>About Page</h1>
          <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua.
          </p>
          <ul>
            <li><i class="bi bi-check2-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i class="bi bi-check2-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i class="bi bi-check2-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>

    </div>
  </section><!-- End About Section -->



  <AppFooter />
</template>

<script>
import AppNavbar from '@/components/layout/AppNavbar.vue';
import AppSlider from '@/components/layout/AppSlider.vue';
import AppFooter from '@/components/layout/AppFooter.vue';


export default {
  name: 'AboutView',
  components: {
    AppNavbar,
    AppSlider,
    AppFooter
  }

}

</script>


<style scoped>


/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about h3 {
  font-weight: 400;
  font-size: 26px;
}
.about ul {
  list-style: none;
  padding: 0;
}
.about ul li {
  padding-bottom: 10px;
}
.about ul i {
  font-size: 20px;
  padding-right: 4px;
  color: #68A4C4;
}
.about p:last-child {
  margin-bottom: 0;
}


</style>
