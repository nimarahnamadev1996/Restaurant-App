
import ProductList from './ProductList'





const LatestProducts = async({searchParams}) => {

  const category = searchParams?.category

  const url = category ? 
  `http://localhost:3000/api/products?category=${category}` :
  `http://localhost:3000/api/products`

  const res = await fetch(url)

  const products = await res.json()

 

  return (
    <div className='p-4'>
      
        <h2 className="text-2xl font-bold mb-4 text-center">
          {category? `محصولات ${category}`: "محصولات پر فروش"}
        </h2>

        <ProductList products = {products}/>
    </div>
  )
}

export default LatestProducts







