<script>
    //import { onMount } from 'svelte';
    //onMount(async () =>{  });
    //console.log(pageSlug);

    let TMPayment = 0.00;
    let TYears = 12;
    let TAmount = 1000000;
    let IRates = 5;
    let TDPayment = 0;
    let Loan;
    let Rates;
    let Months;
    let isDisabled = true;

    const MortgageCalculator = (TAmount, TDPayment, TYears, IRates)=>{
        
        Loan = TAmount - TDPayment;
        Rates = (IRates/100) / 12;
        Months = TYears * 12;

        TMPayment = parseFloat(Math.round(Math.floor(( Loan * Rates/( 1 - Math.pow( 1 + Rates, (-1 * Months)))) * 100) / 100));
        return TMPayment;
    };

    const handleKey = (e)=>{

        //console.log(e.target.value);
        let NumberFormat =/^\d*$/;
        
        if( (!NumberFormat.test(TAmount))|| (TAmount === '')|| (TAmount === 0) ){ isDisabled = true }
        else if( (!NumberFormat.test(TYears)) || (TYears === '') || (TYears === 0) ) { isDisabled = true; } 
        else if( (!NumberFormat.test(IRates)) || (IRates === '') || (IRates === 0) ) { isDisabled = true; } 
        else if( (!NumberFormat.test(TDPayment)) || (TDPayment === '') || (TDPayment === 0) ){ isDisabled = true; } 
        else{ isDisabled = false }
       
        console.log(TAmount);
    };

</script>
<div class="container aos-init aos-animate mb-5 mt-5" data-aos="fade-up">
        
    <div class="row" id="withInContent">
        <div class="col-12">
            <form on:submit|preventDefault={MortgageCalculator(TAmount, TDPayment, TYears, IRates)}>
                <div class="frmDetails">

                    <h3 class=" mb-3">Mortgage Calculator for Dubai & UAE</h3>                
                    <small>How much you can bare?</small>
                    <br/><br/> 

                    <div class="col-12 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Property Value, AED {TAmount}</label>
                        <input type="text" class="form-control" bind:value={TAmount} placeholder="Property Value, AED" on:keyup={handleKey} >
                    </div>

                    <div class="col-12 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Repayment Period, Years {TYears}</label>
                        <input type="text" class="form-control" bind:value={TYears} placeholder="Repayment Period, Years">
                    </div>

                    <div class="col-12 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Current Interest Rate, {IRates}%</label>
                        <input type="text" class="form-control" bind:value={IRates} placeholder="Current Interest Rate, %">
                    </div>

                    <div class="col-12 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Down Payment, AED {TDPayment}</label>
                        <input type="text" class="form-control" bind:value={TDPayment} placeholder="Down Payment, AED">
                    </div>

                    <p>Monthly Payment</p>
                    <div class="col-12 mb-3 result">
                        <p>
                            <strong>{TMPayment} AED</strong> Monthly
                        </p>
                    </div>
                    
                    <div class="col-12 mb-3">
                        <div class="row">

                            <div class="col">
                                <button class="btn btn-md Mybtn w-100" disabled={isDisabled}>
                                    Calculate Mortgage 
                                    <i class="FSbx bx bi-calculator"></i>
                                </button>
                            </div>

                            <div class="col">
                                <button class="btn Mybtn2 btn-md  w-100" >
                                    Get Free Advice                                
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </form>
        </div>
    </div>        

</div>
<style>
    
    .result{border: 1px solid #2222;}
    .result p{ margin: 20px auto; text-align: center; font-weight: 600; color:#222}
    .result p strong{ font-size: 2rem; }
    #withInContent{ background-color:#f3f5fa; border: 1px solid #e1e1e1; padding: 20px; color: #737373;}
    #withInContent .form-control{border-radius: 0; height: 50px;}
    #withInContent .form-select {border-radius: 0; height: 50px;}
    #withInContent .btn{ background-color: #4167b1;  height: 50px; color: #fff; border-radius: 0; }
    #withInContent .Mybtn2{background-color:#222 !important;}
</style>