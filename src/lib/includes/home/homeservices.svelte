<script> 
    let isSnaggingShow = false;
    let isSalesProgression = false;
    let isHolidayHomes = false;
    let isTours = false;
    let isAdvisory = false;
    let isDecoration = false;
    let isValuation = false;
    let isPortfolio = false;
</script>
<!-- ======= services Section ======= -->
<section id="home-services" class="home-services section-bg">
    <div class="container">

        <div class="section-title">
            <h2>OUR SERVICES</h2>
        </div>

        <div class="services-home-container row">
            <div class={isSnaggingShow?"col-lg-3 col-xl-3 col-md-12 service-box snagging":"col-lg-3 col-xl-3 col-md-12 service-box"} 
                on:mouseenter={() => isSnaggingShow = true} on:mouseleave={()=>isSnaggingShow=false}>
                <div class="icon-box">
                    <div class="services-pro-container before-hover">
                        <div class="before-hover-icon">
                            <i class="bi bi-tools"></i>
                        </div>
                        <div class="before-hover-title">Snagging</div>
                    </div>
                    <div class="services-pro-title after-hover">
                        <div class="after-hover-content">We are providing meticulous walk-through inspection, and provide a detailed, well organized and easy to read the report to our client
                            in 24 hr.</div> 
                        <button class="after-hover-button"><i class="bi bi-envelope-fill"></i> Enquire Now</button>
                    </div>
                </div>
            </div>

            <div class={isSalesProgression?"col-lg-3 col-xl-3 col-md-12 service-box progression":"col-lg-3 col-xl-3 col-md-12 service-box"} 
                on:mouseenter={() => isSalesProgression = true} on:mouseleave={()=>isSalesProgression=false}>
                <div class="icon-box">
                    <div class="services-pro-container before-hover">
                        <div class="before-hover-icon">
                            <i class="bi bi-graph-up"></i>
                        </div>
                        <div class="before-hover-title">Sales Progression</div>
                    </div>
                    <div class="services-pro-title after-hover">
                        <div class="after-hover-content">We are providing meticulous walk-through inspection, and provide a detailed, well organized and easy to read the report to our client
                            in 24 hr.</div> 
                        <button class="after-hover-button"><i class="bi bi-envelope-fill"></i> Enquire Now</button>
                    </div>
                </div>
            </div>

            <div class={isHolidayHomes?"col-lg-3 col-xl-3 col-md-12 service-box holiday-homes":"col-lg-3 col-xl-3 col-md-12 service-box"} 
                on:mouseenter={() => isHolidayHomes = true} on:mouseleave={()=>isHolidayHomes=false}>
                <div class="icon-box">
                    <div class="services-pro-container before-hover">
                        <div class="before-hover-icon">
                            <i class="bi bi-house"></i>
                        </div>
                        <div class="before-hover-title">Holday Homes</div>
                    </div>
                    <div class="services-pro-title after-hover">
                        <div class="after-hover-content">We are providing meticulous walk-through inspection, and provide a detailed, well organized and easy to read the report to our client
                            in 24 hr.</div> 
                        <button class="after-hover-button"><i class="bi bi-envelope-fill"></i> Enquire Now</button>
                    </div>
                </div>
            </div>

            <div class={isTours?"col-lg-3 col-xl-3 col-md-12 service-box tours":"col-lg-3 col-xl-3 col-md-12 service-box"} 
                on:mouseenter={() => isTours = true} on:mouseleave={()=>isTours=false}>
                <div class="icon-box">
                    <div class="services-pro-container before-hover">
                        <div class="before-hover-icon">
                            <i class="bi bi-camera-reels"></i>
                        </div>
                        <div class="before-hover-title">Video Tours</div>
                    </div>
                    <div class="services-pro-title after-hover">
                        <div class="after-hover-content">We are providing meticulous walk-through inspection, and provide a detailed, well organized and easy to read the report to our client
                            in 24 hr.</div> 
                        <button class="after-hover-button"><i class="bi bi-envelope-fill"></i> Enquire Now</button>
                    </div>
                </div>
            </div>

            <div class={isAdvisory?"col-lg-3 col-xl-3 col-md-12 service-box advisory":"col-lg-3 col-xl-3 col-md-12 service-box"} 
                on:mouseenter={() => isAdvisory = true} on:mouseleave={()=>isAdvisory=false}>
                <div class="icon-box">
                    <div class="services-pro-container before-hover">
                        <div class="before-hover-icon">
                            <i class="bi bi-book"></i>
                        </div>
                        <div class="before-hover-title">Development Advisory</div>
                    </div>
                    <div class="services-pro-title after-hover">
                        <div class="after-hover-content">We are providing meticulous walk-through inspection, and provide a detailed, well organized and easy to read the report to our client
                            in 24 hr.</div> 
                        <button class="after-hover-button"><i class="bi bi-envelope-fill"></i> Enquire Now</button>
                    </div>
                </div>
            </div>

            <div class={isDecoration?"col-lg-3 col-xl-3 col-md-12 service-box decoration":"col-lg-3 col-xl-3 col-md-12 service-box"} 
                on:mouseenter={() => isDecoration = true} on:mouseleave={()=>isDecoration=false}>
                <div class="icon-box">
                    <div class="services-pro-container before-hover">
                        <div class="before-hover-icon">
                            <i class="bi bi-suit-club"></i>
                        </div>
                        <div class="before-hover-title">Interior Decoration</div>
                    </div>
                    <div class="services-pro-title after-hover">
                        <div class="after-hover-content">We are providing meticulous walk-through inspection, and provide a detailed, well organized and easy to read the report to our client
                            in 24 hr.</div> 
                        <button class="after-hover-button"><i class="bi bi-envelope-fill"></i> Enquire Now</button>
                    </div>
                </div>
            </div>

            <div class={isValuation?"col-lg-3 col-xl-3 col-md-12 service-box valuation":"col-lg-3 col-xl-3 col-md-12 service-box"} 
                on:mouseenter={() => isValuation = true} on:mouseleave={()=>isValuation=false}>
                <div class="icon-box">
                    <div class="services-pro-container before-hover">
                        <div class="before-hover-icon">
                            <i class="bi bi-currency-dollar"></i>
                        </div>
                        <div class="before-hover-title">Property Valuation</div>
                    </div>
                    <div class="services-pro-title after-hover">
                        <div class="after-hover-content">We are providing meticulous walk-through inspection, and provide a detailed, well organized and easy to read the report to our client
                            in 24 hr.</div> 
                        <button class="after-hover-button"><i class="bi bi-envelope-fill"></i> Enquire Now</button>
                    </div>
                </div>
            </div>

            <div class={isPortfolio?"col-lg-3 col-xl-3 col-md-12 service-box portfolio":"col-lg-3 col-xl-3 col-md-12 service-box"} 
                on:mouseenter={() => isPortfolio = true} on:mouseleave={()=>isPortfolio=false}>
                <div class="icon-box">
                    <div class="services-pro-container before-hover">
                        <div class="before-hover-icon">
                            <i class="bi bi-cash-stack"></i>
                        </div>
                        <div class="before-hover-title">Investment Portfolio</div>
                    </div>
                    <div class="services-pro-title after-hover">
                        <div class="after-hover-content">We are providing meticulous walk-through inspection, and provide a detailed, well organized and easy to read the report to our client
                            in 24 hr.</div> 
                        <button class="after-hover-button"><i class="bi bi-envelope-fill"></i> Enquire Now</button>
                    </div>
                </div>
            </div>

        </div>
    </div>

</section>
<!-- End About Us Section -->
<style>
.section-title {
    padding-bottom: 0px;
}
.services-pro-container {
    border-radius: 15px;
    overflow: hidden;
}
.services-pro-title {
    padding: 0 1em 1em;
    text-align: center;
    font-size: 14px;
}
.home-services .icon-box {
    padding: 0px;
    margin: 0px 0px 0px 7px;
}
.services-home-container {
    display: flex;
    justify-content: space-evenly;
}
.service-box{
    border-radius: 20px;
    box-shadow: 0 0 5px 2px #ccc;
    height: 110px;
    overflow: hidden;
    width: 23%;
    margin-bottom: 1em;
    cursor: pointer;
}
.before-hover{
    padding: 1em 0;
    display: flex;
}
.before-hover-icon {
    padding: .8em 1em;
    background: #e5e5e5;
    border-radius: 50px;
    margin: 1em;
}
.before-hover-title {
    align-self: center;
    font-size: 18px;
    font-weight: bold;
}
.after-hover-content {
    text-align: left;
    padding-bottom: 1em;
}
button.after-hover-button {
    border: 1px solid #b30101;
    border-radius: 5px;
    color: #b30101;
    background: none;
}
.snagging, .progression, .holiday-homes, .tours, .advisory, .decoration, .valuation, .portfolio{
    height: auto;
}
@media(max-width: 768px){
    .services-home-container {
        margin: 0.1em;
    }
}
</style>