

const ProductCard = (props)=>{

    const {thumbnail,price,description,title,rating} = props?.productData
    return (<div className="border border-solid border-black w-[350px] rounded-md mt-2">
        <div>
        <img src={thumbnail} />
        </div>
        <div className="pl-2">
            <h2 className="text-center font-bold">{title}</h2>
            <h3>
                {description}
            </h3>
            <h4> 
                <span><span className="font-bold">Price : </span>{price} </span>
                <span><span className="font-bold">rating :</span> {rating}</span>
        
            </h4>
        </div>
    </div>)

}

export default ProductCard