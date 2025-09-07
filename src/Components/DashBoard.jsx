import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import BgImage from '../assets/book.png'
import SearchBar from './SearchBar';
import Pronoun from './Pronoun';
import NounBar from './NounBar';
import Photos from './Photos';

const DashBoard = () => {
    const [word, setWord] = useState("aesthetic");
    const [data, setData] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [input, setInput] = useState("");
    //fetch word meaning
    useEffect(() => {
        const fetchMeaning = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get(`${import.meta.env.VITE_DICTIONARY_API_BASE_URL}/${word}`);
                setData(res.data[0]);

                const imagesRes = await axios.get(import.meta.env.VITE_PEXELS_BASE_URL, {
                    headers: {
                        Authorization: import.meta.env.VITE_PEXELS_KEY,
                    },
                    params: { query: word, per_page: 9 },


                });
                setImages(imagesRes.data.photos);

            }
            catch (err) {
                setError("Word not found");
            } finally {
                setLoading(false);
            }
        };
        fetchMeaning()
    }, [word]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setWord(input.trim());
            setInput("");
        }
    };

    return (
        <div className='min-h-screen bg-cover  bg-fixed bg-center flex flex-col items-center py-5 md:py-10'
            style={{ backgroundImage: `url(${BgImage})` }}>
            <h1 className=' text-4xl  md:text-7xl font-extrabold text-emerald-700 tracking-wider  mb-4 md:mb-10 outline-2px  outline-offset-8 '>Dictionary</h1>
            <SearchBar input={input} setInput={setInput} handleSubmit={handleSubmit} />

            {/* Result */}
            {loading && <p className='text-white'>Loading....</p>}
            {error && <p className='text-red-600'>{error}</p>}
            {data && !loading && (
                <div className="w-full max-w-3xl mx-auto">
                    <Pronoun data={data} />
                    {/* Meaning  */}
                    {data.meanings.map((meaning, index) => (
                        <NounBar key={index} meaning={meaning} />
                    ))}
                </div>
            )}

            {/* Images  */}
            {images.length > 0 && (
                <Photos images={images} word={word} />

            )}
        </div>
    )
}

export default DashBoard