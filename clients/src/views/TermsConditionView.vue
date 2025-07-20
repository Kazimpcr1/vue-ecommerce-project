<template>
    <AppNavbar />
    <section class="bg-light pt-5">
        <div class="container">
            <div class="row pt-5">
                <div class="col-12">
                    <h1 class="">Terms And Condition</h1>
                    <p>
                        Welcome to [Your Ecommerce Website]. These terms and conditions ("Terms") govern your use of our
                        website and the services and products we provide. By using our website, you agree to be bound by
                        these Terms. Please read them carefully before using our website.
                    </p>
                </div>
                <div class="col-12">
                    <ul>
                        <li>
                            <strong>Introduction</strong>
                            <p>[Your Ecommerce Website] is an online platform that provides a variety of products and services for sale. Our website is accessible 24/7, and we reserve the right to make changes to our website and services at any time.</p>
                        </li>
                        <li>
                            <strong>Scope of Services</strong>
                            <p>Our website offers a variety of products and services for sale. While we make every effort to ensure that our product descriptions and prices are accurate, we reserve the right to correct any errors and make changes to our products and services at any time. We also reserve the right to limit the quantity of any product or service we offer.</p>
                        </li>
                        <li>
                            <strong>Pricing and Payment</strong>
                            <p>All prices for our products and services are displayed in [currency] and are inclusive of any applicable taxes or fees. We accept payments via [list of accepted payment methods]. Payment must be made in full at the time of purchase. We reserve the right to cancel any order if payment is not received.</p>
                        </li>
                        <li>
                            <strong>Shipping and Delivery</strong>
                            <p>We offer a variety of shipping options and delivery times. Shipping fees may apply and will be calculated at the time of checkout. We are not responsible for any delays in shipping or delivery that are beyond our control.</p>
                        </li>
                        <li>
                            <strong>Returns and Refunds</strong>
                            <p>If you are not satisfied with your purchase, you may return it within [number of days] days of delivery for a full refund, provided that the product is in its original condition and packaging. Refunds will be issued to the original payment method. Shipping fees are non-refundable.</p>
                        </li>
                        <li>
                            <strong>User Conduct</strong>
                            <p>By using our website, you agree to follow all applicable laws and regulations. You may not use our website for any illegal or unauthorized purpose. You may not post or transmit any content that is harmful, threatening, abusive, or defamatory. We reserve the right to terminate your use of our website at any time for any reason.</p>
                        </li>
                        <li>
                            <strong>Privacy Policy</strong>
                            <p>We are committed to protecting your privacy. Our privacy policy explains how we collect, use, and protect your personal information. By using our website, you agree to our privacy policy.</p>
                        </li>
                        <li>
                            <strong>Intellectual Property</strong>
                            <p>All content on our website, including but not limited to text, graphics, logos, and images, is the property of [Your Ecommerce Website] and is protected by intellectual property laws. You may not use any of our content without our express written permission.</p>
                        </li>
                        <li>
                            <strong>Limitation of Liability</strong>
                            <p>We are not liable for any damages that may arise from your use of our website or the products and services we provide. We make no warranties or representations, express or implied, about the accuracy or completeness of the information on our website. Our liability is limited to the amount paid by you for the product or service in question.</p>
                        </li>
                        <li>
                            <strong>Governing Law</strong>
                            <p>These Terms are governed by the laws of [jurisdiction]. Any disputes that may arise shall be resolved in the courts of [jurisdiction].</p>
                        </li>
                    
                    </ul>

                    <div>
                        <p>
                            Thank you for using [Your Ecommerce Website]. If you have any questions or concerns, please contact us at  <RouterLink to="/contact" >Click Here</RouterLink> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <AppFooter />
</template>

<script>
import AppNavbar from '@/components/layout/AppNavbar.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

export default {

    components: {
        AppNavbar,
        AppFooter,
    }
}
</script>