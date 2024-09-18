import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import ProductShimmer from "../ShimmerUI/ProductsShimmer"


const DisplayProducts = ()=>{

    const [products,setProducts] = useState([])
    const [skip , setSkip] = useState(0)
    const [isDataFethching, setIsDataFetching]= useState(true)
    useEffect(()=>{
        fetchProducts()
    },[skip])

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)

        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    function handleScroll(){
        console.log("scroll")
        if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight-1){
            setSkip((skip)=>{
                return skip + 10
            })
        }

    }
    async function fetchProducts(){
        setIsDataFetching(true)
        const response = await fetch("https://dummyjson.com/products?limit=10&skip=" + skip)
        const data = await response.json()
        setProducts((products)=>{
            return products.concat(data?.products)
        })
        setIsDataFetching(false)
    }

    return isDataFethching ? <ProductShimmer/> : ( products.length > 0 && <div className=" flex flex-wrap gap-2">
        {products.map((eachProduct)=>{
            return <ProductCard key={eachProduct.id} productData = {eachProduct} /> 
        })}
    </div>)
        
}

export default DisplayProducts