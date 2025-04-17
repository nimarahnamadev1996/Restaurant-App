import Image from 'next/image'


import { favFood } from '../data/MainData'



export default function FavoriteSection() {
  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-bold text-right mb-6">دسته های محبوب</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {favFood.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform"
          >
            <Image
              src={item.img.replace('../../public', '')} // => تبدیل به مسیر صحیح
              alt={item.name}
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}