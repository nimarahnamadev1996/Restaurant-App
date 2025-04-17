import React from 'react'
import CompanyBox from './CompanyBox'

const CompanyList = ({products}) => {
  return (
    <div>
    {
        products.length > 0 &&
        
        products.map(
            (product)=> <CompanyBox product={product} key={product._id}/>
        )
     }
   </div>
  )
}

export default CompanyList