<script>
    import { onMount, createEventDispatcher } from "svelte";
    import mapboxgl from "mapbox-gl";
 
    import 'mapbox-gl/dist/mapbox-gl.css';
    const dispatch = createEventDispatcher();
    const token =  "pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g";
    let properties = [
        {
            'img': '/l9images/community/1669625869-DubaiMarina.jpg',
            'title': 'Dubai Marina',
            'Latitude': '25.0832675',
            'Longitude': '55.1220605',
            'guideLink': '/explore/dubai-properties-areas/dubai-marina',
            'salesLink': '/properties-for-sale/dubai-marina/any/any/0-40500000',
            'rentLink': '/properties-for-rent/dubai-marina/any/any/0-40500000',
        },
        {
            'img': '/l9images/community/1666343367-gen_3_506.jpg',
            'title': 'Palm Jumeirah',
            'Latitude': '25.1193261',
            'Longitude': '55.1142305',
            'guideLink': '/explore/dubai-properties-areas/palm-jumeirah',
            'salesLink': '/properties-for-sale/palm-jumeirah/any/any/0-40500000',
            'rentLink': '/properties-for-rent/palm-jumeirah/any/any/0-40500000',
        },
        {
            'img': '/l9images/community/1669282118-DowntownDubai.jpg',
            'title': 'Downtown Dubai',
            'Latitude': '25.1837',
            'Longitude': '55.2666',
            'guideLink': '/explore/dubai-properties-areas/downtown-dubai',
            'salesLink': '/properties-for-sale/downtown-dubai/any/any/0-40500000',
            'rentLink': '/properties-for-rent/downtown-dubai/any/any/0-40500000',
        },
        {
            'img': '/l9images/community/1669280888-DubaiHills.jpg',
            'title': 'Dubai Hills Estate',
            'Latitude': '25.116152912',
            'Longitude': '55.262566262',
            'guideLink': '/explore/dubai-properties-areas/dubai-hills-estate',
            'salesLink': '/properties-for-sale/dubai-hills-estate/any/any/0-40500000',
            'rentLink': '/properties-for-rent/dubai-hills-estate/any/any/0-40500000',
        },
        {
            'img': '/l9images/community/1665974580-gen_3_3044.jpg',
            'title': 'Citywalk',
            'Latitude': '25.276987',
            'Longitude': '55.296249',
            'guideLink': '/explore/dubai-properties-areas/city-walk-dubai',
            'salesLink': '/properties-for-sale/city-walk/any/any/0-40500000',
            'rentLink': '/properties-for-rent/city-walk/any/any/0-40500000',
        },
        {
            'img': '/l9images/community/1667287788-EmaarSOuth.jpg',
            'title': 'Emaar Beachfront',
            'Latitude': '25.18319',
            'Longitude': '55.27205',
            'guideLink': '#',
            'salesLink': '/properties-for-sale/any/any/any/0-40500000',
            'rentLink': '/properties-for-rent/any/any/any/0-40500000',
        },
        {
            'img': '/l9images/community/1669282412-ArabianRanches.jpg',
            'title': 'La Mer Beach',
            'Latitude': '25.232927',
            'Longitude': '55.26309',
            'guideLink': '#',
            'salesLink': '/properties-for-sale/any/any/any/0-40500000',
            'rentLink': '/properties-for-rent/any/any/any/0-40500000',
        },
        {
            'img': '/l9images/community/1665873657-gen_3_3060.jpg',
            'title': 'Bluewaters',
            'Latitude': '25.082916',
            'Longitude': '55.122156',
            'guideLink': '/explore/dubai-properties-areas/bluewaters-island',
            'salesLink': '/properties-for-sale/bluewaters/any/any/0-40500000',
            'rentLink': '/properties-for-rent/bluewaters/any/any/0-40500000',
        },
        {
            'img': '/l9images/community/1665873657-gen_3_3060.jpg',
            'title': 'Jumeirah Bay Island',
            'Latitude': '25.21550975',
            'Longitude': '55.23617177',
            'guideLink': '/explore/dubai-properties-areas/jumeirah-bay-island',
            'salesLink': '/properties-for-sale/jumeirah-islands/any/any/0-40500000',
            'rentLink': '/properties-for-rent/jumeirah-islands/any/any/0-40500000',
        },
        {
            'img': '/l9images/community/1669282412-ArabianRanches.jpg',
            'title': 'Mina Rashid',
            'Latitude': '25.284755',
            'Longitude': '55.275651',
            'guideLink': '#',
            'salesLink': '/properties-for-sale/mina-rashid/any/any/0-40500000',
            'rentLink': '/properties-for-rent/mina-rashid/any/any/0-40500000',
        },
    ];
    let map;
    let lat = 25.177602;
    let lng = 55.234789;
    let coordinates = [lng, lat];

    // setting marker according the coordinates
    const getPropertiesMarkerMap = (map) => {
        for (const property of properties) {
            
            const description = `
                <div class="container g-0">
                    <div class="row g-0">
                        <div class="col-12 mb-2">
                            <img  src="/assets/images/${property.img}" class="img-fluid myImgPopup" />
                        </div>
                        <div class="col-sm-12 px-2 mb-2">
                            <h6><strong>${property.title}</strong></h6>
                        </div>
                        <div class="button-container">
                            <a href="${property.guideLink}"><div class="guide-btn">Guide</div></a>
                            <a href="${property.salesLink}"><div class="sales-btn">Sales</div></a>
                            <a href="${property.rentLink}"><div class="rent-btn">Rent</div></a>
                        </div>
                    </div>
                </div>
            `;
            const el = document.createElement('span');
            el.className = 'marker-home';

            let long = Number(property.Longitude), lati = Number(property.Latitude);
            // make a marker for each property and add it to the map
            if(long && lati){
                new mapboxgl
                .Marker(el)
                .setLngLat([long, lati])
                .setPopup(new mapboxgl.Popup({ offset: 25 })
                    .setHTML(description)
                )
                .addTo(map);
            }
        }
        // isMapLoading = false;
    }

    onMount( async() => {
        
        mapboxgl.accessToken = token;
        map = new mapboxgl.Map({
            container: "mapView",
            style: "mapbox://styles/mapbox/light-v11",
            center: coordinates,
            zoom: 10.5,
        });
        
        map.on('load', () => {
            
            getPropertiesMarkerMap(map);
            map.scrollZoom.disable();
            
        })

    }); // end onMount

</script>
<div class="col-sm-12">
    <div class="apartment-sale-right">
        <div id="mapView" class="myMapListing" allowfullscreen="true" loading="lazy"/>
    </div>
</div>

<style>
    .myMapListing {
        position: relative;
        height: 500px;
        width: 100%;
    }
    .apartment-sale-right {
        margin-right: 0px;
    }
    

    @media only screen and (max-width: 768px) {
        .myMapListing {
            top: 70px;
        }
    }
</style>
