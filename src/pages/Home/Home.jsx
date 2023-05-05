import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';
import foods from '../../assets/chinese-cuisine-chili-con-carne-stock-photography-royalty-free-chinese-food-fd291dc822153da44c570454e8574a10.png';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-seven.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div>
            {/* For Header */}
            <div className='bg-slate-700 mb-5'>
                <div className='w-4/5 mx-auto md:flex items-center gap-5'>
                    <div className='text-5xl  py-10'>
                        <h3 className='pb-3 font-bold text-white'>Welcome to Chefs Palace.</h3>
                        <h3 className='text-orange-500'>Where taste meets excellence service.</h3>
                    </div>
                    <div className='md:w-3/4'>
                        <div>
                            <img className='w-full py-10 rounded-full' src={foods} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* For 6 Cards */}
            <div className='bg-slate-600'>
                <p className='text-center text-5xl font-bold text-white -800 mt-24 mb-16'>Your Favorite Chefs</p>
                <div className='w-10/12 mx-auto md:grid md:grid-cols-3'>
                    {
                        chefs.map(chef => <Cards key={chef.id} chef={chef}></Cards>)
                    }
                </div>
            </div>
            {/* About us Section */}
            <div className='md:flex items-center justify-center md:w-9/12 md:mx-auto md:gap-10 px-3'>
                <div className='pb-5'>
                    <p className='text-orange-500 text-3xl underline pb-5'>About Us</p>
                    <h3 className='text-white text-3xl'>Catering is not just all about food. It's about excellent service as well</h3>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
            {/*Discount Section*/}
            <div className='md:flex items-center justify-center md:w-9/12 md:mx-auto md:gap-10 px-3 pb-16'>
                <div >
                    <img src="https://images.pexels.com/photos/5409012/pexels-photo-5409012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div>
                    <h3 className='text-orange-600 text-5xl pb-5'>Discount up to 50% for traditional menu, only this month.</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;