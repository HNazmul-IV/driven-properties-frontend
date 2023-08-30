<script> 
    export let DAGs; 
</script>

{#if DAGs.length !== 0 }
<!-- ======= Why Us Section ======= -->
<section id="why-us" class="why-us section-bg">
    <div class="container" data-aos="fade-up">

        <div class="row">

            <div class="col-lg-12 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                <div id="EasyTabs">

                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        {#each DAGs as dags (dags.id)}
                            {#if dags.pctitle === 'Bluewaters Island'}
                                <li class="nav-item col-md-3 col-lg-3" role="presentation">
                                    <button class="nav-link active" id="{dags.pcslug}-tab" data-bs-toggle="tab" data-bs-target="#{dags.pcslug}" type="button" role="tab" aria-controls="{dags.pcslug}" aria-selected="true">{dags.pctitle_fr}</button>
                                </li>
                            {:else}
                                <li class="nav-item col-md-3 col-lg-3" role="presentation">
                                    <button class="nav-link" id="{dags.pcslug}-tab" data-bs-toggle="tab" data-bs-target="#{dags.pcslug}" type="button" role="tab" aria-controls="{dags.pcslug}" aria-selected="true">{dags.pctitle_fr}</button>
                                </li>
                            {/if}
                        {/each}
                    </ul>

                    <div class="tab-content" id="myTabContent">
                        {#each DAGs as dags (dags.id)}
                            {#if dags.pctitle === 'Bluewaters Island'}
                                <div class="tab-pane fade show active" id="{dags.pcslug}" role="tabpanel" aria-labelledby="{dags.pcslug}-tab">
                                    <img alt="drvn" src="{dags.pchomebgimg ? "/l9images/community/"+dags.pchomebgimg : "/assets/img/home/community/bluewater.jpg"}" width="100%" />
                                    <div class="TabBox">
                                        <h4>{@html dags.pctitle_fr}</h4>
                                        <p>{@html dags.pcmetatitle_fr ? dags.pcmetatitle_fr : 'Waterfront apartments'}</p>
                                        <a href="/fr/explore/dubai-properties-areas/{dags.pcslug}" class="btn-learn-more">Lear More</a>
                                    </div>
                                </div>
                            {:else}
                                <div class="tab-pane fade" id="{dags.pcslug}" role="tabpanel" aria-labelledby="{dags.pcslug}-tab">
                                    <img alt="drvn" src="{dags.pchomebgimg ? "/l9images/community/"+dags.pchomebgimg : "/assets/img/home/community/bluewater.jpg"}" width="100%" />
                                    <div class="TabBox">
                                        <h4>{@html dags.pctitle_fr}</h4>
                                        <p>{@html dags.pcmetatitle_fr ? dags.pcmetatitle_fr : 'Waterfront apartments'}</p>
                                        <a href="/fr/explore/dubai-properties-areas/{dags.pcslug}" class="btn-learn-more">Lear More</a>
                                    </div>
                                </div>
                            {/if}
                        {/each}                        
                    </div>                    
                </div>
                <!--Desktop View  end -->
                
                <div class="accordion" id="EasyAccordion">
                    {#each DAGs as dags (dags.id)}
                        {#if dags.pctitle === 'Bluewaters Island'}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading{dags.pcslug}">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{dags.pcslug}" aria-expanded="true" aria-controls="collapse{dags.pcslug}">
                                        {dags.pctitle_fr}
                                    </button>
                                </h2>
                                <div id="collapse{dags.pcslug}" class="accordion-collapse collapse show" aria-labelledby="heading{dags.pcslug}" data-bs-parent="#EasyAccordion">
                                    <div class="accordion-body mb-4">
                                        <img alt="drvn" src="/assets/img/home/community/bluewater.jpg" width="100%" />
                                        <div class="TabBox">
                                            <h4>{@html dags.pctitle_fr}</h4>
                                            <p>{@html dags.pcmetatitle_fr ? dags.pcmetatitle_fr : 'Waterfront apartments'}</p>
                                            <a href="/fr/explore/dubai-properties-areas/{dags.pcslug}" class="btn-learn-more">Lear More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {:else}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading{dags.pcslug}">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{dags.pcslug}" aria-expanded="false" aria-controls="collapse{dags.pcslug}">
                                        {dags.pctitle_fr}
                                    </button>
                                </h2>
                                <div id="collapse{dags.pcslug}" class="accordion-collapse collapse" aria-labelledby="heading{dags.pcslug}" data-bs-parent="#EasyAccordion">
                                    <div class="accordion-body">
                                        <img alt="drvn" src="/assets/img/home/community/citywalk.jpg" width="100%" />
                                        <div class="TabBox">
                                            <h4>{@html dags.pctitle_fr}</h4>
                                            <p>{@html dags.pcmetatitle_fr ? dags.pcmetatitle_fr : 'Waterfront apartments'}</p>
                                            <a href="/fr/explore/dubai-properties-areas/{dags.pcslug}" class="btn-learn-more">Lear More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/if}
                    {/each}                        
                </div> 
                <!--Desktop View  end -->
                
                <span class="d-flex flex-row-reverse">
                    <a href="/fr/explore/dubai-properties-areas" class="btn-learn-more-two">Plus de régions</a>
                </span>
            </div>

        </div>

    </div>    
</section>
<!-- End Why Us Section -->

<!-- ======= Why Us Section End ======= -->

<style>

    #EasyAccordion { display: none;}

    #EasyTabs > .col-lg-3, .col-md-3{  width: 25%;  }

    #EasyTabs ul li > button{
        width: 100%; text-align:center; height: 70px; color: #222;
        border-radius: 0px;  border-top: 1px solid #222;  border-bottom: 1px solid #222;
        font-size: 1.2rem !important; text-transform: uppercase; font-weight: 500;
    }
    #EasyTabs ul li button:first-child{
        border-left:1px solid #222;
    }
    #EasyTabs ul li button:nth-last-child(even) { border-left:1px solid #222; }

    #EasyTabs ul li button:nth-last-child(odd) { border-right:1px solid #222;}

    #EasyTabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
        background-color: black; color:#fff !important; font-weight: 600;
    }

    #myTabContent{ padding:5px 0px 5px 0px; }

    @media only screen and (max-width: 768px) {
        #EasyTabs{ display: none;  }
        #EasyAccordion{display: block;}
        #EasyAccordion div.accordion-body{ padding: 5px 0px;}
        #EasyAccordion .accordion-button{font-size: 1.2rem !important; text-transform: uppercase; border-color:#222 !important; color:#fff; background-color: #222;}
        #EasyAccordion .accordion-button:focus{border-color:#222;}
        .accordion-button:not(.collapsed)::after{ 
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")!important;
        }
        #EasyAccordion .accordion-button::after{ 
            background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
        }
        #EasyAccordion .TabBox {margin:10px 0px 50px 0px;}
    }

</style>
{/if}