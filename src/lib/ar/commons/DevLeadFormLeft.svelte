<script>
    //import Country from '$lib/countryPhoneCodes.json'
    const DJSON = "/others/countryPhoneCodes.json";
    import { apiData, drinkNames } from "./../../store/countryPhoneCodes.js";
    import { onMount } from 'svelte';    

    let Country =[];

    onMount(async () => {
        fetch(DJSON)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            apiData.set(data);
        })
        .catch(error =>{
            console.log(error);
            return [];
        });

        return ()=> {  Country =[]; }
    });
    
    console.log(Country)

</script>

<div class="container" id="frmLeft">
    <div class="row">
        <div class="col-md-3 col-lg-3 col offset-md-9 offset-lg-9 float-end">
            <div class="frmDetails">

                <h3>REGISTER YOUR INTEREST</h3>

                <div class="col">
                    <!--label for="exampleFormControlInput1" class="form-label">Full Name</label-->
                    <input type="text" class="form-control" id="fname" placeholder="Full Name">
                </div>

                <div class="col">

                    <div class="d-flex flex-row ">
                        <div class="mypd p-0 col">
                            <!--label for="exampleFormControlInput1" class="form-label">Country Code</label-->
                            <!--input type="countrycode" class="form-control" id="countrycode" placeholder="+971" required-->
                            <select data-placeholder="Choose Communities..." aria-label="Default select example" class="form-select chosen-select">
                                <option selected>---Select Country Code</option>
                                {#each Country as Countrylist (Countrylist.code)}
                                    <option value="+{Countrylist.code}">+{Countrylist.code} {Countrylist.country}</option>
                                {/each}
                            </select>
                        </div>
                        <div class="p-0  col-7">
                            <!--label for="exampleFormControlInput1" class="form-label">Phone / Mobile</label-->
                            <input type="text" class="form-control" id="phone" placeholder="Phone / Mobile">
                        </div>
                    </div>
                </div>

                <div clas s="col">
                    <!--label for="exampleFormControlInput1" class="form-label">Email Address</label-->
                    <input type="email" class="form-control" id="email" placeholder="Email Address">
                </div>

                <div clas s="col">
                    <!--label for="exampleFormControlInput1" class="form-label">Email Address</label-->
                    <button class="btn btn-md Mybtn">Submit</button>
                </div>

            </div>
        </div>
    </div>
</div>


<h1>Whiskey Drinks Menu</h1>
<ul>
{#each $drinkNames as drinkName}
    <li>{drinkName}</li>
{/each}
</ul>



<style>

    #frmLeft{position:absolute; top:33vh; right:11vw;}
    #frmLeft .col-lg-3, .col-md-3{
        width: 25%; background-color: rgb(0 0 0 / 60%); color: #fff; padding: 40px 20px;
    }
    #frmLeft .col-md-4, .col-lg-4{
        width: 34%; background-color: rgb(0 0 0 / 60%); color: #fff; padding: 40px 20px;
    }
    #frmLeft .frmDetails >h3{font-size: 1.5rem; margin: 0 0 15px 0; text-align: center;}

    #frmLeft .form-control{
        font-size: 0.9rem; line-height:1.6rem; background-color: rgb(97 97 97 / 0%); 
        border:1px solid #fff; border-radius:0; margin: 0px 0px 20px 0px; color:#fff;
    }

    #frmLeft .form-control{
        font-size: 0.9rem; line-height:1.6rem; background-color: rgb(97 97 97 / 0%); 
        border:1px solid #fff; border-radius:0; margin: 0px 0px 20px 0px; color:#fff;
    }

    #frmLeft .Mybtn{
        width: 100%; color: #fff; background-color:#263977; border-color:#263977; border-radius: 4px;
    }
    ::placeholder{ color:#fff;}
    /* .mypd{ padding-right: 3px !important;} */
    
    @media only screen and (max-width: 768px) {
        #frmLeft{top:40%; right:0;}
        #frmLeft .col-lg-3, .col-md-3{
            width: 100%; background-color: rgb(0 0 0 / 60%); color: #fff; padding: 40px 20px;
        }
    }

</style>