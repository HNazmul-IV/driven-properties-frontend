<script>
    import { onMount, afterUpdate } from 'svelte';
    import Select from 'svelte-select';
    import { baseURL } from '../../base-url';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    let Country =[];
    let onURL;
    let isHome = false;
    let pageSlug;
    let isEmail=false, isPhone=false, isphoneCode=false, isfullName=false;
    let email='';
    let phone='';
    let phoneCode='';
    let fullName='';
    let expired;
    

    afterUpdate(()=>{
        pageSlug = $page.url.pathname;
        if(pageSlug === '/'){ 
            isHome=true;
        }
    })

    const validateInput = () => {
        if(isEmail && isPhone && isfullName){
            console.log('all set');
            document.querySelector('.Mybtn').removeAttribute('disabled');
        }else{
            document.querySelector('.Mybtn').setAttribute('disabled', true);
        }
    }

    onMount(async () => {
        document.querySelector('.Mybtn').setAttribute('disabled', true);
        
        
        // set cache lifetime in seconds
        const cachelife = 5000;
        
        //get cached data from local storage
        let cacheddata = localStorage.getItem('getAllCoutnryList');

        if(cacheddata){
            cacheddata = JSON.parse(cacheddata);
            expired = parseInt(Date.now() / 1000) - cacheddata.cachetime > cachelife;
        }

        //If cached data available and not expired return them.
        if (cacheddata  && !expired){
            Country = cacheddata.data;
        }else{
            //otherwise fetch data from api then save the data in localstorage 
            onURL = !(onURL) ? `${baseURL}/getAllCoutnryList` : 'http://127.0.0.1:8000/api/getAllCoutnryList';
            const response = await fetch(onURL);
            const data = await response.json();
            Country = data;
            const json = {data: data, cachetime: parseInt(Date.now() / 1000)}
            localStorage.setItem('getAllCoutnryList', JSON.stringify(json));
        }


        
        // onURL = !(onURL) ? `${baseURL}/getAllCoutnryList` : 'http://127.0.0.1:8000/api/getAllCoutnryList';
        // const response = await fetch(onURL);
        // const data = await response.json();
        // Country = data;
        //Country API End

    });
    let selected ={code:"+971", country:"United Arab Emirates"};

    const handleEmail = (e) => {
        email= e.target.value;
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            isEmail = true;
        }else{
            isEmail = false;
        }
        validateInput();
    }
    const handlePhone = (e) => {
        phone = e.target.value;
        phone? isPhone = true: isPhone = false;
        validateInput();
    }
    
    const handleName = (e) => {
        fullName = e.target.value;
        fullName? isfullName = true: isfullName = false;
        validateInput();
    }

    const handleSubmit = () => {
        if(document.querySelector('#country-code').nextElementSibling.childNodes[0].innerHTML){
            phoneCode = document.querySelector('#country-code').nextElementSibling.childNodes[0].innerHTML;
        }
        phoneCode = phoneCode.replace(/[^0-9]/g, '');
        var requestOptions = {
            method: 'POST',
                redirect: 'follow'
            };

        fetch(`https://crm.drivenproperties.ae/api/user/leads/lead/api?lead_type=listing&name=${fullName}&email=${email}&api_token=4T2FMWYBQxl2x20ZFphurNVzmyeufkH0Gtg1xEXeNtK7SftOmJVMylJVivUq&mobile=${phoneCode} ${phone}&source=Shobha%20Sea%20RU`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log('error', error));
            email='';
            phone='';
            phoneCode='';
            fullName='';
            goto('/thank-you');

    }

</script>

<div class="container" id="frmLeft">
    <div class="row">
         <div class={isHome?"col-md-12 col lead-form-for-home": "col-md-3 col-lg-3 col offset-md-9 offset-lg-9 col-sm-11 offset-sm-1 float-end"}>

            {#if isHome}
                <h3>Register Your Interest</h3>
            {/if}

            <div class="frmDetails">

                {#if !isHome}
                    <h3>REGISTER YOUR INTEREST</h3>
                {/if}

                <div class="col">
                    <!--label for="exampleFormControlInput1" class="form-label">Full Name</label-->
                    <input type="text" value={fullName} class="form-control" on:keyup={handleName} id="fname" placeholder="Full Name">
                </div>

                <div class="col">

                    <div class="d-flex flex-row ">
                        <div class="mypd p-0 col" id="MyCountiresList">
                            <!--label for="exampleFormControlInput1" class="form-label">Country Code</label-->
                            <!--input type="countrycode" class="form-control" id="countrycode" placeholder="+971" required-->
                            <!-- <select data-placeholder="Choose Communities..." aria-label="Default select example" class="form-select chosen-select">
                                <option selected>---Select Country Code</option>
                                {#each Country as Countrylist, i}
                                    {#if Countrylist.code === '+971'}
                                        <option value="+{Countrylist.code}" selected>{Countrylist.code} {Countrylist.country}</option>
                                    {:else}
                                        <option value="+{Countrylist.code}">{Countrylist.code} {Countrylist.country}</option>   
                                    {/if}
                                {/each}
                            </select> -->

                            <Select id="country-code"                            
                                items={Country}
                                optionIdentifier="Country"
                                getSelectionLabel={o => o.code +" "+ o.iso}
                                getOptionLabel={o => o.code +" "+ o.country}
                                placeholder="Country Code"
                                bind:selectedValue={selected.code}
                            />
                            
                        </div>
                        <div class="p-0  col-7">
                            <!--label for="exampleFormControlInput1" class="form-label">Phone / Mobile</label-->
                            <input type="text" class="form-control" value={phone} on:keyup={handlePhone} id="phone" placeholder="Phone / Mobile">
                        </div>
                    </div>
                </div>

                <div clas s="col">
                    <!--label for="exampleFormControlInput1" class="form-label">Email Address</label-->
                    <input type="email" class="form-control" value={email} on:keyup={handleEmail} id="email" placeholder="Email Address">
                </div>

                <div clas s="col">
                    <!--label for="exampleFormControlInput1" class="form-label">Email Address</label-->
                    <button class="btn btn-md Mybtn" on:click={handleSubmit}>Submit</button>
                </div>

            </div>
        </div>
    </div>
</div>

<style>

    #frmLeft{position:absolute; top:33vh; right:11vw;}
    .frmDetails input {
        border-radius: 44px !important;
    }
    /* #frmLeft .col-lg-3, .col-md-3{
        width: 25%; background-color: rgb(0 0 0 / 60%); color: #fff; padding: 40px 20px;
    } */
    #frmLeft .col-lg-3, .col-md-3{
        background-color: rgb(0 0 0 / 60%); color: #fff; padding: 40px 20px;
    }
    /* #frmLeft .col-md-4, .col-lg-4{
        width: 34%; background-color: rgb(0 0 0 / 60%); color: #fff; padding: 40px 20px;
    } */
    #frmLeft .frmDetails >h3{font-size: 1.5rem; margin: 0 0 15px 0; text-align: center;}

    #frmLeft .form-control{
        font-size: 0.9rem; line-height:1.6rem; background-color: rgb(97 97 97 / 0%); 
        border:1px solid #fff; border-radius:0; margin: 0px 0px 20px 0px; color:#fff;
    }
    /* .selectContainer{
        border: 0px;
    } */

    #frmLeft .Mybtn{
        width: 100%;
        color: #263977;
        background: white;
        border-color: #263977;
        border-radius: 61px;
        border: 1px solid #263977 !important;
    }
    ::placeholder{ color:#fff;}
    /* .mypd{ padding-right: 3px !important;} */
    
    @media only screen and (max-width: 768px) {
        #frmLeft{top:40%; right:0;}
    }
    @media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (-webkit-device-pixel-ratio: 2) {
        #frmLeft{top:40%; right:0;}
        #frmLeft .col-lg-3, .col-md-3{
            width: 100%;  background-color: rgb(0 0 0 / 60%); color: #fff; padding: 40px 20px;
        }
    }

</style>