<script>
    import Slider from '$lib/commons/Swiper.svelte';
    import LeadFormLeft from '$lib/commons/LeadFormLeft.svelte';
    import { onMount } from 'svelte';

    let isMobile = true;

    const formToggle = () => {
        isMobile = !isMobile;
    }

    onMount(()=> {
        if(window.innerWidth < 768){
            isMobile = false;
        }else{
            isMobile = true;
        }
    })

</script>
<!-- ======= Hero Section ======= -->
<section id="hero" class="d-flex align-items-center">

    <Slider/>

    {#if isMobile}
        <div class="home-lead-form">
            <LeadFormLeft />
        </div>
    {/if}
    <!-- <div class="home-lead-form-mob">
        <LeadFormLeft />
    </div> -->
    <!-- <div class="slider-content">edfrwerfwerfwerfwerf</div> -->
    <!--SLIDER START-->
    <!--div class="home-slider">
        <div class="hero-slider">
            <Slider/>
        </div>        
    </div-->
    <!--SLIDER END-->

    <div class="float-icon-box">
        {#if !isMobile}<div class="form-icon form-open" on:click={formToggle}><i class="bi bi-card-heading"></i></div>{/if}
        {#if isMobile}<div class="form-icon form-close" on:click={formToggle}><i class="bi bi-x-lg"></i></div>{/if}
    </div>

</section>
<!-- End Hero -->

<style>
    @media(max-width: 768px){
        /* .home-lead-form{
            display: none;
        } */
        .float-icon-box {
            height: 50px;
            width: 50px;
            position: fixed;
            bottom: 10px;
            background: white;
            right: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            border-radius: 100px;
            font-size: 26px;
            color: #888;
            cursor: pointer;
            z-index: 1;
            box-shadow: 10px 10px 50px 2px #999;
        }
        .form-close{
            color: red;
        }
    }
    @media(min-width: 769px){
        .float-icon-box{
            display: none;
        }
    }
</style>
