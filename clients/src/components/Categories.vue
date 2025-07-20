<template>
  <!-- ======= Portfolio Section ======= -->
  <section id="portfolio" class="portfolio">
    <div class="container">

      <div class="section-title">
        <h2>Product Categories</h2>
        <hr>
        <span></span>
        <!-- <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p> -->
      </div>


      <div class="row portfolio-container">

        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item wow fadeInUp" v-for="(categorie, index) in categories">
          <div class="portfolio-wrap">
            <figure>
              <img :src="categorie.image" class="img-fluid" alt="">
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                class="link-preview portfolio-lightbox" title="Preview"><i class="bi bi-plus"></i></a>
              <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bi bi-link"></i></a>
            </figure>

            <div class="portfolio-info">
              <h4><a>
                  <RouterLink :to="categorie.path">{{ categorie.title }}</RouterLink>
                </a></h4>
              <!-- <p>App</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- End Portfolio Section -->


</template>

<script>

export default {
  name: 'Categories',

  data() {
    return {
      categories: [
        {
          image: 'https://rukminim1.flixcart.com/image/850/650/kqjtd3k0/hand-messenger-bag/i/n/l/orignal-sea-green-combo-messenger-bag-1-orignal-sea-green-combo-original-imag4j98pswu6zqe.jpeg?q=90',
          title: 'Handbags',
          path: '/categories-details'
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubq25jRo4fHvEcjrUGDSUO2060hhNi2eDUg&usqp=CAU',
          title: 'Clothing',
          path: '/categories-details'
        },
        {
          image: 'data:image/jpeg;base64,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',
          title: 'Sandal',
          path: '/categories-details'
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4C2d_4N_Y1vwjx1poutrwSpwXy5fJ3VXogQ&usqp=CAU',
          title: 'Farmal Coutes',
          path: '/categories-details'
        }
      ]
    }
  },
}


</script>

<style scoped>
/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
.portfolio {
  padding: 60px 0;
}

.portfolio .section-title {
  margin-bottom: 20px;
}

.portfolio .section-title h2 {
  font-size: 1.2rem;
  font-weight: 900;
  text-align: start;
}

/* .portfolio .section-title span::before{
 content: "";
 width: 50px;
 height: 3px;
 background-color: #3498db;
 position: absolute;
 align-items: start;
} */
.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 0 35px 0;
  list-style: none;
  text-align: center;
}

.portfolio #portfolio-flters li {
  cursor: pointer;
  margin: 0 15px 15px 0;
  display: inline-block;
  padding: 10px 20px;
  font-size: 12px;
  line-height: 20px;
  color: #444444;
  border-radius: 4px;
  text-transform: uppercase;
  background: #fff;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.filter-active {
  background: #3498db;
  color: #fff;
}

.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

.portfolio .portfolio-wrap {
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
}

.portfolio .portfolio-wrap:hover {
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.16);
}

.portfolio .portfolio-item {
  position: relative;
  height: 330px;
  overflow: hidden;
}

.portfolio .portfolio-item figure {
  background: #000;
  overflow: hidden;
  height: 260px;
  position: relative;
  border-radius: 4px 4px 0 0;
  margin: 0;
}

.portfolio .portfolio-item figure img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.portfolio .portfolio-item figure:hover img {
  opacity: 0.4;
  transition: 0.4s;
}

.portfolio .portfolio-item figure .link-preview,
.portfolio .portfolio-item figure .link-details {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  line-height: 0;
  text-align: center;
  width: 36px;
  height: 36px;
  background: #fff;
  border-radius: 50%;
  transition: all 0.2s linear;
  overflow: hidden;
  font-size: 20px;
}

.portfolio .portfolio-item figure .link-preview i,
.portfolio .portfolio-item figure .link-details i {
  color: #384046;
  line-height: 0;
}

.portfolio .portfolio-item figure .link-preview:hover,
.portfolio .portfolio-item figure .link-details:hover {
  background: #3498db;
}

.portfolio .portfolio-item figure .link-preview:hover i,
.portfolio .portfolio-item figure .link-details:hover i {
  color: #fff;
}

.portfolio .portfolio-item figure .link-preview {
  left: calc(50% - 38px);
  top: calc(50% - 18px);
}

.portfolio .portfolio-item figure .link-details {
  right: calc(50% - 38px);
  top: calc(50% - 18px);
}

.portfolio .portfolio-item figure:hover .link-preview {
  opacity: 1;
  left: calc(50% - 44px);
}

.portfolio .portfolio-item figure:hover .link-details {
  opacity: 1;
  right: calc(50% - 44px);
}

.portfolio .portfolio-item .portfolio-info {
  background: #fff;
  text-align: center;
  padding: 30px;
  height: 60px;
  border-radius: 0 0 3px 3px;
}

.portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  line-height: 1px;
  font-weight: 700;
  margin-bottom: 18px;
  padding-bottom: 0;
}

.portfolio .portfolio-item .portfolio-info h4 a {
  color: #333;
  text-decoration: none;
}

.portfolio .portfolio-item .portfolio-info h4 a:hover {
  color: #3498db;
}

.portfolio .portfolio-item .portfolio-info p {
  padding: 0;
  margin: 0;
  color: #b8b8b8;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
}
</style>