<template>
    <section class="trend-outfits">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <h2>Trending Outfits</h2>
                    </div>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-sm-6 col-md-6 col-lg-3 py-1" v-for="(trend, index) in trends" key="index">
                    <div class="product-item shadow">
                        <div class="ribbon-wrapper">
                            <div class="ribbon"> Trending </div>
                        </div>
                        <div class="image-box">
                            <img :src="trend.image" width="100%" alt="">
                        </div>
                        <a href="#" class="product-item__name">{{trend.title}}</a>
                        <div class="product-item__price">
                            <a href="#" class="btn btn--buy">Add to Card</a>
                            <div class="price">
                                <!-- <a href="#" class="delivery">Best Selling</a> -->
                                <div class="rating">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <span>{{trend.price}}<span class="rouble"><i class="bi bi-currency-dollar"></i></span></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'TrendOutfits',

    data() {
        return {

            trends:[
                {
                    image : 'https://pngimage.net/wp-content/uploads/2018/06/ladies-dress-png.png',
                    title : 'Ladies Wedding cloths',
                    link : '',
                    price : '234.23'
                },
                {
                    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc778KoSH0f4IDw3vOk2n6lnTPGj6XGH7C1Q&usqp=CAU',
                    title : 'Ladies Wedding cloths',
                    link : '',
                    price : '361.03'
                },
                {
                    image : 'data:image/jpeg;base64,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',
                    title : 'Ladies Wedding cloths',
                    link : '',
                    price : '886.23'
                },
                {
                    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Fu__jYWfMhH5XCewvHbePAOz5xMbPgWUK7EZEKjz50aVwIzjDk9Qh-tm2AmTFLk5BGs&usqp=CAU',
                    title : 'Ladies Wedding cloths',
                    link : '',
                    price : '777.00'
                }
            ]

        }
    }
}


</script>

<style scoped>

.trend-outfits{
    margin-top: 80px;
}

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

 .section-title p span:hover {
  background-color: #222;
  color: white;
}
.product-item {
    /* height: 330px; */
    /* width: 260px; */
    border: 2px solid #f1f1f0;
    text-align: center;
    padding: 15px;
    position: relative;
}

.product-item__name {
    display: block;
    color: #394264;
    text-decoration: none;
    font-size: 17px;
    padding: 5px 0 25px 0;
}

.btn--buy:hover {
    background-color: #e3a049;
}

.price span {
    font-size: 18px;
    font-weight: 600;
}

.btn {
    display: block;
    background-color: #e3a049;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 14px;

    text-align: center;
    padding: 6px 7px;
    text-decoration: none;
}

a.btn {
    color: #fff;
}

.product-item {
    position: relative;
}

.product-item .image-box{
    height: 270px;
}

.product-item .image-box img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.product-item__price {
    width: 100%;
    height: 50px;
}

.product-item__price .rating i{
    margin: 0 2px;
    font-size: 14px;
}

.btn--buy,
.price {
    position: absolute;
    bottom: 20px;
}

.price {
    right: 20px;
}

/*Corner ribbons*/

.ribbon-wrapper {
    /* background-color: blue; */
    width: 90px;
    height: 90px;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
}

.ribbon {
    font: 20px Roboto Condensed;
    color: #fff;
    background-color: #068cda;
    text-align: center;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    position: relative;
    padding: 3px 0;
    left: -30px;
    /*top: 15px;*/
    top: 15px;
    width: 120px;
    /*  -webkit-box-shadow: 5px 2px 3px rgba(229,229,229,0.9);
  -moz-box-shadow:    5px 2px 3px rgba(229,229,229,0.9);
  box-shadow:         5px 2px 3px rgba(229,229,229,0.9);*/
}

/* .product-item ul {
    text-align: left;
    font-size: 18px;
    line-height: 18px;
    color: #338dc9;
}

.product-item li span {
    color: #34363d;
    font-size: 14px;
} */

/* .delivery {
    font-size: 14px;
    color: #888888;
    margin: 0 0 5px 20px;
    display: block;
} */
</style>