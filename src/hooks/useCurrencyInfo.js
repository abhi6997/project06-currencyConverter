// this does not return jsx thats why .js is used instead of jsx
import {useEffect,useState} from "react"

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then(((res)=>setData(res[currency])))
    
    },[currency])

    return data
}

export default useCurrencyInfo;