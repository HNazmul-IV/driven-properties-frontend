export let ApiData=[];

const apiURL = 'https://api.exchangerate-api.com/v4/latest/USD';

const covertToIntCurrancy = (price)=>{
        
    return Math.abs(Number(price)) >= 1.0e+9
    ? (Math.abs(Number(price)) / 1.0e+9).toFixed(2) + " B"

    : Math.abs(Number(price)) >= 1.0e+6
    ? (Math.abs(Number(price)) / 1.0e+6 ).toFixed(2) + " M"

    :Math.abs(Number(price)) >= 1.0e+3
    ? (Math.abs(Number(price)) / 1.0e+3).toFixed(2) + " K"

    :Math.abs(Number(price));
 }
 
 const CurrancySBC = (price)=>{ return price.toLocaleString('en-US'); }

 const getMaxNumbers = (data)=>{
    let b;
    return b = Math.max(data);
};


 export {covertToIntCurrancy, CurrancySBC, getMaxNumbers}