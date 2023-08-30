<script>

    import {capitalizeFirstLetter} from '$lib/helpers';

    export let imgbg ='/assets/images/gen_2869.jpg';
    export let LinkOne ='';
    export let LinkTwo ='';
    export let LinkThree ='';
    export let headings ="Corporate Occupier Services";    

</script>
{#if LinkThree !== '' && LinkTwo !== '' && LinkOne !== ''  }
    <section id="drv-bread" class="section-bg">
        <div class="container ">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb d-flex flex-row bd-highlight">
                    <!--a href="tel:+97144297040" class="phone text-center"><i class="FSbx bx bi-whatsapp"></i></a-->
                    <li class="breadcrumb-item bd-highlight text-capitalize"><a class="text-center" href="/"><i class="BrdFSbx bx bi-house-fill"></i></a></li>
                    <li class="breadcrumb-item bd-highlight text-capitalize"><a href="/{LinkOne}">{@html capitalizeFirstLetter(LinkOne)}</a></li>
                    <li class="breadcrumb-item bd-highlight text-capitalize"><a href="/{LinkOne}/{LinkTwo}">{@html capitalizeFirstLetter(LinkTwo)}</a></li>
                    <li class="breadcrumb-item bd-highlight active text-capitalize" aria-current="page">{@html capitalizeFirstLetter(headings)}</li>
                </ol>
            </nav>
            <h1>{@html capitalizeFirstLetter(headings)}</h1>
        </div>
        <div class="hero-imgbanner" style="background-image:url({imgbg});"></div>
    </section>

{:else if LinkTwo !== '' && LinkOne !== '' }
    <!-- ======= Hero Section ======= -->
    <section id="hero-noimage" class="d-flex align-items-center"> </section>
    <!-- End Hero -->

    <section id="drv-bread" class="section-bg">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb d-flex flex-row bd-highlight">
                    <!--a href="tel:+97144297040" class="phone text-center"><i class="FSbx bx bi-whatsapp"></i></a-->
                    <li class="breadcrumb-item bd-highlight text-capitalize"><a class="text-center" href="/"><i class="BrdFSbx bx bi-house-fill"></i></a></li>
                    <li class="breadcrumb-item bd-highlight text-capitalize"><a href="/{LinkOne}">{@html capitalizeFirstLetter(LinkOne)}</a></li>
                    <li class="breadcrumb-item bd-highlight active text-capitalize" aria-current="page">{@html capitalizeFirstLetter(LinkTwo)}</li>
                </ol>
            </nav>
        </div>
    </section>
{/if}
