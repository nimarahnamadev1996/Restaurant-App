import { FaSearch } from 'react-icons/fa';

const SearchHeader = () => {
  return (
    <div className="flex items-center  m-10 max-w-full bg-white border rounded-lg shadow-sm">
      {/* سرچ باکس */}
      <input
        type="text"
        placeholder="جستجو غذا..."
        className="w-[80%] p-4 focus:outline-none"
      />
      
      {/* آیکن سرچ */}
      <FaSearch className="w-6 h-6 text-gray-500 mx-2 "/>
      
      {/* دکمه جستجو */}
      <button className="w-[20%] bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-300">
        جستجو
      </button>
    </div>
  )
}

export default SearchHeader