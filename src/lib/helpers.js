
const ALGOLIA_APP_ID = "48O3SXQXMR";
const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
const ALGOLIA_INDEX_TEST_NAME = 'tbl_properties';
// Algolia Serach End

const MBoxAccessToken = "pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g";
// End MapBox AccessToken


const capitalizeFirstLetter = (string) =>{
    //console.log(string);
    let str = string.replaceAll('-',' ');
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const ReplaceTxt = (string, part)=>{
    let str = string.replace(('+',''));
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const GetLastFiveYear = (Years)=>{
    let date = new Date();
    date.setDate( date.getDate() - 6 );
    date.setFullYear( date.getFullYear() - Years );   
    return date.getFullYear(); 
}
const GetFullURL = (URL)=>{
    return FullURL = URL;
}

const WordCount = (MyStr, count=50)=>{

    let myCount = count;
    let ar = MyStr.split(' ');
    let nString = '';

    for(let i=0; i<myCount; i++){
        
        nString += ar[i] +" ";
    }
    nString +="...";
    //console.log(nString);
    return nString;
};

export {ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_TEST_NAME, MBoxAccessToken, capitalizeFirstLetter, GetLastFiveYear, GetFullURL, ReplaceTxt, WordCount}
