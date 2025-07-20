<template>

    <AppNavbar />

    <div class="container">

        <div v-if="cart.length === 0" class="pt-5">

            <div class="empty-cart">

                <svg viewBox="656 573 264 182" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect id="bg-line" stroke="none" fill-opacity="0.2" fill="#FFE100" fill-rule="evenodd" x="656"
                        y="624" width="206" height="38" rx="19"></rect>
                    <rect id="bg-line" stroke="none" fill-opacity="0.2" fill="#FFE100" fill-rule="evenodd" x="692"
                        y="665" width="192" height="29" rx="14.5"></rect>
                    <rect id="bg-line" stroke="none" fill-opacity="0.2" fill="#FFE100" fill-rule="evenodd" x="678"
                        y="696" width="192" height="33" rx="16.5"></rect>
                    <g id="shopping-bag" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                        transform="translate(721.000000, 630.000000)">
                        <polygon id="Fill-10" fill="#FFA800" points="4 29 120 29 120 0 4 0"></polygon>
                        <polygon id="Fill-14" fill="#FFE100" points="120 29 120 0 115.75 0 103 12.4285714 115.75 29">
                        </polygon>
                        <polygon id="Fill-15" fill="#FFE100" points="4 29 4 0 8.25 0 21 12.4285714 8.25 29"></polygon>
                        <polygon id="Fill-33" fill="#FFA800" points="110 112 121.573723 109.059187 122 29 110 29">
                        </polygon>
                        <polygon id="Fill-35" fill-opacity="0.5" fill="#FFFFFF" points="2 107.846154 10 112 10 31 2 31">
                        </polygon>
                        <path
                            d="M107.709596,112 L15.2883462,112 C11.2635,112 8,108.70905 8,104.648275 L8,29 L115,29 L115,104.648275 C115,108.70905 111.7365,112 107.709596,112"
                            id="Fill-36" fill="#FFE100"></path>
                        <path
                            d="M122,97.4615385 L122,104.230231 C122,108.521154 118.534483,112 114.257931,112 L9.74206897,112 C5.46551724,112 2,108.521154 2,104.230231 L2,58"
                            id="Stroke-4916" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <polyline id="Stroke-4917" stroke="#000000" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" points="2 41.5 2 29 122 29 122 79"></polyline>
                        <path
                            d="M4,50 C4,51.104 3.104,52 2,52 C0.896,52 0,51.104 0,50 C0,48.896 0.896,48 2,48 C3.104,48 4,48.896 4,50"
                            id="Fill-4918" fill="#000000"></path>
                        <path d="M122,87 L122,89" id="Stroke-4919" stroke="#000000" stroke-width="3"
                            stroke-linecap="round"></path>
                        <polygon id="Stroke-4922" stroke="#000000" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" points="4 29 120 29 120 0 4 0"></polygon>
                        <path
                            d="M87,46 L87,58.3333333 C87,71.9 75.75,83 62,83 L62,83 C48.25,83 37,71.9 37,58.3333333 L37,46"
                            id="Stroke-4923" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M31,45 C31,41.686 33.686,39 37,39 C40.314,39 43,41.686 43,45" id="Stroke-4924"
                            stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M81,45 C81,41.686 83.686,39 87,39 C90.314,39 93,41.686 93,45" id="Stroke-4925"
                            stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M8,0 L20,12" id="Stroke-4928" stroke="#000000" stroke-width="3" stroke-linecap="round">
                        </path>
                        <path d="M20,12 L8,29" id="Stroke-4929" stroke="#000000" stroke-width="3"
                            stroke-linecap="round"></path>
                        <path d="M20,12 L20,29" id="Stroke-4930" stroke="#000000" stroke-width="3"
                            stroke-linecap="round"></path>
                        <path d="M115,0 L103,12" id="Stroke-4931" stroke="#000000" stroke-width="3"
                            stroke-linecap="round"></path>
                        <path d="M103,12 L115,29" id="Stroke-4932" stroke="#000000" stroke-width="3"
                            stroke-linecap="round"></path>
                        <path d="M103,12 L103,29" id="Stroke-4933" stroke="#000000" stroke-width="3"
                            stroke-linecap="round"></path>
                    </g>
                    <g id="glow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                        transform="translate(768.000000, 615.000000)">
                        <rect id="Rectangle-2" fill="#000000" x="14" y="0" width="2" height="9" rx="1"></rect>
                        <rect fill="#000000"
                            transform="translate(7.601883, 6.142354) rotate(-12.000000) translate(-7.601883, -6.142354) "
                            x="6.60188267" y="3.14235449" width="2" height="6" rx="1"></rect>
                        <rect fill="#000000"
                            transform="translate(1.540235, 7.782080) rotate(-25.000000) translate(-1.540235, -7.782080) "
                            x="0.54023518" y="6.28207994" width="2" height="3" rx="1"></rect>
                        <rect fill="#000000"
                            transform="translate(29.540235, 7.782080) scale(-1, 1) rotate(-25.000000) translate(-29.540235, -7.782080) "
                            x="28.5402352" y="6.28207994" width="2" height="3" rx="1"></rect>
                        <rect fill="#000000"
                            transform="translate(22.601883, 6.142354) scale(-1, 1) rotate(-12.000000) translate(-22.601883, -6.142354) "
                            x="21.6018827" y="3.14235449" width="2" height="6" rx="1"></rect>
                    </g>
                    <polygon id="plus" stroke="none" fill="#7DBFEB" fill-rule="evenodd"
                        points="689.681239 597.614697 689.681239 596 690.771974 596 690.771974 597.614697 692.408077 597.614697 692.408077 598.691161 690.771974 598.691161 690.771974 600.350404 689.681239 600.350404 689.681239 598.691161 688 598.691161 688 597.614697">
                    </polygon>
                    <polygon id="plus" stroke="none" fill="#EEE332" fill-rule="evenodd"
                        points="913.288398 701.226961 913.288398 699 914.773039 699 914.773039 701.226961 917 701.226961 917 702.711602 914.773039 702.711602 914.773039 705 913.288398 705 913.288398 702.711602 911 702.711602 911 701.226961">
                    </polygon>
                    <polygon id="plus" stroke="none" fill="#FFA800" fill-rule="evenodd"
                        points="662.288398 736.226961 662.288398 734 663.773039 734 663.773039 736.226961 666 736.226961 666 737.711602 663.773039 737.711602 663.773039 740 662.288398 740 662.288398 737.711602 660 737.711602 660 736.226961">
                    </polygon>
                    <circle id="oval" stroke="none" fill="#A5D6D3" fill-rule="evenodd" cx="699.5" cy="579.5" r="1.5">
                    </circle>
                    <circle id="oval" stroke="none" fill="#CFC94E" fill-rule="evenodd" cx="712.5" cy="617.5" r="1.5">
                    </circle>
                    <circle id="oval" stroke="none" fill="#8CC8C8" fill-rule="evenodd" cx="692.5" cy="738.5" r="1.5">
                    </circle>
                    <circle id="oval" stroke="none" fill="#3EC08D" fill-rule="evenodd" cx="884.5" cy="657.5" r="1.5">
                    </circle>
                    <circle id="oval" stroke="none" fill="#66739F" fill-rule="evenodd" cx="918.5" cy="681.5" r="1.5">
                    </circle>
                    <circle id="oval" stroke="none" fill="#C48C47" fill-rule="evenodd" cx="903.5" cy="723.5" r="1.5">
                    </circle>
                    <circle id="oval" stroke="none" fill="#A24C65" fill-rule="evenodd" cx="760.5" cy="587.5" r="1.5">
                    </circle>
                    <circle id="oval" stroke="#66739F" stroke-width="2" fill="none" cx="745" cy="603" r="3"></circle>
                    <circle id="oval" stroke="#EFB549" stroke-width="2" fill="none" cx="716" cy="597" r="3"></circle>
                    <circle id="oval" stroke="#FFE100" stroke-width="2" fill="none" cx="681" cy="751" r="3"></circle>
                    <circle id="oval" stroke="#3CBC83" stroke-width="2" fill="none" cx="896" cy="680" r="3"></circle>
                    <polygon id="diamond" stroke="#C46F82" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" fill="none" points="886 705 889 708 886 711 883 708"></polygon>
                    <path
                        d="M736,577 C737.65825,577 739,578.34175 739,580 C739,578.34175 740.34175,577 742,577 C740.34175,577 739,575.65825 739,574 C739,575.65825 737.65825,577 736,577 Z"
                        id="bubble-rounded" stroke="#3CBC83" stroke-width="1" stroke-linecap="round"
                        stroke-linejoin="round" fill="none"></path>
                </svg>

                <h3>Your cart is Empty</h3>
                <p>We will appreciate you to buy your amazing Products, Thanks</p>

                <div class="py-2">
                <RouterLink to="/categories-details">
                    <button class="return-btn">Return to Shop</button>
                </RouterLink>
            </div>
            </div>
            




        </div>
        <div v-else class="shopping-cart">
            <div class="section-title">
                <h2>CheckOut Products</h2>
                <hr>
                <span></span>
            </div>

            <div class="column-labels pt-2">
                <label class="product-image">Image</label>
                <label class="product-details">Product</label>
                <label class="product-price">Price</label>
                <label class="product-quantity">Quantity</label>
                <label class="product-removal">Action</label>
                <label class="product-line-price">Total</label>
            </div>

            <!-- <div class="product" v-for="(item, index) in checkoutitems" :key="index">
                <div class="product-image">
                    <img :src="item.image">
                </div>
                <div class="product-details">
                    <div class="product-title">{{ item.title }}</div>
                    <p class="product-description">{{ item.subtitle }}</p>
                </div>
                <div class="product-price">{{ item.price }}</div>
                <div class="product-quantity">
                    <input type="number" v-model="item.quantity" min="1">
                </div>

                <div class="product-removal">
                    <button class="remove-product">
                        Remove
                    </button>
                </div>
                <div class="product-line-price">{{ totalPrice[index] }} </div>
            </div> -->




            <div class="product" v-for="itemCart in cart" :key="itemCart.product.id">
                <div class="product-image">
                    <img :src="itemCart.product.image">
                </div>
                <div class="product-details">
                    <div class="product-title">{{ itemCart.product.title }}</div>
                    <p class="product-description">{{ itemCart.product.category }}</p>
                </div>
                <div class="product-price">{{ itemCart.product.price }}</div>
                <div class="product-quantity">
                    <input type="number" v-model="itemCart.quantity" min="1">

                    <!-- <div class="quantity-toggle" id="quentity">
                    <button class="dec-btn" @click="decrement()">&mdash;</button>
                    <input type="text" :value="quantity" readonly>
                    <button class="inc-btn" @click="increment()">&#xff0b;</button>
                </div> -->
                </div>

                <div class="product-removal">
                    <button class="remove-product" @click.prevent="removeProduct(itemCart.product)">
                        Remove
                    </button>
                </div>
                <div class="product-line-price">{{ itemCart.product.price * itemCart.quantity }}</div>
            </div>

            <AddToCard />

            <!-- <div class="totals">
                <div class="totals-item">
                    <label>Subtotal</label>
                    <div class="totals-value" id="cart-subtotal">{{ SubTotal }}</div>
                </div>
                <div class="totals-item">
                    <label>Tax({{ taxPercentage }}%):</label>
                    <div class="totals-value" id="cart-tax"> {{ totalWithTax }}</div>
                </div>
                <div class="totals-item">
                    <label>Shipping</label>
                    <div class="totals-value" id="cart-shipping">{{ shipping }}</div>
                </div>
                <div class="totals-item totals-item-total">
                    <label>Grand Total</label>
                    <div class="totals-value" id="cart-total">{{ grandTotal }}</div>
                </div>
            </div> -->
            <!-- ///////////////////////////////////////////////////////////////////////  -->
            <div class="totals">
                <div class="totals-item">
                    <label>Subtotal</label>
                    <div class="totals-value" id="cart-subtotal">{{ subTotal2 }}</div>
                </div>
                <div class="totals-item">
                    <label>Tax({{ taxPercentage }}%):</label>
                    <div class="totals-value" id="cart-tax"> {{ totalWithTax2 }}</div>
                </div>
                <div class="totals-item">
                    <label>Shipping</label>
                    <div class="totals-value" id="cart-shipping">{{ shipping }}</div>
                </div>
                <div class="totals-item totals-item-total">
                    <label>Grand Total</label>
                    <div class="totals-value" id="cart-total">{{ grandTotal2 }}</div>
                </div>
            </div>

            <RouterLink to="/order_place">
                <button class="checkout">Proceed to checkout</button>
            </RouterLink>

        </div>
    </div>

    <AppFooter />

</template>

<script>

import AppNavbar from '@/components/layout/AppNavbar.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import AddToCard from '@/components/AddToCard.vue';


export default {
    name: 'CheckOut',
    components: {
        AppNavbar,
        AppFooter,
        AddToCard
    },

    data() {
        return {
            quantity: 1,

            taxPercentage: 5,

            shipping: 150,

            checkoutitems: [
                {
                    id: '1',
                    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFRUUFhcZGBgYGBwZHBkUGR0dGBoZHhoZGhoZGRgcIy4lHB4tJBwYJjsmKy8xNTU1HCQ7QD4zPy40NTEBDAwMEA8QHxISHzUsJCw4NDUxNzc2NT00NTY0NjQ0NjQ0NDU0NDQ0NjQ0NDY0NDE0NDQ0NDQ0NDQ2NDQ0NDE0Mf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECBAUHAwj/xABDEAACAQIDBQYCBwUGBgMAAAABAgADEQQSIQUGMUFRIjJhcYGRE1IHFEJigqGxQ3KSssEkM2NzwtEjNFPh4vAWorP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBQQG/8QAKhEAAgEDBAECBQUAAAAAAAAAAAECAxEhBBIxQVFhcRMiMoGRBRRSobH/2gAMAwEAAhEDEQA/AOzREQBERAEREApEoTaaLG7SL3CXCfMDZm/d+VfvcTytxgmMWzbfW0uVzC40OvA9CeF/CeyuDwIPkZGsDhWqAWGVedxoOZAA0J8pvsLhFpjQa8yeJkJktJGVERJKiIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAUiDI3tHaYqM9Ne4pKueGZxxQdVGmbkbgdYJjFs9doY7ObDufzHqfu9Bz48LXbPwBcBn0HS+p9enjGy8EXJd+7fQHmefpeb+RyXbthFqIFAAFgOQl8RJMxERAEREAREQBERAEREAREQBERAEREAREQBERAEREA1e2sU1JAy8jc27zAAtlUcySAPAZjymi2LhjXbOxso1YA8SxuVI63uTz1PWeu26jNi6aEJkFNzdkBcEgg5GPduLg+cj29e2quDwpWg2Ttog5mzU3Z7NxBuo1HCUd9x6YQbikuWdJUACw4CGqAcSPec0o4etURGbG4kMygnLUCi5Gthl4epkQ31pfCamfi1ajsCGas+ZsotlHgBr7mW3ImGnUpbXI72HHUe8rPnHdqpUqYmmodhY5iVJDALrcMNRyFx1nU6WJqp3a9Uebhv/ANFaNyFbTKDspXJ5EiFLb2ITiqVR603t59pWPogm32dt+lWITtU6h/Z1RlY9cpuVceKkwmmYOnJG5iUlZJQREQBERAEREAREQBERAEREAREQBERAERKXgEb3gpL9Zwjc3+LS9DTZh+a/nPXFbq4WquWrTzi+btMwN9dbqR1PvNT9ImKNH6nWH7OvmPiMpuPUXEldTFotI1iwyBM5bllAzX9tYsjeSkqcZLu6/DIpvTWp0lTCUVVXqLqV406I0Z83EMe6vO5J5TQYjZ2He2emrkCwLi5sOVzrFBmqM+IqaPXbPY8UThTT0W3qTKs1ja8xnLODWK2qxfhMJSonNSREcagqg5ai9uIvyk12Pj6WLTMFXMpyujAFkccVPhzB5jWQkMJ60c1NxXokCqBZge7UX5HHTobXB16gzCVuSJx3e5Na+xKbd0FT93h7GaPaOxWVSGUVE46A3BHA24qR8w4dZvtibXp4pCy3DKcr0279N/lYfoRoRqJsyJo4pmCnKLsyI7L2zUo2WoWq0vnOtWmPv2/vF+8O0OebUiV0aquoZSGUi4Km4IPAgjiJqtpbJD3ZOy/Gw0Df7HxmjwWMbCMWOlIsfipbuEnWso5C/eHPvcQ13GGWcVPMeSbxLQby6SYiIiAIiIAiIgCIiAIiIAiIgCIiAUMtlxlLQCKfSJgfi4NmAuaRFT8IuG9lYn0kV2Ntxq+AbBalwy0if8Bjdm9FDL6r1nUKtNXDIwurAqQeBBFiJw/Fo+zcay6kISDf9pRbhr1y+zDwhnR0lqtN03ysolFd7sekxnGqnxP6Ge4sQrKcyuAyt1U8D4HiCORBE83Gq+Z/SeZlLWwWgy9HtLSJaYBnYaowcVqRyVVFte663uUcc1/MHUc7zLYm20xIIAKVEtnpt3lvwIP2lPJhofAggQFHtMzVitWm2Wsmqty8VcDvIbWK+osQDLwn0zOcFI6QRNLtnCD+8A1GjdCOGv6esyNibUXE0g4GVgcroeKOO8p/oeYIPOZ1RQQQeB0m3J51eMjVbv1tGon9nYrrf/hNfJ7FWT8APObqRnBXTEoORWqh8SDTZf0f+KSaCaizfyViIgoIiIAiIgCIiAIiIAiIgCIiAIiIBaROKb+Yg4jGuFGbIDTAHMKrM487h52pjODYCsXxiMeLVHY+bI/+8hvB79Bhyn4R67rbUCn6u5srG9Mk6K54pfo3626mSZxqvmR+RkT3l2PlJqoOwdXA+yfmA+X9PLhlbD2/nyUqzWcHsuxsHFiArk8G4a8+eupzkrq6PXVgqi+JD7okRWebLKviUBsWAPME6yw4lOomZ4wBPWkxBuJRbHhLwkgGbs3HDD1lrcEqFadYXsASbU6luoJyn7rfdk/M5x8EOrU27rqVPkRaS/d3H/EwlKq7C6oVdm0GZCUqMemqsZvTldGFaPZ5Vh/bqKjklVz6Cmg/mPsZvxIxuxV+sVK+MsQr2pUb86SEkv8AiZmPpJOJoUq4aT6RdERIMxERAEREAREQBERAEREAREQBERALGE4BTBp4lPu1VH/3yn9Z9AmfPu3FK16w4MruPUMbfmJD4OhoM7l6EwTYuYA1XZzzCnKnkANT7zQ7b3QbV8OLjnTvr+Anj5H06ScYFxURHHB1De4vMxKcxTaYhUlTldHIMDtdqJyVKa1VXTLUWzpbkHIuPIg26SUYTFYDEAAZEb5X7DehBs3oZJdubs0cUvaAV/8AqKO3bpoRf1uPCc32tuwyVMlJs/X4i/DZTbMA2Y8SATy0BNpfDNnKjUy8Ml1XYjpZ8O5BH2KhLI34uKnx1mZgKhclHRkccUI/NSNGXxEgKbvbRpgFKdQA6g0nBUjqCjG8zsJu1tOucrmoi8zWqNb+EEk+0rZEOlD+SJhjdoUaHfqKpH2Aczn8C3PvYTH2Nha+0B8FM1LBio7sTYO7M5crppxPd1A4m+gmr2fuvTo1Cle5bRktojrzN+JIOhHl1nSNz0AoNlAANarYDh2ahT/TLwSXBnUnCnH5cvy+vY3OGw600VFAVVAUAcABwnvErLnObuIiIAiIgCIiAIiIAiIgCIiAIiIAiIgFpnMfpK3eOb63TFx+0A5HgG8joD4+c6fNLveP7Hif8lz7C8G2nm4VE17HJNibyHDNSV7mkc1NwNcpUgo6+ORlHjl8J1HDsrqrIQysLgjgQek4o9AuCoXMbA5V711v2lHPQsCOhvykg3I2+cNU+BWNqTnQt+zfr4A8D6HrM2kdOtp9yclyv7R1FVms2zsrOjtSRfitk1JZc2Vh2uyR2wAcrHgba2m4EqIOeRHZG0PgOuHbIKSh+1nQMmoKghXJZiSwYW0Kk3IMkuHqo4zIwYA2JU316TVbX2NUcsEZcjujujlhlZGBJSwN1ZRYroL68zNpgKDU1KM5dQxyFrlgh1CMT3ragHoBzhoi55bR2ctZMp0YHMjfK3I+XIjoZsd2sMaeHpo1s3aLAG4DMzMwB56ky0T3wlTK1uTfryP9PaWiVm242NlERLGIiIgCIiAIiIAiIgCIiAIiIAiIgCIiAUmo3r/5LFf5FT+QzbzVbzi+ExQ/wKn8jQXh9S9z5+xTFVLKSCLEEGxB6gjhPSnjDiVOa3xkF72/vEHEkfOo9xfpr4YzutNXRrMjB1NmUgg+IlGj6Cphpo7J9H23zXpnDuf+JSUWJ4unAHxI0HqPGTGcRw+ONCpRxlEWU9rKOA5VKZ8OI8ipnbcNVV0R1N1dQynqCLiDmaqmoy3R4f8ApqaGzqwtmq91rrcE3HbGZhfvWZR07JNhfSibORRl+JcIpRj9sIRYITfqCdRqek3uWeBwi5y+tymS2mW1766XPqTa5ta5g8xh4HClbOKjOpQDtZSDbusCALaXv1veZwlKFAIoUXsOF9T7y4iAbOi+YAz0mFg3t2eszbyyMWrMRNXtHb+Gw+lWsin5S12/hF2/KR3E/SVgl4Cq/wC6oX+cqZJeNGpL6UybRIdsvf8AoYhsiUsQW8EVrDqcrGw8TJVSxCtwNj0bQ+0i6InTlB2krGREpKySgiIgCIiAIiIAiIgCIiAUmt3i/wCVxP8Ak1P5GmymLtGiHpVEYXDIykdQVIP6wTHlHzfjO6fKacyWbybDqYcMbFk5OOn3vlMivw2PBSfIEytzvznGSTTNxu9Vzh8M32+2nhUUcPxLceYWdR+jTamfDth2PaoNpfmjXK+xzD2nHKGFrBlZEcMpDA5SLEG4OsnmxMd9Xx1GtbImIAVl5Ln0I/C49pXs880pwce+UdcvKy0SoknOKGWsJeZq9sYyolMtSUGxF2c2UJftOtr5rdDb/cErja+26OET4lVrfKo1dj0Vef6Cc53k3/xVZmpoDh1BIKi4qH95iAVPgtvMyY7I2PQxeIOIYrV+Hls2vftcAggaDjYaajxmPtrd2liMbVqZA7KqBlOgLWFiTwvbTXw4SFNKNz0UZUoz+ZXIhuZsJMUzVK75aStYksAzta+XMdelzx1E6ZUo4HC0zakmUaaJe56XI1M5ztLY1fCVlo5wKbHOEW5yAscoLEDteUzdopkqZlLtZLZGZnJzWuUXWzXA4CUc2nk01E3UldPHSXBfsTb1eliG/s/wkruz9lAQVAsq5lOhAAFut+pkwr7xUirBQS1tAxK3PgygnztqPCaHF7CxlYI1IGnkFx8YlRfQ90XPXiNPUz12fT+Mwp16lCjVpPZhSNyxse67ixuCLjjpK3lyYS2ydzJ2HvY7XpYhSrgdl0OYPawIKre7C44DmOEmODxqVACrKxsD2TyPA26SI7b3WRqaNSdcO9NjUV768ySWB0vc3NiOoI0mNu9h/iMK7YlKjMLgIqqxI7rhg3a4m9gL3HA6S6k0zKUE8o6FKyP4Dalb45o1kCg5jTde6wB4Nr3rEadQdLEGb+ap3MWrFYiJJAiIgCIiAIiIAiIgGg2tsIVAxpkAsDoe6Sf0kaXcWue9Upr+7mP9BOhxKOCbuaKrJKxzbFbjOgv8UHyS3+qR7eHYrJh21zFGzA2tYGwYD1yn3nZa9PMJFts4AMroRowKn1FpKgujSjWcZpsruntT6zhaVQm7Zcj9cy6Enz0P4puS1rk6AczwtOY/R1jDRxNXCNoGvlB/6iX4ea3/AIBPX6Rt5SScHSOmnxWHMnhTB6dfQdYSPTLTt1dq4efsSLC7wDGV3pUQ/wAGmNaiK1nfWyKRay/zeA402XtqotOtQxVI0yrMUFlKmib2XsliGABBuLWjd3GvRoUaC0Q1RrA/CWyrdQc7glbC3E3426zL2xsivUsSULMyrltqVvqM1zlWxN7AzFtt3iYzUU9vCMOhtntinhlFNHZCDksOjgXAtbLYk9V62m7xtfKpKksxJ7ilrNw1ygnxubDSRPDVDVqFEpWpYdymIztktYkZVsDmIFm1tf1uZQ+8VDKy0nDOgF1tql1zDMBa1xrxlU/JVrwiB7y40oj1CSzlhbM3bvrZDmXiAb6AWtpxmJunvRSoqKlcoaoY2zAjInAKttW66348prN9tvpi6ylVGanmVnAtmF+B5NYjiPz5R96aHUy6gmrnQpaffTuzo22/pNBTLQOZzfVVKouuhLPqTaxsBa/OczLVM7VA7B2JZmDG5JNyT1m52du3ia1vh0XI07TDIn8T2B9LyV7P+jCu1jUrUkHRbu3+kfmZoo9clktPRVpNEFrbQxFRcj1qjLa2UuctvFeBnlgK1Wiew7KONr6e3t4zpG1fo+oYemrNXqMxYAABQOpNrEgAfqJHa+7qC+V38L5SP0ENRWAq2nksIrQ3vxPZeooNFHUOqd9tOy/DSx5k8SBO07GxorUVcG4I49RxB9QROEjC1KRYIysGUqw7pZTxUhrqR5nkJ17cTH0KmHWnRBRqYCvTbvI3HUHkdSDIimn6Hi1MIbd0ckqiUlZoeEREQBERAEREAREQCkrKGBAKzXbQw+YGbGWOLiSgcT3tw7YbGJXTslrMD0ZePodL9c0iVZ2LFySWJLE8yxNyfO+s7Bv7shqlFii3KnNYcbAG9v8A3lOQuJWSsd3R1VOCvysHZ9ibdRaFNndXrOguUtYWUEjyF/U3mz3apBk+NdianaBc9og8CRyNraTiGytpnDk9gOpNyL21tbj7ewkgw2/zrhzTykOHGQJ3RT8STe4F/YcNZjaSlxg8tbSSzt7OjbM2kjVcTTKWBqst7Czmy3JtxHay3PyyH707eoYXEVaKI2ZiGUUQuR2KBCGXz6c18JHMdtx6xp0sK7s/EMyhcgIswJJJI8Sf+8i2ThUoE1ajB6zDtVHsLfdQfZH5mEm1ky+Hsd3+DRbL3Kr4h2rV7UVdi5Uavqb8OC+uvhJtsrd/DYexRAXH237T+hPd9LTCr7y0E71VB4ZgT7Ca3Eb74db5S7/uqR+bWmiRaU6k1ZXt4RODiPGeFTFCc6xO/jHuUvV2/oBNPid7sW/Aon7i6+7EybFVp5vo6Vj64Ya62va+tr8bX8h7SF7b2lSpK3aAbkqm5J5C3ISIYraGIqd+rUb8RA9hpMH4Eho1jppdm9w200f7Vj0bQ+nWb3Yu02w1Va6nud4D7dL7aHrYXYdCsg6YS83OAVgChawZSl24LmGXMedhe8WsS9PJI+lKbAgEagi48pfMbAshpoUYMuUAMpuCALAgjjMmXOY+SsREECIiAIiIAiIgCUlYgCJQSsAx8RRzAicx3s3MJLPTFidSLaHz6ec6rPKrRDQ8mlOrKm7o+bcXhXpNldSvmNPQzEqMBc8NJ33a27dOqD2Rr4ae057tncAi+QMAflsfYNwlbNHShr4tfMsnPExJGi3A8NCfOxnqEzc7+c31bdYJoXZD99Db3Ewn2BVF8uWp+4wv7GRuXZtTq05d5MJcNKjDGXvQrp3kceam3vLVxZ5iTe56E4vsv+BLhQlFxa8wZcMUkguoxBw4lVoS4YlesfWlguoouCKOA95esx2xQ5Sw4uTYttRMd0952wjhWJaix7S9PvL0I6c/Yjs9OoGAYG4IBBHAg8DPnLZ1N6zhVBJJ4AT6F2VQNOjSpk3KIqk+IUCSvBxP1CNNSTjz2ZsREk5wiIgCIiAIiIAiIgCIiAIiIBS0samDPSIBh1cAjcVB8xNPjN08M+pQA9V0kjiSLkGxG5bD+7quPBu0Pzmoxe6uJHFKdTzQX/K06faLSjin0XVSa4ZxfE7Ay9/CAeKEj+kwn2PhvtUqq+TX/UzuTUgeQnhU2fTbiin0kbF5ZqtTUXZxA7Dwn+MPQf7Si7CwnzVT6f8AjOzPsGgfsD0nn/8AHKHyxs9WX/eVPJyJNgYU8qx9h/SbXA7tYc2tQZv32P8ASdMp7Boj7My6WCReCiNnqyr1VR9mg3f2ElOxCKtuAUWH/eSgQFAlZZJLgwlJyd2ViIklT//Z',
                    title: 'Ladies Sandal',
                    subtitle: 'farsh',
                    quantity: '1',
                    price: '1250'
                },
                {
                    id: '2',
                    image: 'data:image/jpeg;base64,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',
                    title: 'Long Sandal',
                    subtitle: 'Chamak-leader',
                    quantity: '1',
                    price: '4000'
                },
                {
                    id: '3',
                    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEhARFRIVFRoQFRMVGBcQFxUSGREYFhcXFxUYHyggGBolHRMYITEhJSkuLi4vFx8zODYsNygxLisBCgoKDg0OGxAQGSslICUuLS8vLjcxMCsyKy0tLTItLS0vKzUtLy8tLS0tLy0rNS0rNSstLS0tLS0tLS0tNy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABAEAACAQIEAwUEBwYFBQEAAAAAAQIDEQQSITEFBkETIlFhcQcygZEjQlKhsbLBFFNicoLhFZKi0fAzQ0RzwiT/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAArEQEBAAIBAgQEBwEBAAAAAAAAAQIRAyExEiJBUTJxgfAEE0JSYZGhMyP/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAeXA9AAAAAAAAAAAAAAAAAAAAAAAAAAAGvjMbSoxz1JxivN7vokt2/JFZxPNVStLs8JSk3tmcc0reKhtFec3p1iRbImS1aMVi6dJZqk4xWycna78F4vyRg4fxBV87hGWRWSm+7mlrmWV6q2m/jtprDcO5blL6TFTlKo+ma7t4OfRfwxsixYahGnGMIq0YqyXl+om02SMgAJVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAi+YeKLDUs2eEZyahBy11e7t1sk3bbTWy1JQp0eDTxOLxEp1G403Kkp3c7qoszioPuRlCM8mZJ7a3ZGW9dFsdb6oTjFBVJdpXq1HJLso2SvbVtXktnu7JXvskkbNTi2Jw9CpUpU6sKUVe2SnCCvpdPIm3qtbsu9HDUcNC6UYxhFJzk7vKlbvTer26lL5k4867yxuqUXousn9qXh5Lp18FjlPDN2tcb4umnIZ8wY93yzxDV91mfXe/X1Lf7NuNcTl29RKtOCcYS7ue0kr21Ts7SJCOLRO8scYVCo3J2pySU34WvaXoru/k34F7+Kufls1tX8nw9e6a4bzYpPJWjlezaTTXrHV/L5Fmp1FJKUWmnqmndNeTNTiPC6OIVpxV7aTWkl6SK9h69XAVezqXlSd5XXVdZJfaXVdfW127j3RqZfCtwPItNJp3T1T8j00ZgAAAAAAAAAAAAAAAAAAAAAAAAAA1uI4pUaVSq1fLFyS+0+kV5t2XxPjhWF7GjCMneVs85eNSTzTk/i2a3HLyeFpWTU68ZSv9imnV/NCJpc04/wD8eOzWer/I7qMP6mnfyi19YjKyTdWk30RPMnFHWas/o46wX2n+8l/8r472tVMZI3sZWu2aCV3c4M87ld1144yTUaXZyW60JDC1LWPhrf8A50PmmV2tpfOUeLe7hpvS30T9Fd036LWPkmvq6z/E8Eq0HH6y70H4SWxzrBSeyllejjL7M07xl8GkzonDMaq1KFXRXTzL7M4txnG/lJNfA7OLLx46rl5MfDluNflqbeHhF7wlOl6KFSUYr5JEoRPK881DtP3lSrVX8sq0mvusSxszvcAAQAAAAAAAAAAAAAAAAAAAAAAAAieN1FCpg6j2VbI34KdGcV9+UplfFOpF1nvVbrf0y9xfCCgvgXTmmgp4TEXeXLB1VLfLKn30/wDSc043xeMMP2trOPccF9Wdvd9PDxRlzS2TTXis31YsViUupjp1b9GRuJVTC0aNaajLEVrztJNxpQy5rRj46q7fiRP+JYmtKzq1OrtTtHp0SsY48Fym52bXkkuqtLqrqeqaKwqtfD6qpUknZuM45o3avZ3b1JHhWPWJkqXZ9nVd8sou9OTSvaUXrH1RGXBZN+hOSb16rRgnqiWqY+pClUwtNN1MTOKp+CU45arXpkv61CscM4jCMO0ndWbg47ydROzgl1ZZ+Rac6mJderFZnScqf8Ec6Vl8JPXrqacGFl3ezPlyml4wWGVKnTpR2hFQXwVjOAdDAAAAAAAAAAAAAAAAAAAAAAAAAAAGhx+k54XFQW8qNSK9XTkv1OQ8y1IqdKMYKSxCUXGycZO6y3XrLdNNPVHa5HHeI4B08dgcNNa0aklF/apRtKlLzvGKv5qS6EXc6+2/v/FsfZF8y4yNdxVR/s9SnFwdOop2u2rtSSelo9UiM4dh4Rk28RhrWtpUinrJXtdprT9VZ3J3njAVnWnWdO9JqKUl3krLrbVatlWw+CpTzp03J2vG0nHXXz1/sTxyXj6LZWzPq3cfTjOTfb4dKyt9Im7eajdt9PgZuBzVOpHsFKvWV7JRagrpJtv3mv8AKtdyJq4SnGTUY28m8z2Ld7O4Ltakre7Tt4bzv+CJ5PLx7RjfFm1uCzdfFzjWV5QbutFHNmd0ktEr32363On8rQvVrStpCEKV/wCJuU5L4Ls3/Ucw5L1r4is9tH496U3ZJLdtu1vM7FwHBOjSjGVnUk3UqNfblq0n1SVoryijOy/mfJNvl+aTABdmAAAAAAAAAAAAAAAAAAAAAAAAAAD5kUjmuhn4hgF9mnVqf6cq/MXhlJ4hLPxVr93hLf1Tqp/gRl8N+S2HxRmnRlbx+8rXFuT6dV5qf0UnvZXi/wCno/QubifLiefjlcbuO2yWaqnYLk+hDWpnqv8AieWPyX6sl8RRjQoVnTpwgo05ytFKO0GyZsaXHbLDYlv9zP8AIy0yyyym6jUxnRC+zDgidKGJknrJtLpdaJ26tanSoIguRsN2eBwsbf8AbUvjLvfqT6PRy71wx6ACoAAAAAAAAAAAAAAAAAAAAAAAAAADxlC4bepxHidXonCiv6Y2f5fvL3Ukkm3sld+iOfco4mPYVsTUlGKrV6la8mopJtJavzTK8n/O/wA6n3/S/H8cWSx5YiMVzTgqd714ya6QvO/xXd+80Y89YFv357Zr5dNtnrp6vTzOWcPJf010/mY+6y2IzmZf/kxX/ql+VkJV53u4ypUM9OUcyzz7Kek5Qelnp3br1PqPNdGtGdKvSdGE4ODqOSqRWZW1sr9dzTH8PySzLSl5cL02vXLdv2XC2/cw/IiTKzyJxOnPB4em6kO1guxlDMs14tpab6xSZZjpymq5oAAgAAAAAAAAAAAAAAAAAAAAAAAADU4rxCnhqVSvUdoQV3bV72SXm20vibZE814aFXCYiE5qEcubPLVRcWpK/ldJfEmdyuW8y+0TE4hOFO2HpNNSW8pKXdd3bpaS0tqV7DcB4hiH3cPWtmteaWHio9Es7i2tbvLfwI2MuzqdtKfayjeUVFNQaTun3rb91ePe9TexvN2NqylH9peZaZYNq6vrpTtfeyTWvijosynTHUUnh9U3Q9nOJak62IoUlfNfWs9NbtvJZLSyv6mzW5OwCUnLij73XNSyu2+ZLe2mt1ayKbiKmJk5Zu2bjZXlaMo38pe89Xtt5am9g+CYitKCjUwsW1mtOvCa8W5KLblKPldem5SzLvc/8Xlx7TF88V4XPtpwpVHKlTSpU6kmpOppmlLSy1nKVrdLHzw/h1WdaNKpiI0YuMpdpNZ45lG6i4trfy1NTHzxeGbhmk1GUouVPNVi7zbTjLdxaasbPA8NisdJQVoVGu0XapxTyxd1dJuL1Wtvka7kw7/fuz1vLs36PBMV2lONCthq82nVXZ1XCcpQd+zTqWl2lmnFafBJssPAufMZg6kaGKjUaV7060ZU6qi2nmTneUkltfR3tp0jXyTxGChb9mnZXyxnOF5a2veKUpbavRtu9tyPq8WqQhLh+MpXjZqFOpljKnKcZZZ0akVdNKU7K7Xee5SZY59JZVrjce8077w/GQr04VqbvCazLo/Rro1sbBS/ZRXcsHKLmpShVkrLSycYtXXm2/w6F0MMpq6WgACAAAAAAAAAAAAAAAAAAAAAAeFb9oGFlVwOIUWu6lUd2opxhJSldvTZN/AshWPaJSnLA1sme6yyahreKkr3X2Vu/Qtj3iL2cMrq1r5ZN9HrFtuySitXd3vdW7uiV2bWE4ZiqmTLSqtPdPLQ+N3ay028+qemtwTF1IVP2idPeMlCm80na+k0l7t07W3epkxHHq1RLv5U3rGLtLbZJLV39WvvOi3P9Ote9Vkx9UjT5VxslG/YxS1aqVLu3jNQvG2rdlfY+a/K/EIpzhGjN/V7OreS8cjqWio6ePXbQjnRryc32dVt7SklBrbdTSzarfX9DLTo1lKH0M0lrZTjdP7Wa9/hcpcrP1z7+q0k/bfv6PjHcQr0qjpKLTpxhCS9+0uzjmWZaOz00ZgnxWvNqnled96CUJSba3WVK7Vr38tT2fF1RdqtJOWZpybtq7tJ7xvbz1MlPitObhKnGpHvZU6fem3lbaj16a26Gsvl7qerLhoYxZEsPi0leppBwlF2v3XZKK02Wu3iY8fi3PJLExqZk9O3VSkrKV+7J95r46N9Dahx+tBTfbVLt2UZXaXnmnm+KXnobVPmCq3FOdOVo5pS0Savumnq/RWKf+nfUq/k963uQ+KLC4yDjPLRnLs5RbTjGEm2oqT1yrNHfXubu53S5+aMNw6nJ4mt27p9zNSpqLlGc4zzSgpLWKcYyilbeUdkte5+zziTxPD8NVb1y5H5ZXZLzaSSuU5Z6oxWQ9PAYrPQAAAAAAAAAAAAAAAAAAAAHhGcwSqLD4h03aoqU3B72koNr7yUPHFEwfl/GVJSm7WyLLmn+8d1otnre7fS7MsanelCNk5K/ced3tbv53d203+fRSftWbwuLrqEVBOUcsYxUFZrMmtNffl8blHovOtYnTb06M4tkcNPufRrT3lntfzb8fmYqtarGMm1VTv0alFL0g7383oV+MZraU1/LKUfwZmWKrrarV/zOX43M7ln66X8v8p/EYrD9xVYTlKVODlKUbOXdss0ejsj5XEMNCN6UVGUdu7lS1s3b0ZWsRmm805OUtryUW7JadD3CSdOWaMnGW17R/CxaZeXWkeu1s/xptuLlQato3tPT6qb3v4mOFajUyylQozlKVrReVp2669yXna5Cf4nW1+keuj0hr6901q1WUt23036ei0K4zH9uvqtcr7pviSp05p0IOMO6pqUnUyzze87t2WVb+Xz7j7NcVGrgKLjDKk5L+ZuWdy+Of53OBcPxzWmad921aVleKT236Po9Nra999m2Fp08BQ7PNaTlOWa3v52mkltFZVFeUUTya8PRWd1pPTw9Ris9ABAAAAAAAAAAAAAAAAAAAAAAK1zpy3h8bC1WlGUlrGdu9Fp3XeWtr9Njh/GuC9hUlHLaztY/Sko30KNzty0qycorv208/IvhyXG9ex4fFNerik6HgjzsV4EnjMNKnJxkrNO2uhH1lI7JJezHs15UkFSR9WPtQJ8MNtedFGF0CQ7IyUaDvsPDDbDw3lnFYupTjhouUnOKl4Rje+aX8Ky/wDLn6Y4Fw/9lw9DD5nLs4KGZ/WaWr+ZVPZfwnsaMqsl3qn5V/f8C8nHyZbuo1k08sD0GaQAAAAAAAAAAAAAAAAAAAAAAAAxYiipppmUAc/5p5YhWvpaXSS/XxOa8V4VVw7alG8ej6NeT/Q/QeKw6mtStcT4QndOKa+Yxzyw+H+l9Y593EIqk95OD802vmrn1GnT6VafzOgY7lCjJu0XF+W3y2I5cixb/wCpL5L/AGN5+KnrKpeC+lipp01tJSfkmyycqcAniqkW42gnd/3/ANiw8J5GoxacnKXyRfOE8PhTSUYqMVsloVy57l0k0mccx7t7B4eNOMYxVkkkl5GcAyQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8VKaluj7AEdW4YnsYY8K8kS4Gk7rToYFLc20rHoCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==',
                    title: 'Short Sandal',
                    subtitle: 'Soft-leader',
                    quantity: '1',
                    price: '3526'
                },

            ]
        }
    },

    computed: {
        // totalPrice() {
        //     return this.checkoutitems.map(item => item.quantity * item.price)
        // },

        // SubTotal() {
        //     return this.totalPrice.reduce((total, price) => total + price, 0);
        // },

        // totalWithTax() {
        //     return (this.SubTotal * (this.taxPercentage / 100));
        // },

        // grandTotal() {
        //     return this.SubTotal + (this.totalWithTax + this.shipping);
        // },

        cart() {
            return this.$store.state.cart;
        },

        totalPriceCount() {
            return this.cart.map(itemCart => itemCart.quantity * itemCart.product.price);
        },

        subTotal2() {
            return this.totalPriceCount.reduce((total, price) => total + price, 0).toFixed(2);
        },

        totalWithTax2() {
            return (this.subTotal2 * (this.taxPercentage / 100)).toFixed(2);
        },

        grandTotal2() {
            return (parseFloat(this.subTotal2) + parseFloat(this.totalWithTax2) + parseFloat(this.shipping)).toFixed(2);
        },
    },



    methods: {
        // totalCost(price) {
        //     return this.quantity * price;
        // }

        increment() {
            this.quantity++
        },
        decrement() {
            if (this.quantity === 1) {
                alert('Negative quantity not allowed')
            } else {
                this.quantity--
            }
        },

        removeProduct(product) {
            console.log("clicked")
            this.$store.dispatch("removeProduct", product);

        }
    }
}


</script>

<style scoped>
.section-title {
    margin-bottom: 20px;
}

.section-title h2 {
    font-size: 1.2rem;
    font-weight: 900;
    text-align: start;
}

.section-title {
    width: 98%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.3);
}

.section-title p span {
    font-size: 40px;
    margin: 0 5px;
    cursor: pointer;
    color: #555;
    width: 30PX;
    height: 30PX;
    padding: 3px;
    display: inline-block;
    text-align: center;
    line-height: 19px;
    border-radius: 3px;
}

.shopping-cart {
    padding: 100px 0;
}

.product-image {
    float: left;
    width: 20%;
}

.product-details {
    float: left;
    width: 37%;
}

.product-price {
    float: left;
    width: 12%;
}

.product-quantity {
    float: left;
    width: 10%;
}

.product-removal {
    float: left;
    width: 9%;
}

.product-line-price {
    float: left;
    width: 12%;
    text-align: right;
}

/* This is used as the traditional .clearfix class */
.group:before,
.shopping-cart:before,
.column-labels:before,
.product:before,
.totals-item:before,
.group:after,
.shopping-cart:after,
.column-labels:after,
.product:after,
.totals-item:after {
    content: "";
    display: table;
}

.group:after,
.shopping-cart:after,
.column-labels:after,
.product:after,
.totals-item:after {
    clear: both;
}

.group,
.shopping-cart,
.column-labels,
.product,
.totals-item {
    zoom: 1;
}

/* Apply clearfix in a few places */
/* Apply dollar signs */
.product .product-price:before,
.product .product-line-price:before,
/* .totals-value:before {
    content: "Rs ";
} */

.totals-value:after {
    content: " $";
}

/* Body/Header stuff */
/* body {
    padding: 0px 30px 30px 20px;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 100;
} */

h1 {
    font-weight: 100;
}

label {
    color: #aaa;
}

/* .shopping-cart {
    margin-top: -45px;
} */

/* Column headers */
.column-labels label {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
}

.column-labels .product-image,
.column-labels .product-details,
.column-labels .product-removal {
    text-indent: -9999px;
}

/* Product entries */
.product {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.product .product-image {
    text-align: center;
}

.product .product-image img {
    width: 100px;
}

.product .product-details .product-title {
    margin-right: 20px;
    text-align: start;
    /* font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium"; */
}

.product .product-details .product-description {
    margin: 5px 20px 5px 0;
    line-height: 1.4em;
    text-align: start;

}

.product .product-quantity input {
    width: 40px;
}

.product .remove-product {
    border: 0;
    padding: 4px 8px;
    background-color: #c66;
    color: #fff;
    /* font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium"; */
    font-size: 12px;
    border-radius: 3px;
}

.product .remove-product:hover {
    background-color: #a44;
}

/* Totals section */
.totals .totals-item {
    float: right;
    clear: both;
    width: 100%;
    margin-bottom: 10px;
}

.totals .totals-item label {
    float: left;
    clear: both;
    width: 79%;
    text-align: right;
}

.totals .totals-item .totals-value {
    float: right;
    width: 21%;
    text-align: right;
}

@media only screen and (max-width:480px) {
    .totals .totals-item label {
        width: 65%;
    }

    .totals .totals-item .totals-value {
        width: 35%;
    }
}

.totals .totals-item-total {
    /* font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium"; */
}

.checkout {
    float: right;
    border: 0;
    margin-top: 20px;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    border-radius: 3px;
    background: #2d71a1;
    background: linear-gradient(-45deg, #1391a5, #274685);
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
    padding: 10px 20px !important;
}

.return-btn {
    border: 0;
    margin: 20px 0;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    border-radius: 3px;
    background: #2d71a1;
    background: linear-gradient(-45deg, #274685, #1391a5);
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
    padding: 10px 20px !important;
}


.checkout:hover {
    background-color: #494;
}

/* Make adjustments for tablet */
@media screen and (max-width: 650px) {
    .shopping-cart {
        margin: 0;
        padding-top: 100px;
        border-top: 1px solid #eee;
    }

    .column-labels {
        display: none;
    }

    .product-image {
        float: right;
        width: auto;
    }

    .product-image img {
        margin: 0 0 10px 10px;
    }

    .product-details {
        float: none;
        margin-bottom: 10px;
        width: auto;
    }

    .product-price {
        clear: both;
        width: 70px;
    }

    .product-quantity {
        width: 100px;
    }

    .product-quantity input {
        margin-left: 20px;
    }

    .product-quantity:before {
        content: "x";
    }

    .product-removal {
        width: auto;
    }

    .product-line-price {
        float: right;
        width: 70px;
    }
}

/* Make more adjustments for phone */
@media screen and (max-width: 350px) {
    .product-removal {
        float: right;
    }

    .product-line-price {
        float: right;
        clear: left;
        width: auto;
        margin-top: 10px;
    }

    .product .product-line-price:before {
        content: "Item Total: $";
    }

    .totals .totals-item label {
        width: 60%;
    }

    .totals .totals-item .totals-value {
        width: 40%;
    }
}

.quantity-toggle {
    display: flex;

}

.quantity-toggle input {
    border: 0;
    /* border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd; */
    width: 2.5rem;
    text-align: center;
    /* padding: 0 0.5rem; */
    /* height: 100%; */
}


/* -------------------------/Quantity/---------------------------  */
.quantity-toggle button {
    border: 2px solid #ddd;
    padding: 0.5rem;
    background: #f5f5f5;
    color: #888;
    font-size: 1rem;
    cursor: pointer;
}

.quantity-toggle .dec-btn {
    border-radius: 15px 0 0 15px;
}

.quantity-toggle .inc-btn {
    border-radius: 0 15px 15px 0;
}



/* ///////////////////////////Empty//////////////////////////  */

.empty-cart {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    /* font-family: 'Maison Neue'; */
    font-weight: 300;
    padding-bottom: 20px;
}

svg {
    max-width: 20rem;
    padding: 1.5rem 1rem;
}

svg #oval,
svg #plus,
svg #diamond,
svg #bubble-rounded {
    -webkit-animation: plopp 4s ease-out infinite;
    animation: plopp 4s ease-out infinite;
}

svg #oval:nth-child(1),
svg #plus:nth-child(1),
svg #diamond:nth-child(1),
svg #bubble-rounded:nth-child(1) {
    -webkit-animation-delay: -240ms;
    animation-delay: -240ms;
}

svg #oval:nth-child(2),
svg #plus:nth-child(2),
svg #diamond:nth-child(2),
svg #bubble-rounded:nth-child(2) {
    -webkit-animation-delay: -480ms;
    animation-delay: -480ms;
}

svg #oval:nth-child(3),
svg #plus:nth-child(3),
svg #diamond:nth-child(3),
svg #bubble-rounded:nth-child(3) {
    -webkit-animation-delay: -720ms;
    animation-delay: -720ms;
}

svg #oval:nth-child(4),
svg #plus:nth-child(4),
svg #diamond:nth-child(4),
svg #bubble-rounded:nth-child(4) {
    -webkit-animation-delay: -960ms;
    animation-delay: -960ms;
}

svg #oval:nth-child(5),
svg #plus:nth-child(5),
svg #diamond:nth-child(5),
svg #bubble-rounded:nth-child(5) {
    -webkit-animation-delay: -1200ms;
    animation-delay: -1200ms;
}

svg #oval:nth-child(6),
svg #plus:nth-child(6),
svg #diamond:nth-child(6),
svg #bubble-rounded:nth-child(6) {
    -webkit-animation-delay: -1440ms;
    animation-delay: -1440ms;
}

svg #oval:nth-child(7),
svg #plus:nth-child(7),
svg #diamond:nth-child(7),
svg #bubble-rounded:nth-child(7) {
    -webkit-animation-delay: -1680ms;
    animation-delay: -1680ms;
}

svg #oval:nth-child(8),
svg #plus:nth-child(8),
svg #diamond:nth-child(8),
svg #bubble-rounded:nth-child(8) {
    -webkit-animation-delay: -1920ms;
    animation-delay: -1920ms;
}

svg #oval:nth-child(9),
svg #plus:nth-child(9),
svg #diamond:nth-child(9),
svg #bubble-rounded:nth-child(9) {
    -webkit-animation-delay: -2160ms;
    animation-delay: -2160ms;
}

svg #oval:nth-child(10),
svg #plus:nth-child(10),
svg #diamond:nth-child(10),
svg #bubble-rounded:nth-child(10) {
    -webkit-animation-delay: -2400ms;
    animation-delay: -2400ms;
}

svg #oval:nth-child(11),
svg #plus:nth-child(11),
svg #diamond:nth-child(11),
svg #bubble-rounded:nth-child(11) {
    -webkit-animation-delay: -2640ms;
    animation-delay: -2640ms;
}

svg #oval:nth-child(12),
svg #plus:nth-child(12),
svg #diamond:nth-child(12),
svg #bubble-rounded:nth-child(12) {
    -webkit-animation-delay: -2880ms;
    animation-delay: -2880ms;
}

svg #oval:nth-child(13),
svg #plus:nth-child(13),
svg #diamond:nth-child(13),
svg #bubble-rounded:nth-child(13) {
    -webkit-animation-delay: -3120ms;
    animation-delay: -3120ms;
}

svg #oval:nth-child(14),
svg #plus:nth-child(14),
svg #diamond:nth-child(14),
svg #bubble-rounded:nth-child(14) {
    -webkit-animation-delay: -3360ms;
    animation-delay: -3360ms;
}

svg #oval:nth-child(15),
svg #plus:nth-child(15),
svg #diamond:nth-child(15),
svg #bubble-rounded:nth-child(15) {
    -webkit-animation-delay: -3600ms;
    animation-delay: -3600ms;
}

svg #oval:nth-child(16),
svg #plus:nth-child(16),
svg #diamond:nth-child(16),
svg #bubble-rounded:nth-child(16) {
    -webkit-animation-delay: -3840ms;
    animation-delay: -3840ms;
}

svg #bg-line:nth-child(2) {
    fill-opacity: 0.3;
}

svg #bg-line:nth-child(3) {
    fill-opacity: 0.4;
}

.empty-cart h3 {
    font-size: 1.6rem;
    /* line-height: 2rem; */
    margin: 0;
    padding: 0;
    font-weight: 600;
}

.empty-cart p {
    color: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    /* line-height: 24px; */
    margin: 0.5rem auto 0 auto;
}

.empty-cart body {
    background: #f2f2f2;
}

@-webkit-keyframes plopp {
    0% {
        transform: translate(0, 0);
        opacity: 1;
    }

    100% {
        transform: translate(0, -10px);
        opacity: 0;
    }
}

@keyframes plopp {
    0% {
        transform: translate(0, 0);
        opacity: 1;
    }

    100% {
        transform: translate(0, -10px);
        opacity: 0;
    }
}
</style>