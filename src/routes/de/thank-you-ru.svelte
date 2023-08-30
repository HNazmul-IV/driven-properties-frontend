<!-- <script>
    import { onMount } from 'svelte';  
    import { page } from '$app/stores';

    import Slider from '$lib/headers/slider.svelte';
</script>
<Slider/> -->
<!-- <div class="container">  -->
    <div class="landing-page"> 
        <div class="landing-page-section">

            <div class="landing-page-title"><h2>СПАСИБО ЗА ВАШУ ЗАЯВКУ!</h2></div>

            <div class="landing-page-content">Один из наших специалистов свяжется с вами в ближайшее время.</div>

            <div class="landing-back"><button onclick="history.back()"> &lArr;	 дом</button></div>

        </div>
    </div>
<!-- </div> -->
<!-- div end -->
<style>
    
    .landing-page {
        height: 100vh;
        display: flex;
        align-items: center;
        background: url('https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1676818018-gallery-3-copy.jpg');
    }
    .landing-page-section {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        background: #ffffffc4;
        height: 500px;
        justify-content: center;
        margin: auto;
    }
    .landing-page-title {
        width: 400px;
        text-align: center;
    }
    .landing-page-content {
        width: 350px;
        text-align: center;
        font-size: 21px;
    }
    .landing-back {
        margin-top: 1em;
        font-weight: bold;
    }
    .landing-back button {
        padding: .5em 1em;
        font-weight: bold;
		cursor: pointer;
    }
</style>