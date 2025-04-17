import Image from 'next/image'



import { enTofa } from '@/utils/Utilities'
import Link from 'next/link'


const ProductDetail = async({params}) => {

    const {id} = await params

    const res = await fetch(`http://localhost:3000/api/products/${id}`)

    const mainProduct = await res.json()


  return (

    <div className="max-w-6xl mx-auto px-4 py-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white rounded-2xl shadow-lg p-6">
      <div className="w-full h-80 relative">
        <Image
          src={mainProduct.img}
          alt={mainProduct.title}
          fill
          className="object-contain rounded-xl"
        />
      </div>

      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">{mainProduct.title}</h1>

        <div className="text-gray-600">
          <span className="font-semibold">دسته‌بندی: </span>
          <Link
            href={`/products?category=${mainProduct.category}`}
            className="text-blue-600 hover:underline"
          >
            {mainProduct.category}
          </Link>
        </div>

        <p className="text-gray-700 leading-relaxed">{mainProduct.description}</p>

        <div className="flex items-center justify-between mt-6">
          <span className="text-xl font-bold text-green-600">{enTofa(mainProduct.price)} تومان</span>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-xl transition duration-200">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  </div>

   )
}

export default ProductDetail