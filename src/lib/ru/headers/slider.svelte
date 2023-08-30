<script>
  import LeadFormLeft from "$lib/ru/commons/LeadFormLeft.svelte";
  import { onMount } from "svelte";

  let isMobile = true;
  let formShow = false;

  const formToggle = () => {
    isMobile = !isMobile;
    formShow = !formShow;
  };

  onMount(() => {
    if (window.innerWidth < 768) {
      isMobile = true;
    } else {
      isMobile = false;
    }
  });
</script>

<!-- ======= Hero Section ======= -->
<section id="hero" class="d-flex align-items-center">
  <!-- <Slider/> -->
  {#if isMobile && formShow}
    <div class="home-lead-form">
      <LeadFormLeft />
    </div>
  {:else if !isMobile}
    <div class="home-lead-form" id="home-lead-form">
      <LeadFormLeft />
    </div>
  {/if}
</section>
<div class="icon-container">
  <div class="p-0 bd-highlight float-icon-box float-icon-box-left">
    <a
      data-sveltekit-prefetch
      style="color: black;"
      href="https://api.whatsapp.com/send?phone=971522491227&text=Добрый%20день,%20хотел%20бы%20узнать%20больше%20об%20одном%20из%20ваших%20объектов"
      class="text-center"
    >
      <i class="FSbx bx bi-whatsapp" /><span class="float-text-icon">Whatsapp</span>
    </a>
  </div>

  <div class="float-icon-box float-icon-box-right">
    {#if isMobile}<a href="#home-lead-form" style="color: black;">
        <div class="form-icon form-open" id="form-open" on:click={formToggle}>
          <i class="bi bi-card-heading" /><span class="float-text-icon">Message</span>
        </div>
      </a>{/if}
    {#if !isMobile}<div class="form-icon form-close" on:click={formToggle}>
        <i class="bi bi-x-lg" /><span class="float-text-icon">Message</span>
      </div>{/if}
  </div>
</div>

<!-- End Hero -->

<style>
  #hero {
    background-image: url("/assets/img/home/sliders/header-bg-min.webp");
    background-size: cover;
  }
  @media (max-width: 768px) {
    .float-icon-box {
      padding: 6px 9px;
      bottom: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 100px;
      font-size: 26px;
      color: #888;
      cursor: pointer;
      z-index: 1;
    }

    .form-close {
      color: red;
    }
    .bi,
    .bi-whatsapp {
      border-radius: 43px;
      padding: 6px 7px;
      color: #f7f4f5;
      font-size: 21px;
    }
    .bi-x-lg {
      color: red !important;
    }
    span.float-text-icon {
      font-size: 18px;
      margin-left: 5px;
      color: white;
    }
    .icon-container {
      background: #000000cc;
      height: 50px;
      width: 100%;
      position: fixed;
      bottom: -1px;
      z-index: 1;
      display: flex;
      justify-content: space-evenly;
    }
    .bi-card-heading:before,
    .bi-whatsapp::before,
    .bi-x-lg:before {
      font-size: 18px;
    }
    .bi-whatsapp::before {
      color: white;
      content: "\f618";
      background: #47c357 !important;
      border-radius: 101px;
    }
    .bi-card-heading:before {
      background-color: #4167b1;
      color: white;
    }
  }
  @media (min-width: 769px) {
    .float-icon-box {
      display: none;
    }
  }
</style>
