import { useEffect, useState } from "react"
import { RESTURANT_PAGE } from "./constant";

const useResturantMenu = (resId)=>{

    const [resData, setResData] = useState(null)

    useEffect(()=>{
        fetchData();
        // console.log('useResturant useEffect');
    },[])

    async function fetchData(){
        const data = await fetch(RESTURANT_PAGE+resId);
        const res = await data.json();
        setResData(res.data)

        // console.log('Resturant Menu fetched');
    }

    // console.log('Component Mounted', resData)
    
    return resData
}

export default useResturantMenu;