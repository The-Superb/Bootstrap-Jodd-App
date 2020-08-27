<template>
  <div>
    <div class="bg-home">
      <Navbar />
      <Home />
    </div>
      <AboutUs />
      <Features />
      <Screens />
      <ContactUs />
      <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Home from './views/Home'
import AboutUs from './views/AboutUs'
import Features from './views/Features'
import Screens from './views/Screens'
import ContactUs from './views/ContactUs'
import Footer from './views/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    AboutUs,
    Features,
    Screens,
    ContactUs,
    Footer
  }
}
</script>

<style>

  .yellow{
    color: var(--yellow) !important;
  }

  .white{
    color: var(--white) !important;
  }

  .blue{
    color: var(--blue) !important;
  }

  .btn-yellow{
    background-color: var(--yellow) !important;
  }

  .btn-blue{
    background-color: var(--blue) !important;
    display: block;
    margin: 0 auto;
    width: 12rem;
  }

  .fs-logo{
    font-size: 2rem;
  }

  .bg-home{
    background-image: url('assets/bg-1.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }

  .fs-home{
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .home-phones{
    position: relative;
    margin-left: 0%;
    margin-top: 0%;
  }

  .btn-white{
    border-color: var(--white) !important;
    color: var(--white) !important;
  }
  
  .btn-about{
    background-color: #ffbb002f !important;
    font-weight: 600;
  }

  .mb-apps{
    margin-left: 3rem;
    margin-bottom: 1.5rem;
  }

  .bg-dots{
    background-image: url('assets/Dots.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }

  .bg-iPhone{
    background-image: url('assets/siPhone.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding: 6px 0;
  }

  .mt-phone{
    margin-top: 3rem;
  }

  .owl-item.active.center {
    transform: scale(1.4, 1.47);
    padding-bottom: 2.5rem;
  }

  .bg-world{
    background-image: url('assets/Earth.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  .bg-2{
    background-image: url('assets/bg-2.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .fs-app{
    font-size: 3rem;
    font-weight: 700;
    padding-top: 1rem;
    margin-bottom: 1rem;
  }

  .pb-app{
    padding-bottom: 5rem;
  }

  .app-w{
    max-width: 49%;
    height: 100%;
  }

  .form-color, input, textarea{
    border: none;
    color: #CCCCCC !important;
    background-color: #e7e7e7 !important;
    resize: none;
  }

  .bg-footer{
    background-image: url('assets/bg-footer.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 18.7rem;
  }

  .pt-footer{
    padding-top: 4rem;
  }

  .fadePhone .owl-item.active {
    opacity: 0.5;
  }

  .fadePhone .owl-item.active + div {
    opacity: 0.8;
  }

  .fadePhone .owl-item.active + div + div {
    opacity: 1;
  }

  .fadePhone .owl-item.active + div + div + div {
    opacity: 0.8;
  }

  .fadePhone .owl-item.active + div + div + div + div {
    opacity: 0.5;
  }

  @media (max-width:1000px) {
    .img-none {
      display: none;
    }

    .mb-mobile{
      margin-bottom: 5rem;
    }

}

  @media (min-width:700px) {
    .ml-ipad{
      margin-left: 18rem;
      margin-top: -5rem;
    }
}

  @media (min-width: 1025px) {

    .fs-home{
      font-size: 3.5rem;
      font-weight: 700;
      margin-top: 10rem;
    }

    .home-phones{
      position: relative;
      margin-left: 60%;
      margin-top: -32%;
    }

    .mt-ec{
      margin-top: 12rem;
      margin-bottom: 5rem;
    }

    .mt-f{
      margin-top: 10rem;
    }

    .pb-app{
      padding-bottom: 15rem;
    }

    .fs-app{
      font-size: 2.6rem;
      font-weight: 700;
      padding-top: 6rem;
      margin-bottom: 1rem;
    }

    .bg-iPhone{
      background-image: url('assets/siPhone.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      padding: 10px 0;
    }

    .mt-phone{
      margin-top: 3rem;
    }

    .owl-item.active.center {
      transform: scale(1.17, 1.22);
      padding-bottom: 2.5rem;
    }

  }

</style>