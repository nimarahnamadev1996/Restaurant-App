import React from 'react'
import ProductBox from './ProductBox'

const ProductList = ({products}) => {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

       {
        products.length > 0 &&
        products.map((product) => (
            <ProductBox product={product} key={product._id}/>
        ))
       }
     </div>
  )
}

export default ProductList