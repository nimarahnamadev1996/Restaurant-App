"use client"

import { CartContext, useGlobalContext } from "@/contexts/CartContext";
import { enTofa } from "@/utils/Utilities";
import Image from "next/image";
import Link from "next/link";



const CompanyBox = () => {

    let {addToCart} = useGlobalContext() 

  return (
    <div className="border p-4 flex flex-col items-center justify-between h-[350px] rounded-md shadow hover:shadow-md transition">
   
        <Link href={`/products/${product._id}`} >
         <div className="w-[200px] h-[200px] relative">
           <Image src={product.img} alt={product.title} fill className="object-contain" />
          </div>
        </Link> 
   
         <Link href={`/products/${product._id}`} >
         <h2 className="text-center mt-4 font-bold">
          {product.title}
         </h2>
         </Link>
   
         <p className="text-center text-gray-700 mt-1">{enTofa(product.price) } تومان</p>
   
        <div className="w-full flex justify-start mt-4">
        <button  
         onClick={() => addToCart(product)}
         className="border border-orange-400 rounded-md p-1.5 text-orange-500 hover:bg-orange-100 transition">
           <CiCirclePlus size={20} />
         </button>
        </div>
   
       </div>
  )
}

export default CompanyBox