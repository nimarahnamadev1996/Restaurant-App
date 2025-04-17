import { enTofa } from '@/utils/Utilities'
import Link from 'next/link'
import React from 'react'

const CompanyDetail = async() => {

    const {id} = await params
    const res = await fetch(`http://localhost:3000/api/company/${id}`)

    const mainProduct = await res.json()

  return (
    <div className="product-detail">
            <div className="product-detail-content">
                <div className="new-product-image">
                    <img src={mainProduct.img} alt={mainProduct.title} />
                </div>

                <div className="new-product-info">
                    <h1 className="new-product-title">{mainProduct.title}</h1>
                    <span>دسته بندی: </span>
                    <Link href={`/products?category=${mainProduct.category}`}>{mainProduct.category}</Link>
                    <br/><br/>
                    <p className="new-product-description">{mainProduct.description}</p>
                    <div className="product-price-row">
                        <div className="product-price">{enTofa(mainProduct.price) }</div>
                        <button className="product-button">
                            افزودن به سبد خرید
                        </button>
                </div>
                </div>
            </div>
        </div>
  )
}

export default CompanyDetail