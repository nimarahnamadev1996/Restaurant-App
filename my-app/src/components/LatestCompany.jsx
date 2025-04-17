import React from 'react'
import CompanyList from './CompanyList'

const LatestCompany = async({searchParams}) => {

    const category = searchParams?.category

    const url = category ? 
     `http://localhost:3000/api/company?category=${category}` :
     `http://localhost:3000/api/company`


     const res = await fetch(url)
     const products = await res.json()

  return (
    <div>
    <h2>
        {category? `محصولات ${category}`: "محصولات پر فروش"}
    </h2>
    
      <CompanyList products = {products}/>
     </div>
  )
}

export default LatestCompany