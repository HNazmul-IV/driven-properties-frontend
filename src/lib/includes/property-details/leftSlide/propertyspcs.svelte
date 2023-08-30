<script>

    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';
    
    export let Price;
    export let AreaSize;
    export let bathroom;
    export let Beds;
</script>

<div class="g-0 container mt-5 mb-5">
    <div id="PropertySpec">
        <div class="g-0 row">

            <div class="g-0 col-sm myRows">
                
                <div class="row">

                    <div class="col-sm-12 text-center">
                        <img src="/assets/svgs/solid/01-tags.svg" class="myIconSvg"/>
                    </div>

                    <div class="col-sm-12 mt-2 mb-2 text-center">
                        {covertToIntCurrancy(Price)} / {CurrancySBC(Price)}
                    </div>

                </div>            
                
            </div>

            <div class="g-0 col-sm myRows">
                
                
                <div class="row">

                    <div class="col-sm-12 text-center">
                        <img src="/assets/svgs/solid/bed.svg" class="myIconSvg"/>
                    </div>

                    <div class="col-sm-12 mt-2 mb-2 text-center">
                        {Beds} Beds
                    </div>

                </div>            

            </div>

            <div class="g-0 col-sm myRows">

                <div class="row">

                    <div class="col-sm-12 text-center">
                        <img src="/assets/svgs/solid/shower.svg" class="myIconSvg"/>
                    </div>

                    <div class="col-sm-12 mt-2 mb-2 text-center">
                        {bathroom} Bath
                    </div>

                </div>

            </div>

            <div class="g-0 col-sm myRows">

                <div class="row">

                    <div class="col-sm-12 text-center">
                        <img src="/assets/svgs/brands/codepen.svg" class="myIconSvg"/>
                    </div>

                    <div class="col-sm-12 mt-2 mb-2 text-center">
                        {AreaSize}
                    </div>

                </div>
                
            </div>

        </div>
    </div>
</div>
