import React from 'react'

const Pronoun = ({ data }) => {
    return (
        <div className='px-5'>
            <div className='bg-green-50 rounded-2xl shadow-xl px-3 md:p-6  flex flex-col text-center outline-2 outline-offset-2 outline-emerald-500 mb-4 md:mb-8 '>
                <h2 className='text-lg md:text-4xl font-extrabold text-emerald-700 '>{data.word}</h2>
                <hr />
                <p className=' text-gray-500 text-xs md:text-lg mb-2'>{data.phonetic}</p>

                {/* Audio pronunciation */}
                {data.phonetics.map((p, i) =>
                    p.audio ? (
                        <button
                            key={i}
                            onClick={() => new Audio(p.audio).play()}
                            className="bg-green-500 text-white text-xs px-3 py-1 rounded mb-2  "
                        >
                            🔊 Play
                        </button>
                    ) : null
                )}
            </div>
        </div>
    )
}

export default Pronoun