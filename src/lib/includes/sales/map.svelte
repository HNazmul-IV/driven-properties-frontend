<script>
    import { onMount, afterUpdate } from 'svelte';
    import mapboxgl from 'mapbox-gl';

    import { baseURL } from '../../../base-url';
    
    import { page } from "$app/stores";   
    import RightWidget1 from '../../widgets/right-widget1.svelte';
    import RightWidget2 from '../../widgets/right-widget2.svelte';
    
    import 'mapbox-gl/dist/mapbox-gl.css'
    
    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';
  
    import Apartmentslist from './apartmentslist.svelte';
  
    export let data=[];
    export let updateFunction;
  
    export let boundingBox = {
        "_sw": {
            "lng": 55.064511502076556,
            "lat": 25.004448664717486
        },
        "_ne": {
            "lng": 55.21608849792656,
            "lat": 25.15650411973199
        }
    };
    
    let obj = {};
    let MyObj = {};
    let tempData = [];
    let stores;

    let geojson = null;
    let MapContent=[];
    
    let Blackpopup; 

    let pageProperties;
    let sidebarWidgetOne;
    let sidebarWidgetTwo;
    
    afterUpdate( async()=>{
        let pageSlug = $page.url.pathname.split('/');
        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[pageSlug.length-1]}`);
        const data = await response.json();
        pageProperties = data;

        sidebarWidgetOne = pageProperties.sidebarWidgetOne;
        sidebarWidgetTwo = pageProperties.sidebarWidgetTwo;
        //getSignleHeaderMenu API End
    })

    onMount(async () => {
  
        //55.181215,25.013484
        let lat = 25.013484;
        let lng = 55.181215;
        
        mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g';
        const map = new mapboxgl.Map({
            container: 'mapView',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng,lat],
            //maxZoom: 5,
            minZoom: 6,
            zoom: 8
        });
  
        boundingBox = map.getBounds();
        //console.log(map.getBounds()); 

        const getRandomInt = (max)=>{
            let value =  Math.floor(Math.random() * max);
            return Number.parseInt(value);
        };
        // End getRandomInt

        const generateRandomDecimalInRangeFormatted = (min, max, places)=>{
            let value = Math.random() * (max - min) + min;
            return Number.parseFloat(value).toFixed(places);
        };
        // End generateRandomDecimalInRangeFormatted

        const BigpopupUpsClosed = ()=>{
            const BigpopupUps = document.getElementsByClassName('white-popup');
            if (BigpopupUps[0]) BigpopupUps[0].remove();
        };
        // End BigpopupUpsClosed 

        const pricePoupUpsClosed = ()=>{
            const pricePoupUps = document.getElementsByClassName('myMap-Listing');
            if (pricePoupUps[0]) pricePoupUps[0].remove();
        };
        // End pricePoupUpsClosed

        const btnCallingMap = ()=>{
            let MySerbtn = document.getElementById('mySearch');
            MySerbtn.addEventListener("click", MybtnClick);
        };
        // End btnCallingMap
        
        const MybtnClick = async()=>{
            
            pricePoupUpsClosed(); BigpopupUpsClosed();
            
            MyMapData(data);
            
            let country = "AE";
            let Community = document.getElementById("SCommunity") ? document.getElementById("SCommunity") : 'Dubai';

            const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${Community.value}.json?country=${country}&access_token=${mapboxgl.accessToken}`);
            const Mapdata = await response.json();
            MapContent = Mapdata;

            console.log(MapContent.features[0].geometry.coordinates); //coordinates: (2) [55.13175, 25.115755]
            
            map.jumpTo({
                center: MapContent.features[0].geometry.coordinates ? MapContent.features[0].geometry.coordinates : '',
                zoom: 15,
                speed: generateRandomDecimalInRangeFormatted(0.9, 0.3, 1),
                duration: getRandomInt(2500),
                bearing: getRandomInt(30),
                pitch: getRandomInt(30),
            });
        };
        // End MybtnClick
        
        map.on('load', () => {
            // map.on('resize', () => {
            //     console.log('resize',data);
            //     MyMapData(data);
            // });
            // // End Resize
            
            // map.on('movestart', (e) => {
            //     console.log('movestart',data);
            //     BigpopupUpsClosed();
            //     MyMapData(data);
                
            //     boundingBox = map.getBounds();
            //     updateFunction(boundingBox); //this was active
            // });
            // // End  Move Start
            
            // map.on('moveend', () => {
            //     console.log('moveend',data);
            //     boundingBox = map.getBounds();
            //     updateFunction(boundingBox); //this was active
            // });
            // // End Move End        
  
            map.on('idle',(e)=>{
                console.log('mousemove',data);
                boundingBox = map.getBounds();
                updateFunction(boundingBox); //this was active
            });
            // End Mouse Move
  
            // map.on('mouseover', (e) => {
            //     MyMapData(data);
            //     console.log('mouseover',data);
            // });
            // // End Mouse Over

            // map.on('mouseleave', (e) => {
            //     console.log('mouseleave',data);
            //     boundingBox = map.getBounds();
            //     updateFunction(boundingBox); //this was active
            // });
            // // End Mouse Leave
            
            btnCallingMap();            
            MyMapData(data);

            map.zoomTo(10, { duration: 700 });
            map.addControl(new mapboxgl.NavigationControl());
            map.addControl(new mapboxgl.FullscreenControl());
            
        });
        // End load

        const myBigPopup = (geojson, id)=>{
            
            const Bigpopup = new mapboxgl.Popup({ className: "white-popup", maxWidth:300, closeButton: true, closeOnClick: true });
            BigpopupUpsClosed();

            geojson.features.forEach(function (bigPopupmarker) {

                if(bigPopupmarker.properties.active === 'Yes' && bigPopupmarker.properties.ID === id  ){

                    const coordinates = bigPopupmarker.geometry.coordinates.slice();
                    const description = `
                        <div class="container g-0">
                            <a href="/${(bigPopupmarker.properties.Emirate).toLowerCase()}/${(bigPopupmarker.properties.UnitType).toLowerCase()}-for-${(bigPopupmarker.properties.PropertyStatus).toLowerCase()}/${((bigPopupmarker.properties.AlCommunity).toLowerCase()).replaceAll(' ','-')}/${((bigPopupmarker.properties.PropertyNm).toLowerCase()).replaceAll(' ','-')}/${(bigPopupmarker.properties.RefNo).toLowerCase()}">
                                <div class="row g-0">
                                    <div class="col-12 mb-2">
                                        <img src=${bigPopupmarker.properties.Image.image[0]} class="img-fluid myImgPopup"/>
                                    </div>
                                    <div class="col-sm-12 px-2 mb-2">
                                        <h6>${bigPopupmarker.properties.PropertyName}</h6>

                                        <div class="d-flex flex-row bd-highlight mb-1">
                                            <div class="p-2 bd-highlight">${bigPopupmarker.properties.UnitType}</div>
                                            
                                            <div class="p-2 bd-highlight"><i class="bx bx-building-house"></i></div>
                                            <div class="p-2 bd-highlight">${bigPopupmarker.properties.BedRooms} Beds</div>
                                            <div class="p-2 bd-highlight"><i class="bx bx-building-house"></i></div>
                                            <div class="p-2 bd-highlight">${bigPopupmarker.properties.BathRooms} Bath</div>
                                        </div>

                                        <h6>AED ${bigPopupmarker.properties.price}</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `;
                    
                    if (!Bigpopup.isOpen()) {

                        map.flyTo({ center: coordinates});
                        
                        Bigpopup
                        .setLngLat(coordinates)
                        .setHTML(description)
                        //.setOffset(10)
                        .addTo(map);

                    } 

                }

            });

        };
        // End myBigPopup
        
        const add_markers = (geojson)=>{            

            geojson.features.forEach(function (marker) {

                //if(marker.properties.active == 'Yes' && marker.properties.price >= 90000 ){
                if(marker.properties.active === 'Yes'){
                    
                    var el = document.createElement('span');

                    const Pricepopu = new mapboxgl.Popup({ className: "myMap-Listing", closeButton: false, closeOnClick: true  })
                    .setLngLat(marker.geometry.coordinates)
                    .setHTML(`${marker.properties.description}`)
                    .addTo(map);

                    Pricepopu.getElement().addEventListener('click', (e)=>{ 
                        if(e.target.id === marker.properties.ID){
                            myBigPopup(geojson, e.target.id);
                        }
                    });

                }

                boundingBox = map.getBounds();
                updateFunction(boundingBox); //this was active
                //console.log(marker)

            });
        };
        // End add_markers

        let MyMapData =(data)=>{
            
            pricePoupUpsClosed();

            let length = (data.length);
            for(let d=0; d<length; d++){
                geojson = {
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'properties': {
                            'description': `<strong id="${data[d].objectID}" >AED ${covertToIntCurrancy(data[d].Price)}</strong>`,
                            'active': `${data[d].Published}`,
                            'price': `${covertToIntCurrancy((data[d].Price))} / ${CurrancySBC(data[d].Price)}`,
                            'ID': data[d].objectID,
                            'Image': data[d].Images,
                            'UnitType':`${ data[d].Unit_Type}`,
                            'BedRooms':`${ data[d].Bedrooms}`,
                            'BathRooms':`${ data[d].No_of_Bathroom}`,
                            'PropertyName': `${data[d].Property_Name} | ${data[d].Property_Title}`,
                            'Community': `${data[d].Community}`,
                            'Emirate': data[d].Emirate,
                            'PropertyStatus':data[d].Ad_Type,
                            'PropertyNm':data[d].Property_Name,
                            'RefNo':data[d].Property_Ref_No,
                            'AlCommunity': `${data[d].Community} ${data[d].Sub_Community}`,
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [data[d].Longitude,data[d].Latitude]
                        }
                    }]
                }
                
                add_markers(geojson);
            }
            //Load End
        };
        // End MyMapData
    });
    //End onMount
  </script>
  
  
  <div class="col-lg-6 mt-5">
    <div class="apartment-sale-right">        
        <a class="map-expend" style="z-index:99" href="/"><i class="fa fa-arrows-alt" aria-hidden="true"></i></a>
        <a class="map-return" style="z-index:199" href="/"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
        <div id="mapView" class="myMapListing" allowfullscreen="true" loading="lazy"></div>
        
        
        {#if sidebarWidgetOne === 'Yes'}
        <RightWidget1 />
        {/if}
        {#if sidebarWidgetTwo === 'Yes'}
        <RightWidget2 />
        {/if}
    </div>    
</div>
  
  <style>
  
    /* img, svg{ width: 12px !important; height: 18px !important; display: block !important;}
  
    svg { width: 12px !important; height: 18px !important; display: block !important; }
  
    #marker {
        background-color: inherit;
        background-size: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
    }     */
    
    .myMapListing { position:relative; height: 635px; width: 100%;}
  
    /* #mapView .mapboxgl-popup-content {
        background: #ffffff;  border-radius: 1px !important; height: 50px !important;
        box-shadow: 0 0px 0px rgb(0 0 0 / 10%) !important; padding: 2px 7px 2px !important;
    } */
    @media only screen and (max-width: 768px) {
        .myMapListing{ top:70px; }
    }
  </style>