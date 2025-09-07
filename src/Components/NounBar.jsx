import React from 'react'

const NounBar = ({ meaning, index }) => {
    return (
        < div className='px-5'>
            <div className='bg-green-50  rounded-2xl shadow-2xl md:py-4 mb-4 md:mb-8 outline-2 outline-offset-2 outline-emerald-500  p-2 ' >
                <div key={index} className=''>
                    <h3 className='text-xl md:text-4xl font-extrabold text-emerald-600 flex justify-center  '>
                        {meaning.partOfSpeech}
                    </h3>
                    <hr />
                    <ul className='list-disc ml-3 md:ml-6 text-base/8'>
                        {meaning.definitions.map((def, i) => (
                            <li key={i}>
                                {def.definition}
                                {def.example && (
                                    <p>"{def.example}"</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NounBar