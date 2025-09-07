import React from 'react'
import { FiSearch } from "react-icons/fi";


const SearchBar = ({ input, handleSubmit, setInput }) => {
    return (
        <div>
            {/* SerachBar */}
            <div className='bg-green-50 mb-4 rounded-2xl flex flex-col shadow-lg p-3 md:p-6 text-center  md:mb-6  outline-2 outline-offset-2 outline-emerald-500'>
                <p className='text-sm font-semibold text-gray-800 mb-2 md:mb-4 md:text-3xl'>What word piques your interest?</p>
                <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center ' >
                    <div className='flex  gap-2  md:gap-4'>
                        <input type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='asethetic'
                            className="max-w-7xl rounded-full border border-green-500 px-4 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-green-600  " />
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white px-2  md:px-5  rounded-full flex items-center justify-center "
                        >
                            <FiSearch />
                            <span className='ml-1 hidden py-2 sm:inline '> Search</span>
                        </button>

                    </div>
                    <p className=' text-xs md:text-sm text-gray-700 italic mt-3'>Suggested concepts: cat, tree, code, sun...</p>
                </form>
            </div>
        </div>
    )
}

export default SearchBar
// max-w-lg rounded-full border border-green-500 overflow-hidden focus-within:ring-2 focus-within:ring-green-600
// flex-1 px-4  outline-none text-gray-800 bg-white mb-5