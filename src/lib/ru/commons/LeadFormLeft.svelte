<script>
    import { onMount, afterUpdate } from 'svelte';
    import Select from 'svelte-select';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { baseURL } from '../../../base-url';



    let Country =[];
    let onURL;
    let isHome = false;
    let pageSlug;
    let isEmail=false, isPhone=false, isphoneCode=false, isfullName=false;
    let email='';
    let phone='';
    let phoneCode='Ländervorwahl';
    let fullName='';
    let ref='DP-CA-482';
    let source = 'russianwebsite';
    let expired;

    afterUpdate(()=>{
        pageSlug = $page.url.pathname;
        if(pageSlug === '/de' || pageSlug === '/'){ 
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
        // onURL = !(onURL) ? `${baseURL}/getAllCoutnryList` : 'http://127.0.0.1:8000/api/getAllCoutnryList';
        // const response = await fetch(onURL);
        // const data = await response.json();
        // Country = data;
        //Country API End


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


    });    

    let selected ={code:"+971", country:"United Arab Emirates"};
    let countryCode = '';

    const handlephoneCode = (e) => {
        countryCode = e.target.value;
        console.log(countryCode);
    }

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
        console.log(fullName);
        fullName? isfullName = true: isfullName = false;
        validateInput();
    }

    const handleSubmit = async() => {
        // console.log(document.querySelector('#country-code'));
        // if(document.querySelector('#country-code').nextElementSibling.childNodes[0].innerHTML){
        //     phoneCode = document.querySelector('#country-code').nextElementSibling.childNodes[0].innerHTML;
        // }
        // phoneCode = phoneCode.replace(/[^0-9]/g, '');
        // var requestOptions = {
        //     method: 'POST',
        //     redirect: 'follow'
        // };

        // console.log(`https://crm.drivenproperties.ae/api/user/leads/lead/api?lead_type=listing&name=${fullName}&email=${email}&api_token=4T2FMWYBQxl2x20ZFphurNVzmyeufkH0Gtg1xEXeNtK7SftOmJVMylJVivUq&mobile=${phoneCode} ${phone}&source=Shobha%20Sea%20RU`);


        // fetch(`https://crm.drivenproperties.ae/api/user/leads/lead/api?lead_type=listing&name=${fullName}&email=${email}&api_token=4T2FMWYBQxl2x20ZFphurNVzmyeufkH0Gtg1xEXeNtK7SftOmJVMylJVivUq&mobile=${phoneCode} ${phone}&source=Shobha%20Sea%20RU`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         console.log(result)
        //     })
        //     .catch(error => console.log('error', error));
        //     email='';
        //     phone='';
        //     phoneCode='';
        //     fullName='';
        
        // console.log(`http://127.0.0.1:8000/api/leadFormData/${fullName}/${countryCode} ${phone}/${email}`);
        const response = await fetch(`${baseURL}/leadFormData/${fullName}/${countryCode} ${phone}/${email}/${source}/${ref}`);
        const data = await response.json();
        goto('/de/thank-you-ru');
        
        console.log(data);

    }
</script>

<div id="frmLeft" class={!isHome?"other-page container":"container"}>
    <div class="row">
        <div class={isHome?"col-md-12 col lead-form-for-home": "other-pages col-md-3 col-lg-3 col offset-md-9 offset-lg-9 col-sm-11 offset-sm-1 float-end"}>

            {#if isHome}
                <h3>Teilen Sie Ihr Interesse mit</h3>
            {/if}

            <div class="frmDetails">

                {#if !isHome}
                    <h3>Teilen Sie Ihr Interesse mit</h3>
                {/if}

                <div class="col">
                    <!--label for="exampleFormControlInput1" class="form-label">Full Name</label-->
                    <input type="text" class="form-control input-home" id="fname" on:keyup={handleName} placeholder="Vollständiger Name">
                </div>

                <div class="col">

                    <div class="d-flex flex-col ">
                        <div class="mypd p-0 col">
                            <!--label for="exampleFormControlInput1" class="form-label">Country Code</label-->
                            <!--input type="countrycode" class="form-control" id="countrycode" placeholder="+971" required-->
                            <select data-placeholder="Choose Communities..." aria-label="Default select example" 
                            on:change={handlephoneCode} bind:value={phoneCode} class="form-select chosen-select input-home">
                                <option selected>Ländervorwahl</option>
                                {#each Country as Countrylist, i}
                                    <option value="+{Countrylist.code}">+{Countrylist.code} {Countrylist.country}</option>
                                {/each}
                            </select>
                        </div>
                        <div class="p-0  col-7">
                            <!--label for="exampleFormControlInput1" class="form-label">Phone / Mobile</label-->
                            <input type="text" class="form-control  input-home" id="phone" on:keyup={handlePhone} placeholder="Festnetz-/Mobiltelefonnummer">
                        </div>
                    </div>
                </div>

                <div class="col">
                    <!--label for="exampleFormControlInput1" class="form-label">Email Address</label-->
                    <input type="email" class="form-control input-home" id="email" on:keyup={handleEmail} placeholder="E-Mail-Adresse">
                </div>

                <div class="col">
                    <!--label for="exampleFormControlInput1" class="form-label">Email Address</label-->
                    <button class="btn btn-md Mybtn" on:click={handleSubmit}>Absenden</button>
                </div>

            </div>
        </div>
    </div>
</div>

<style>

    #frmLeft{position:absolute; top:33vh; right:11vw;}
    #frmLeft .col-lg-3, .col-md-3{
        background-color: rgb(0 0 0 / 60%); color: #fff; padding: 20px 20px; width: 1000px; 
    }

    #frmLeft .lead-form-for-home{
        border-radius: 4px !important;
    }

    @media(max-width: 768px){
        .lead-form-for-home .frmDetails select{
            margin-left: 0 !important;
        }
    }
    
    #frmLeft .form-control{
        font-size: 0.9rem; line-height:1.6rem; background-color: rgb(97 97 97 / 0%); 
        border:1px solid #fff; border-radius:0; margin: 0px 0px 20px 0px; color:#fff;
    }

    #frmLeft .Mybtn{
        width: 100%; color: #333; background-color:#fff; border-radius: 4px;
    }
    /* .home-lead-form .frmDetails select{
        width: auto !important;
        margin-left: 0 !important;
    } */
    .other-pages{
        position: absolute;
        right: 0;
        /* margin-left: 0 !important; */
    }
    
    ::placeholder{ color:#fff;}
    /* .mypd{ padding-right: 3px !important;} */
    
    @media only screen and (max-width: 768px) {
        #frmLeft{top:40%; right:0vw !important;}
        #frmLeft .col-lg-3, .col-md-3{
            width: 90%; margin: 10px; background-color: rgb(0 0 0 / 60%); color: #fff; padding: 20px 20px;
        }
        .p-0.col-7 {
            width: auto;
        }
        #frmLeft.other-page .col-lg-3, .col-md-3{
            width: 100%;
            margin: 0px;
            background-color: #000000c7;
            color: #fff;
            padding: 20px 20px;
            top: 54px;
        }
    }
</style>
