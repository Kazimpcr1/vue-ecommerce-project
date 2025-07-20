<template>
    <AppNavbar/>
    <AppSlider/>
    <section class="section contact-section">
      <div class="container text-start">
        <div class="row mb-5 align-items-end">
          <div class="col-md-6" data-aos="fade-up">

            <h2>Contact Form</h2>
            <p class="mb-0">We Will appreciate you to reach us</p>
          </div>

        </div>

        <div class="row ">
          <div class="col-md-4 col-lg-5 ms-auto order-2" data-aos="fade-up">
            <ul class="list-unstyled">
              <li class="mb-3">
                <strong class="d-block mb-1">Address</strong>
                <span>Islamabad, Rawalpindi Murri Road, Wasir Khan Station</span>
              </li>
              <li class="mb-3">
                <strong class="d-block mb-1">Phone</strong>
                <span>+1 232 3235 324</span>
              </li>
              <li class="mb-3">
                <strong class="d-block mb-1">Email</strong>
                <span>youremail@domain.com</span>
              </li>
            </ul>
          </div>

          <div class="col-md-8 col-lg-6 mb-5 mb-md-0" data-aos="fade-up">
            <form action="forms/contact.php" method="post" role="form" class="contact-mail-form shadow p-3">

              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="name">Name</label>
                  <input type="text" name="name" class="form-control" id="name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="name">Email</label>
                  <input type="email" class="form-control" name="email" id="email" required>
                </div>
                <div class="col-md-12 form-group mt-3">
                  <label for="name">Subject</label>
                  <input type="text" class="form-control" name="subject" id="subject" required>
                </div>
                <div class="col-md-12 form-group mt-3">
                  <label for="name">Message</label>
                  <textarea class="form-control" name="message" required></textarea>
                </div>

                <div class="col-md-12 mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>

                <div class="col-md-6 form-group">
                  <input type="submit" class="btn btn-primary d-block w-100" value="Send Message">
                </div>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>




    <AppFooter />
</template>

<script>
import AppNavbar from '@/components/layout/AppNavbar.vue';
 import AppSlider from '@/components/layout/AppSlider.vue';
 import AppFooter from '@/components/layout/AppFooter.vue';

export default{
    name: 'ContactView',
    components : {
    AppNavbar,
    AppSlider,
    AppFooter
  }
}
</script>

<style scoped>

/* Contact Form */

.contact-section{
  padding: 50px 0;
}
.contact-section .form-control {
  height: 48px;
  border-radius: 0;
  border: 1px solid #dae0e5;
}
.contact-section .form-control:active, .contact-section .form-control:focus {
  outline: none;
  box-shadow: none;
  border: 1px solid #2d71a1;
}

.contact-section .contact-mail-form .validate {
  display: none;
  color: red;
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 13px;
}
.contact-section .contact-mail-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.contact-section .contact-mail-form .error-message br + br {
  margin-top: 25px;
}
.contact-section .contact-mail-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.contact-section .contact-mail-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.contact-section .contact-mail-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
.contact-section .contact-mail-form textarea {
  min-height: 160px;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Default btn sre-tyling */
.btn {
  border: none;
  padding: 15px 30px !important;
}
.btn.btn-outline-white {
  border: 2px solid #fff;
  background: none;
  color: #fff;
}
.btn.btn-outline-white:hover {
  background: #fff;
  color: #2d71a1;
}
.btn.btn-primary {
  background: #2d71a1;
  background: linear-gradient(-45deg, #1391a5, #274685);
  color: #fff;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
}


</style>