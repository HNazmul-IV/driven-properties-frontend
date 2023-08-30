<script>
    import { afterUpdate, onMount } from 'svelte';


    import './assets/css/custom.css';
    import './assets/css/myCss.css';

    export let baseUrl;
    export let cta_title;
    export let cta_banner;
    export let cta_subtitle;
    export let cta_description;

</script>


<section id="ctaction">

    <div class="block block-vh align-items-stretch block-project-feature">
        <picture class="picture project-feature__media">
            <!-- <source srcset="https://landing.drivenproperties.com/theme/assets/images/banners/1648729031-cta-2.webp" media="(min-width: 992px)">
            <source srcset="https://landing.drivenproperties.com/theme/assets/images/banners/1648729031-cta-2.webp"> -->
            <!-- <img src="https://landing.drivenproperties.com/theme/assets/images/banners/1648729031-cta-2.webp" alt="Docs Demo" loading="lazy" class="slider-image">  -->
            <img src={`${baseUrl}${cta_banner}`} alt="Docs Demo" loading="lazy" class="slider-image">
        </picture>
        <div class="container d-flex">
            <div class="project-feature ml-auto aos-init aos-animate" data-aos="fade-up">
                <div class="project-feature__item">
                    <h3 class="title-sub t--color">
                        <span style="color:#ffffff">
                            <small>{cta_title ? cta_title: 'CTA Title'}</small>{cta_subtitle ? cta_subtitle: 'CTA Subtitle'}</span>
                    </h3>
                    <p style="color:#ffffff">
                        {cta_description ? cta_description : 'CTA Description'}
                    </p>
                </div>
                        </div>
        </div>
    </div>
    <!-- CTA End-->
    
</section>

<style>

</style>