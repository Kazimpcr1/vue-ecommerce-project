<template>
    <AppNavbar />
    <section class="bg-light pt-5">
        <div class="container">
            <div class="row pt-5">
                <div class="col-12">
                    <h1 class="">Privacy Policy</h1>
                    <p>
                        [Your Ecommerce Website] is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information. By using our website, you agree to this Privacy Policy.
                    </p>
                </div>
                <div class="col-12">
                    <ul>
                        <li>
                            <strong>Introduction</strong>
                            <p>[Your Ecommerce Website] is an online platform that provides a variety of products and services for sale. Our website is accessible 24/7, and we reserve the right to make changes to our website and services at any time.</p>
                        </li>
                        <li>
                            <strong>Collection of Information</strong>
                            <p>We collect personal information when you make a purchase, create an account, or sign up for our newsletter. This information may include your name, email address, shipping address, billing address, and payment information.</p>
                        </li>
                        <li>
                            <strong>Use of Information</strong>
                            <p>We use your personal information to process your orders, communicate with you about your orders and account, and provide customer support. We may also use your information to send you promotional emails about our products and services. You may opt-out of these emails at any time.</p>
                        </li>
                        <li>
                            <strong>Sharing of Information</strong>
                            <p>We do not sell or rent your personal information to third parties. However, we may share your information with third-party service providers that help us with our business operations, such as shipping companies and payment processors. We require these service providers to protect your personal information and use it only for the purposes for which we disclose it to them.</p>
                        </li>
                        <li>
                            <strong>Cookies and Other Tracking Technologies</strong>
                            <p>We use cookies and other tracking technologies to enhance your experience on our website. These technologies may collect information about your browsing behavior, such as the pages you visit and the products you view. You can disable cookies in your browser settings, but this may affect your ability to use our website.</p>
                        </li>
                        <li>
                            <strong>Security</strong>
                            <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee the absolute security of your personal information.</p>
                        </li>
                        <li>
                            <strong>Children's Privacy</strong>
                            <p>Our website is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under the age of 18.</p>
                        </li>
                        <li>
                            <strong>Changes to this Privacy Policy</strong>
                            <p>We reserve the right to make changes to this Privacy Policy at any time. We will notify you of any material changes by posting the new Privacy Policy on our website.</p>
                        </li>
                        <li>
                            <strong>Contact Us</strong>
                            <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at [contact information].</p>
                        </li>
                    </ul>

                    <div>
                        <p>
                            Thank you for using [Your Ecommerce Website].  <RouterLink to="/contact" >Click Here</RouterLink> 
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