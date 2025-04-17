'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa"
import { useGlobalContext } from '@/contexts/CartContext'
import { enTofa } from '@/utils/Utilities'

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotal, clearCart } = useGlobalContext()

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    address: "",
    postalCode: ""
  })

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const orderData = {
      user: userInfo,
      cart,
      totalPrice: getTotal()
    }

    try {
      const res = await fetch(`/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      })

      if (res.ok) {
        alert("سفارش شما ثبت شد")
        clearCart()
        setUserInfo({ name: "", email: "", address: "", country: "", city: "", postalCode: "" })
      } else {
        alert("خطا در ثبت سفارش")
      }
    } catch (error) {
      alert("مشکلی پیش آمده است")
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">سبد خرید</h2>

        {cart.length === 0 && (
          <div className="text-center text-gray-500">سبد خرید خالی است</div>
        )}

        {cart.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse table-auto text-right">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">کالا</th>
                  <th className="p-3">قیمت (تومان)</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product._id} className="border-b">
                    <td className="p-4">
                      <div className="flex items-center gap-4 flex-wrap">
                        <Image
                          src={product.img}
                          width={80}
                          height={80}
                          alt={product.title}
                          className="rounded"
                        />
                        <div className="space-y-1">
                          <p className="font-medium">{product.title}</p>
                          <input
                            type="number"
                            value={product.quantity}
                            min="1"
                            onChange={(e) => updateQuantity(product._id, Number(e.target.value))}
                            className="border rounded px-2 py-1 w-20"
                          />
                          <button
                            onClick={() => removeFromCart(product._id)}
                            className="text-red-500 hover:text-red-700 ml-4"
                          >
                            <FaRegTrashAlt size={18} />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{enTofa(product.price)}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-bold">
                  <td className="p-4">مجموع</td>
                  <td className="p-4">{enTofa(getTotal())}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">اطلاعات شما</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              placeholder="نام"
              type="text"
              className="border rounded px-3 py-2"
            />
            <input
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              placeholder="ایمیل"
              type="email"
              className="border rounded px-3 py-2"
            />
            <input
              name="country"
              value={userInfo.country}
              onChange={handleChange}
              placeholder="کشور"
              type="text"
              className="border rounded px-3 py-2"
            />
            <input
              name="city"
              value={userInfo.city}
              onChange={handleChange}
              placeholder="شهر"
              type="text"
              className="border rounded px-3 py-2"
            />
            <input
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              placeholder="آدرس"
              type="text"
              className="border rounded px-3 py-2 col-span-full"
            />
            <input
              name="postalCode"
              value={userInfo.postalCode}
              onChange={handleChange}
              placeholder="کدپستی"
              type="number"
              className="border rounded px-3 py-2"
            />

            <button
              type="submit"
              className="col-span-full mt-4 bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
            >
              پرداخت آنلاین
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Cart
