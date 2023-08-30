<script>

    //import { onMount } from 'svelte';  
    import { page } from '$app/stores';    
    import {baseURL} from '../../../base-url';
    
    import BannerHeroPicture from '$lib/includes/offplan-projects/BannerHero.svelte';
    import ProjectConcept from '$lib/includes/offplan-projects/projectConcept.svelte';
    import MapLocation from '$lib/includes/offplan-projects/mapLocation.svelte';
    import ImageGallery from '$lib/includes/offplan-projects/imageGallery.svelte';
    import CTAction from '$lib/includes/offplan-projects/cta.svelte';
    import SFC from '$lib/includes/offplan-projects/SocialLife.svelte';
    import MasterPlan from '$lib/includes/offplan-projects/MasterPlan.svelte';
    import FloorPlan from '$lib/includes/offplan-projects/FloorPlan.svelte';
    import ContactUs from '$lib/includes/offplan-projects/ContactUs.svelte';
    
    import SEOTools from '$lib/commons/SEOText.svelte';
    import { onMount } from 'svelte';


    // let baseUrl = `http://127.0.0.1:8000/theme/assets/images/landing/`;
    // let baseUrl = `http://15.184.182.107:8002/theme/assets/images/landing/`;
    let baseUrl = `${baseURL}/theme/assets/images/landing/`;
    let main_banner; // HeroBanner
    let pc_main_title, pc_subtitle, pc_image, pc_desc; //ProjectConcept
    let sfc, sfcSlides; // SFC
    let gallery; // ImageGallery
    let locDis, lng, lat; // MapLocation
    let cta_title, cta_subtitle, cta_banner, cta_description; // CTaction
    let pf_title, pf_subtitle, pf_image, pf_description; // MasterPlan
    let floor_plan; // FloorPlan
    let leadData;
    let pageSlug = $page.url.pathname.split('/');
    let urlLastParams;

    onMount(async()=> {
        urlLastParams = pageSlug[pageSlug.length-1];
        const response = await fetch(`${baseURL}/getLeadsData/${urlLastParams}`);
        const data = await response.json();
        leadData = data;
        console.log(leadData);

        main_banner = leadData[0].Page_Banner_Picture;

        pc_main_title = leadData[0].FrontEnd_Menu_Title;
        pc_subtitle = leadData[0].Concept_Subtitle;
        pc_image = leadData[0].Concept_Image;
        pc_desc = leadData[0].Concept_Description;

        locDis = leadData[0].Location_Distances;
        lng = leadData[0].Longitude;
        lat = leadData[0].Latitude;
        
        sfc = leadData[0].Social_Facilities;
        sfcSlides = leadData[0].SFC_Slides
        
        cta_banner = leadData[0].CTA_Banner;
        cta_title = leadData[0].CTA_Title;
        cta_subtitle = leadData[0].CTA_Subtitle;
        cta_description = leadData[0].CTA_Description;

        gallery = leadData[0].Gallery;

        pf_title = leadData[0].PF_Title;
        pf_subtitle = leadData[0].PF_SubTitle;
        pf_image = leadData[0].PF_Image;
        pf_description = leadData[0].PF_Description;

        floor_plan = leadData[0].Floor_Plan;

    })

</script>

<BannerHeroPicture baseUrl={baseUrl} main_banner={main_banner} />
<ProjectConcept pc_main_title={pc_main_title} pc_image={pc_image} pc_subtitle={pc_subtitle} pc_desc={pc_desc} baseUrl={baseUrl} />
<MapLocation locDis={locDis} lng={lng} lat={lat}/>
<ImageGallery baseUrl={baseUrl} gallery={gallery}/>
<CTAction baseUrl={baseUrl} cta_title={cta_title} cta_banner={cta_banner} cta_subtitle={cta_subtitle} cta_description={cta_description} />
<SFC sfc={sfc} baseUrl={baseUrl} sfcSlides={sfcSlides}/>
<MasterPlan pf_title={pf_title} pf_description={pf_description} pf_image={pf_image} pf_subtitle={pf_subtitle} baseUrl={baseUrl} />
<FloorPlan floor_Plan={floor_plan} baseUrl={baseUrl}/>
<ContactUs/>

<style>

</style>

