<template>


    <!-- ======= Footer ======= -->
    <footer id="footer">
        <div class="footer-top">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-lg-3 col-md-6">
                        <div class="footer-logo pb-4">
                            <img src="../../assets/logo2.png" alt="img-fluid">
                        </div>

                    </div>

                    <div class="col-lg-2 col-md-3 col-6 footer-links">
                        <h4>Shopping</h4>
                        <ul>
                            <!-- <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li> -->
                            <li> <a href="#">Dresses</a></li>
                            <li> <a href="#">Shoes</a></li>
                            <li> <a href="#">Perfume</a></li>
                            <li> <a href="#">Sandals</a></li>
                            <li> <a href="#">Handbag</a></li>
                            <li> <a href="#">Accessaries</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-3 col-6 footer-links">
                        <h4>Usefull Links</h4>
                        <ul>
                            <li>
                                <a href="#">
                                    <RouterLink to="/about">About us</RouterLink>
                                </a>
                            </li>
                            <li> <a href="#">
                                <RouterLink to="/categories-details">Services</RouterLink>
                            </a></li>
                            <li> <a href="#">
                                <RouterLink to="/TermsCondition">Terms of Condition</RouterLink>
                            </a></li>
                            <li> <a href="#">
                                <RouterLink to="/PrivacyPolicy">Privacy policy</RouterLink>
                            </a></li>
                            <li> <a href="#">
                                <RouterLink to="/Faqs">FAQs</RouterLink>
                            </a></li>
                            <li> <a href="#">
                                <RouterLink to="/Admin-Login">Admin</RouterLink>
                            </a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4 class="text-left">Address</h4>
                        <div class="footer-info">
                            <!-- <h3>MyBiz</h3> -->
                            <p>
                                Islamabad, Rawalpindi Muri Road, Waris Khan Station<br>
                                <strong>Phone:</strong> +92 3038515889<br>
                                <strong>Email:</strong> info@example.com<br>
                            </p>

                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>

                        <form action="" method="post">
                            <input type="email" name="email" placeholder="Enter Your Email"><button type="submit"
                                value="Subscribe"><i class="bi bi-check2-circle"></i></button>
                        </form>
                        <div class="social-links mt-3">
                            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                            <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
                            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="copyright">
                &copy; Copyright <strong><span>Kazim</span></strong>. All Rights Reserved
            </div>
            <!-- <div class="credits">
                Designed by <a href="https://www.facebook.com/realkazimofficial">Kazim HUsain</a>
            </div> -->
        </div>
    </footer><!-- End Footer -->

</template>
<script>
export default {
    name: 'AppFooter',
}

</script>

<style scoped>
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
    background: #1f2627;
    padding: 0 0 20px 0;
    color: #fff;
    font-size: 14px;
}

#footer .footer-top {
    background: #2a3336;
    border-bottom: 1px solid #354144;
    padding: 30px 0 20px 0;
}

#footer .footer-top .footer-info {
    margin-bottom: 10px;
}

#footer .footer-top .footer-info h3 {
    font-size: 24px;
    margin: 0 0 20px 0;
    padding: 2px 0 2px 0;
    line-height: 1;
    font-weight: 700;
}

#footer .footer-top .footer-logo {
    text-align: center;
    align-items: center;
}

#footer .footer-top .footer-logo img {
    width: 200px;
}


#footer .footer-top .footer-info p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    color: #fff;
}

#footer .footer-top .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #354144;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 5px;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
    background: #01b1d7;
    color: #fff;
    text-decoration: none;
}

#footer .footer-top h4 {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    position: relative;
    padding-bottom: 12px;
}

#footer .footer-top .footer-links {
    margin-bottom: 30px;
}

#footer .footer-top .footer-links h4 {
    text-align: start;
}

#footer .footer-top .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

#footer .footer-top .footer-links ul i {
    padding-right: 2px;
    color: #40dcfe;
    font-size: 12px;
    line-height: 1;
}

#footer .footer-top .footer-links ul li {
    padding: 10px 0;
    display: flex;
    align-items: center;
}

#footer .footer-top .footer-links ul li:first-child {
    padding-top: 0;
}

#footer .footer-top .footer-links ul a {
    color: #fff;
    transition: 0.3s;
    display: inline-block;
    line-height: 1;
    text-decoration: none;
}

#footer .footer-top .footer-links ul a:hover {
    color: #27d8fe;
}

#footer .footer-top .footer-newsletter form {
    margin-top: 0px;
    background: transparent;
    padding: 6px 10px;
    position: relative;
    border-radius: 4px;

}

#footer .footer-top .footer-newsletter form input[type=email] {
    border: 0;
    padding: 4px;
    width: calc(100% - 110px);
    background-color: transparent;
    border-bottom: 2px solid #fff;
    color: #fff;
}

#footer .footer-top .footer-newsletter form button {
    position: absolute;
    top: 0;
    right: px;
    bottom: 0;
    border: 0;
    background: none;
    font-size: 25px;
    padding: 0 5px 20px 0;
    box-shadow: none;
    /* background: #01b1d7; */
    color: #fff;
    transition: 0.3s;
    border-radius: 0 5px 5px 0;
}

#footer .footer-top .footer-newsletter form input[type=email]:focus,
#footer .footer-top .footer-newsletter form input[type=email]:active {
    box-shadow: none;
    outline: 0;
}

/* #footer .footer-top .footer-newsletter form input[type=submit] {
  position: absolute;
  top: 0;
  right: -2px;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px;
  background: #01b1d7;
  color: #fff;
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
} */
#footer .footer-top .footer-newsletter form input[type=submit]:hover {
    background: #0187a4;
}

#footer .copyright {
    text-align: center;
    padding-top: 20px;
}

#footer .credits {
    padding-top: 10px;
    text-align: center;
    font-size: 13px;
    color: #fff;
}
</style>