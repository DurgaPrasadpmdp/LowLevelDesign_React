
const shimmerArr = [1,2,3,4,5,6,7,8,9,10,11,12]
const ProductShimmer = ()=>{
    return <div className="flex flex-wrap gap-2 pt-2">
        {
            shimmerArr.map((s)=>{
                return <CardShimmer key={s} />
            })
        }
    </div>
}


const CardShimmer = ()=>{
   return <div className="w-[350px] border border-solid border-black rounded-md p-2">
        <div className="w-[320px] h-[250px] bg-gray-400 rounded-md text-center "></div>
        <div className="pl-2 pt-2 ">
            <div className="w-[200px] h-[30px] text-center  bg-gray-400 mb-2 rounded-md"></div>
            <div className=" w-[320px] h-[50px] pt-2 pb-2  bg-gray-400 mb-2 rounded-md"></div>
            <div className=" w-[320px] h-[40px] pb-2  bg-gray-400 rounded-md"></div>
            
        </div>
    </div>
}

export default ProductShimmer