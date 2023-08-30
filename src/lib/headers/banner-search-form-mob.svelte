<script>
    import { onMount, createEventDispatcher, afterUpdate } from 'svelte';
     import { goto } from '$app/navigation';
    import { baseURL } from '../../base-url';
    //  import { baseURL } from '../../../../base-url';

 
     let dispatch = createEventDispatcher();
     let searchedKeyArray=[], searchedKey=[];
 
     export let status='Sale';
 
     let inputValue = '';
     let popUpOpen = false;
     
     $: status, checkUpdate();
     const checkUpdate = () => {
         console.log(status);
     }
 
     const handleClick = () => {
         console.log(inputValue, status);
         if(status === 'Sale'){
             goto(`/properties-for-sale/${inputValue.replace(/\s+/g, "-").toLowerCase()}/any/any/0-150000000`);
         }else if(status === 'Rent'){
             goto(`/properties-for-rent/${inputValue.replace(/\s+/g, "-").toLowerCase()}/any/any/0-3000000`);
         }else if(status === 'Offplan'){
             localStorage.setItem("community", inputValue);
             // localStorage.setItem('bannerSearchForm', true);
             goto(`/sales/buy-offplan/offplan-apartments`);
         }
     }
 
     const getCommunity = async() => {
         popUpOpen = true;
         console.log('getCommunity fn');
         let response = await fetch(`${baseURL}/searchCommunityOffPlan`);
         let searchKey = await response.json();
         console.log(searchKey);
         searchedKeyArray = searchKey; // list of suggested community
         searchedKey = searchKey; // list of suggested community
     }
 
     // work when something selected from community list popup 
     const handleSearchClicked = async (e) => {
         console.log('handleSEarcheClicked fn');
         const searchClickedText = e.target.innerText;
         document.getElementById("location-input").value = searchClickedText;
         inputValue = searchClickedText;
 
         handleClick();
     };
 
     const closePopUpHandler = () =>{
         popUpOpen = false;
     }
 
     onMount(()=> {
         closePopUpHandler();
     })
     
 </script>
 
 
 <div class="row banner-search-mob">
 
     <div id="search-container" class="{popUpOpen?'show-search-container': 'hide-search-container'}">
         <div class="close-btn" on:click={closePopUpHandler}><i class="bi bi-x-square-fill"></i></div>
         {#each searchedKey as item}
             <div class="search-key" on:click={handleSearchClicked}>
                 {item.pctitle}
             </div>
         {/each}
     </div>
 
     <div class="container search-form-hero-banner-mob">
         <div class="banner-search-form p-3">
             <div class="location-container-mob">
                 <div class="banner-search-location-mob">
                     <div id="location-mob" on:click={getCommunity}>Area, development...</div>
                     <div id="search-icon"><i class="bi bi-search"></i></div>
                 </div>
             </div>
         </div>
     </div>
 </div>
 
 <!-- Serach Box End -->
 
 <style>
     .search-form-hero-banner-mob{
         position: relative;
         width: 600px;
         top: -30px;
     }
     .banner-search-form {
         background: white;
         position: absolute;
         width: 600px;
         top: 23px;
         border-radius: 50px;
     }
     .banner-search-form {
         display: flex;
         justify-content: space-between;
         line-height: 15px;
     }
     .container div {
         display: flex;
         flex-direction: row;
     }
     .banner-search-form {
         background: white;
         position: absolute;
         width: 95%;
         top: 23px;
         border-radius: 50px;
     }
     div#search-icon {
         position: absolute;
         right: 7px;
         background: #333;
         padding: 10px;
         color: white;
         border-radius: 32px;
         top: 6px;
     }
     .location-container-mob, div#location-mob, .banner-search-location-mob{
         width: 100%;
     }
     div.show-search-container{
         background-color: white;
         position: absolute;
         z-index: 1;
         left: 0 !important;
         top: 68px !important;
         height: 100vh;
         overflow: scroll;
     }
     div.hide-search-container{
         position: absolute !important;
         top: -10000px !important;
     }
     .search-key{
         color: black;
         background-color: white;
         padding: 1em;
         border-bottom: 1px solid #ccc;
         scroll-behavior: auto;
     }
     .close-btn {
         color: red;
         font-size: 1em;
         width: auto;
         display: inline;
         text-align: center;
         right: 8px;
         position: fixed;
     }
     .bi-x-square-fill::before {
         content: "\f628";
         font-size: 23px;
         padding: 15px 5px;
     }
 </style>