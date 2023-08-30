<script>
    
    import {capitalizeFirstLetter} from '$lib/helpers';

    export let imgbg ='/assets/images/gen_2869.jpg';
    export let LinkOne ='';
    export let LinkTwo ='';
    export let LinkThree ='';
    export let headings ="...";
    export let FstName_Fr ='';
    export let LstName_Fr='';
    export let Bdtype = 1;
    
</script>

{#if LinkThree !== '' && LinkTwo !== '' && LinkOne !== ''&&  Bdtype === 1  }

    <div class="container ">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb d-flex flex-row bd-highlight">
                <li class="breadcrumb-item bd-highlight text-capitalize"><a class="text-center" href="/ru"><i class="BrdFSbx bx bi-house-fill"></i></a></li>
                <li class="breadcrumb-item bd-highlight text-capitalize"><a href="/ru/{LinkTwo}">{@html capitalizeFirstLetter(FstName_Fr ? FstName_Fr:LinkOne )}</a></li>
                <li class="breadcrumb-item bd-highlight text-capitalize"><a href="/ru/{LinkTwo}/{LinkThree}">{@html capitalizeFirstLetter(LstName_Fr ? LstName_Fr : LinkTwo)}</a></li>
                <li class="breadcrumb-item bd-highlight active text-capitalize" aria-current="page">{@html capitalizeFirstLetter(headings)}</li>
            </ol>
        </nav>
        <h1>{@html capitalizeFirstLetter(headings)}</h1>
    </div>
    <div class="hero-imgbanner" style="background-image:url({imgbg});"></div> 
        
{:else if LinkThree !== '' && LinkTwo !== '' && LinkOne !== ''&&  Bdtype === 2}

<section id="drv-bread" class="section-bg">
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb d-flex flex-row bd-highlight">
                <li class="breadcrumb-item bd-highlight text-capitalize"><a class="text-center" href="/ru"><i class="BrdFSbx bx bi-house-fill"></i></a></li>
                <li class="breadcrumb-item bd-highlight text-capitalize"><a href="/ru/{LinkTwo}">{@html capitalizeFirstLetter(FstName_Fr ? FstName_Fr:LinkOne )}</a></li>
                <li class="breadcrumb-item bd-highlight text-capitalize"><a href="/ru/{LinkTwo}/{LinkThree}">{@html capitalizeFirstLetter(LstName_Fr ? LstName_Fr : LinkTwo)}</a></li>
                <li class="breadcrumb-item bd-highlight active text-capitalize" aria-current="page">{@html capitalizeFirstLetter(headings)}</li>
            </ol>
        </nav>
        <h1 class="text-uppercase">{@html capitalizeFirstLetter(headings)}</h1>
    </div>

    <div class="container">
        <img class="hero-imgbanner" src="{imgbg}" alt="asd" />
    </div>   
    <style>.hero-imgbanner{  width: 100%; height:auto; margin: 1.5rem 0 0.5rem 0; }</style>
</section>

{:else if LinkThree !== '' && LinkTwo !== '' && LinkOne !== ''&&  Bdtype === 3}
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb d-flex flex-row bd-highlight">
                <li class="breadcrumb-item bd-highlight text-capitalize"><a class="text-center" href="/ru"><i class="BrdFSbx bx bi-house-fill"></i></a></li>
                <li class="breadcrumb-item bd-highlight text-capitalize"><a href="/ru/{LinkTwo}">{@html capitalizeFirstLetter(FstName_Fr ? FstName_Fr:LinkOne )}</a></li>
                <li class="breadcrumb-item bd-highlight text-capitalize"><a href="/ru/{LinkTwo}/{LinkThree}">{@html capitalizeFirstLetter(LstName_Fr ? LstName_Fr : LinkTwo)}</a></li>
                <li class="breadcrumb-item bd-highlight active text-capitalize" aria-current="page">{@html capitalizeFirstLetter(headings)}</li>
            </ol>
        </nav>
    </div>

{:else if LinkThree !== '' && LinkTwo !== '' && LinkOne !== '' && Bdtype === 4 }

    <section id="drv-bread" class="section-bg">
        
        <div class="container">        
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb d-flex flex-row bd-highlight">
                    <li class="breadcrumb-item bd-highlight text-capitalize"><a class="text-center" href="/ru"><i class="BrdFSbx bx bi-house-fill"></i></a></li>
                    <li class="breadcrumb-item bd-highlight text-capitalize"><a href="/ru/{LinkTwo}">{@html capitalizeFirstLetter(FstName_Fr ? FstName_Fr:LinkOne )}</a></li>
                    <li class="breadcrumb-item bd-highlight text-capitalize"><a href="/ru/{LinkTwo}/{LinkThree}">{@html capitalizeFirstLetter(LstName_Fr ? LstName_Fr : LinkTwo)}</a></li>
                    <li class="breadcrumb-item bd-highlight active text-capitalize" aria-current="page">{@html capitalizeFirstLetter(headings)}</li>
                </ol>
            </nav>
            <h1 class="text-capitalize">{@html capitalizeFirstLetter(headings)}</h1>
    
        </div>                       
    </section>
    
    <style>
        
        #drv-bread{ 
    
            height: 35vh; width: 100%; text-align: left; padding-top: 100px; color: white;  overflow: hidden;
            background: var(--Drvn-headerColor);  /* fallback for old browsers */
            background: linear-gradient(rgb(55 54 54 / 80%), rgb(7 6 7 / 51%)), url('/assets/images/gen_2868.jpg');  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(rgb(55 54 54 / 80%), rgb(7 6 7 / 51%)), url('/assets/images/gen_2868.jpg'); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background-size: cover;
            background-repeat: no-repeat;
            
        }
        #drv-bread .breadcrumb-item,.breadcrumb-item+.breadcrumb-item::before{ color:#fff; z-index:9 !important;}
    </style>
    
    {:else if LinkThree !== '' && LinkTwo !== '' && LinkOne !== '' && Bdtype === 5 }
        <div class="container ">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb d-flex flex-row bd-highlight">
                    <li class="breadcrumb-item bd-highlight text-capitalize"><a class="text-center" href="/ru"><i class="BrdFSbx bx bi-house-fill"></i></a></li>
                    <li class="breadcrumb-item bd-highlight text-capitalize"><span>{@html capitalizeFirstLetter(FstName_Fr ? FstName_Fr:LinkOne )}</span></li>
                    <li class="breadcrumb-item bd-highlight text-capitalize"><span>{@html capitalizeFirstLetter(LstName_Fr ? LstName_Fr : LinkTwo)}</span></li>
                    <li class="breadcrumb-item bd-highlight active text-capitalize" aria-current="page">{@html capitalizeFirstLetter(headings)}</li>
                </ol>
            </nav>
            <h1 class="text-uppercase">{@html capitalizeFirstLetter(headings)}</h1>
        </div>
        <div class="hero-imgbanner" style="background-image:url({imgbg});"></div>
        <style>.hero-imgbanner { height: 75vh; background-size: cover; background-position: center center; }</style>    

{:else if LinkTwo !== '' && LinkOne !== '' && Bdtype === 1 }

    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb d-flex flex-row bd-highlight">
                <li class="breadcrumb-item bd-highlight text-capitalize"><a class="text-center" href="/ru"><i class="BrdFSbx bx bi-house-fill"></i></a></li>
                <li class="breadcrumb-item bd-highlight text-capitalize">
                    <a href="/ru/{LinkTwo}">
                        {@html capitalizeFirstLetter(FstName_Fr ? FstName_Fr:LinkTwo)}
                    </a>
                </li>
                <li class="breadcrumb-item bd-highlight active text-capitalize" aria-current="page">
                    {@html capitalizeFirstLetter(LstName_Fr ? LstName_Fr : LinkTwo)}</li>
            </ol>
        </nav>
        <h1 class="text-uppercase">{@html capitalizeFirstLetter(headings)}</h1>
    </div>
    <div class="hero-imgbanner" style="background-image:url({imgbg});"></div>
    <style>
        @media only screen and (max-width: 768px) {
            .hero-imgbanner{ height: 70vh !important;}
        }
    </style>    

{:else if LinkTwo !== '' && LinkOne !== '' && Bdtype === 2}

    <!-- ======= Hero Section ======= -->
    <section id="hero-noimage" class="d-flex align-items-center"> </section>
    <!-- End Hero -->

    <section id="drv-bread" class="section-bg">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb d-flex flex-row bd-highlight">
                    <li class="breadcrumb-item bd-highlight text-capitalize"><a class="text-center" href="/ru"><i class="BrdFSbx bx bi-house-fill"></i></a></li>
                    <li class="breadcrumb-item bd-highlight text-capitalize">
                        <a href="/ru/{LinkOne}">
                            {@html capitalizeFirstLetter(FstName_Fr ? FstName_Fr:LinkOne)}
                        </a>
                    </li>
                    <li class="breadcrumb-item bd-highlight active text-capitalize" aria-current="page">{@html capitalizeFirstLetter(LstName_Fr ? LstName_Fr : LinkTwo)}</li>
                </ol>
            </nav>
        </div>
    </section>
{/if}
