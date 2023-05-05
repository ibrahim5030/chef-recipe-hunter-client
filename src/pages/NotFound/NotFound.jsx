import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="h-screen w-screen bg-gray-100 flex items-center">
                <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                    <div className="max-w-md">
                        <div className="text-5xl font-dark font-bold">404</div>
                        <p
                            className="text-2xl md:text-3xl font-light leading-normal"
                        >Sorry we couldn't find this page. </p>
                        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

                        <Link to='/'><button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-slate-800 active:bg-slate-800 hover:bg-slate-700">back to homepage</button></Link>
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=740&t=st=1683305884~exp=1683306484~hmac=90b0cb9ddeead848e2751eb0e18e18f8bca3fcba38262a42f7e0b76174ee4f7b" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;