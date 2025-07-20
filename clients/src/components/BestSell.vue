<template>

  <section id="sell-product" class="sell-product">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Best Selling Product</h2>
            <P>
              <span @click="moveLeft">&#139;</span>
              <span @click="moveRight">&#155;</span>
            </P>
          </div>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col best-sell-section" >

          <div class="product" v-for="(card, index) in cards" :key="index" ref="product" @mouseover="mouseOver" v-bind:style="{ transform: 'translateX(' + x + '%)' }">
            <div class="card h-100">
              <div class="card-header">
              <img class="card-img" :src="card.image" alt="Vans">
                </div>
              <div class="card-body pb-1 d-flex justify-content-between">
                <div class="text-start">
                  <b class="card-text">{{card.title}}</b>
                  <p class="card-subtitle mb-2 text-muted">{{card.subtitle}}</p>
                </div>
                <!-- <div class="price text-success">
                  <h5 class="mt-2">{{card.price +"$"}}</h5>
                </div> -->
              </div>
              <!-- <div class="card-footer border-0 pt-1">
                <div class="buy d-flex justify-content-between align-items-center">
                  <a href="#" class="card-link pt-3 text-warning like">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </a>
                  <a href="#" class="btn btn-danger mt-3" style="font-size: 12px;"><i class="fas fa-shopping-cart"></i>
                    Add to Cart</a>
                </div>
              </div> -->
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>


</template>

<script>
export default {
  name: 'BestSell',
  data() {
    return {
      x: 0,
      active : false,
      windowWidth: window.innerWidth,

      sliderstay: true,

      cards: [
        {
          image: 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
         title: 'Vans Shoes', 
         subtitle: 'Walder Frey', 
         price: '120',
         link: 'http://www.gstatic.com/webp/gallery/1.webp'
        },
        {
          image: 'https://5.imimg.com/data5/SELLER/Default/2022/2/BP/NA/DY/55231505/31-500x500.jpg',
         title: 'Gallery', 
         subtitle: 'Walder Frey', 
         price: '50',
         link: 'http://www.gstatic.com/webp/gallery/1.webp'
        },
        {
          image: 'data:image/jpeg;base64,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',
         title: 'Gallery', 
         subtitle: 'Walder Frey', 
         price: '100',
         link: 'http://www.gstatic.com/webp/gallery/1.webp'
        },
        {
          image: 'https://i.ebayimg.com/images/g/u4oAAOSw~jlgJXv7/s-l1600.jpg',
         title: 'Gallery', 
         subtitle: 'Walder Frey', 
         price: '65.52',
         link: ''
        },
        {
          image: 'https://pngimage.net/wp-content/uploads/2018/06/ladies-dress-png.png',
         title: 'Ladies Dress', 
         subtitle: 'Pure Carton', 
         price: '1500',
         link: ''
        },
        {
          image: 'https://freepngimg.com/thumb/makeup/27722-5-makeup-transparent-thumb.png',
         title: 'face brush', 
         subtitle: 'Soft Frey', 
         price: '2000',
         link: ''
        },
        {
          image: 'https://www.affordable.pk/uploads/category/1508851093_MAGA-TAG-Accessories.jpg',
         title: 'Gallery', 
         subtitle: 'Walder Frey', 
         price: '65.52',
         link: ''
        },
        {
          image: 'https://media.glamour.com/photos/56963be193ef4b09520fdbf5/master/w_320%2Cc_limit/fashion-2011-06-0606-01-summer-party-shoes-leopard-print-heel_li.jpg',
         title: 'Gallery', 
         subtitle: 'Walder Frey', 
         price: '50',
         link: 'http://www.gstatic.com/webp/gallery/1.webp'
        }
      ]
    }
  },

  // mounted() {
  //   setInterval(() => {
  //     this.x -= 100;
  //     if (this.x < -this.$refs.product.offsetWidth) {
  //       this.x = 0;
  //     }
  //   }, 4000);
  // },

  methods: {
    moveLeft() {
        this.x -= 100;
    },

    moveRight() {
        this.x += 100;      
    },
    // mouseOver(){
    //   this.x = 0;
    // },

    // mouseover(){
    //   this.sliderstay = !this.sliderstay;
    // }

  }
}


</script>

<style scoped>
.sell-product .section-title {
  margin-bottom: 20px;
}

.sell-product .section-title h2 {
  font-size: 1.2rem;
  font-weight: 900;
  text-align: start;
}

.sell-product .section-title {
  width: 98%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
}

.sell-product .section-title p span {
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

.sell-product .section-title p span:hover {
  background-color: #222;
  color: white;
}

.sell-product .best-sell-section {
  width: 100%;
  display: flex;
  margin: auto;
  overflow-x: auto;
  align-items: center;

}

.sell-product .best-sell-section::-webkit-scrollbar {
  display: none;
}

.sell-product .best-sell-section .product {
  width: 25%;
  height: 300px;
  /* background: whitesmoke; */
  margin: 0;
  padding: 8px;
  border-radius: 10px;
  position: relative;
  left: 0;
  transition: 0.5s;
}

.sell-product .best-sell-section .product .card {
  width: 100%;
  height: 300px;
  background: whitesmoke;
}


.sell-product .best-sell-section .product .card .card-header {
  /* background: #000; */
  padding: 0;
  overflow: hidden;
  height: 260px;
  position: relative;
  border-radius: 4px 4px 0 0;
  margin: 0;
  border: 0;
}

.sell-product .best-sell-section .product .card .card-header .card-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.sell-product .best-sell-section .product .card-body b, p {
  font-size: 0.8rem;
}

.sell-product .best-sell-section .product .card-footer {
  background: whitesmoke;
}

.sell-product .best-sell-section .product .card-footer .fa-star{
  font-size: 10px;
  padding: 0 2px;
}


@media only screen and (min-width: 1200px) {
  .sell-product .best-sell-section .product {
    min-width: 20%;
  }
}

@media only screen and (max-width: 1200px) {
  .sell-product .best-sell-section .product {
    min-width: 25%;
  }
}

@media only screen and (max-width: 992px) {
  .sell-product .best-sell-section .product {
    min-width: 33%;
  }
}

@media only screen and (max-width: 768px) {
  .sell-product .best-sell-section .product {
    min-width: 49%;
  }
}

@media only screen and (max-width: 480px) {
  .sell-product .best-sell-section .product {
    min-width: 98%;
  }
}
</style>