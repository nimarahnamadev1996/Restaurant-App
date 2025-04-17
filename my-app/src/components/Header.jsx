'use client'

import Image from 'next/image'
import Link from 'next/link'


import logo from '../../public/img/logo.png'
import { useGlobalContext } from '@/contexts/CartContext'
import { enTofa } from '@/utils/Utilities'



const Header = () => {

  const {cart} = useGlobalContext()

  return (
    <header className='w-full shadow-sm bg-white"'>

        <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>

            

            <nav>
            <ul className="flex space-x-8">

            <li className="relative">
              <Link 
               href="/cart"
               className="hover:text-orange-500 transition">
                سبد خرید
              </Link>

              {cart.length>0 ? 
              <span
              className="absolute -top-3.5 -right-3 bg-orange-500 text-white text-sm rounded-full px-2 py-0.5">
                {enTofa(cart.length)}
              </span> 
              :
               ""
              }
            </li>
          
            <li>
              <Link 
               href="/branches"
               className="hover:text-orange-500 transition">
                لیست شعب
              </Link>
            </li>

            <li>
              <Link 
               href="/company"
               className="hover:text-orange-500 transition">
                فروش سازمانی
              </Link>
            </li>

            <li>
              <Link 
               href="/about"
               className="hover:text-orange-500 transition">
                درباره ما
              </Link>
            </li>

            <li>
              <Link 
               href="/products"
               className="hover:text-orange-500 transition">
                 مشاهده منو
              </Link>
            </li>
           
          </ul>
            </nav>

            <div className='flex items-center'>
               <Link href='/'>
                <Image
                 src={logo}
                 alt="YumTown Logo"
                 width={90}
                 height={90}/>
               </Link>
            </div>
        </div>
    </header>
  )
}

export default Header