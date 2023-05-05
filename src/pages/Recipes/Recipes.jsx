import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { ToastContainer, toast } from 'react-toastify';

const Recipes = () => {

    const chef = useLoaderData();
    const { picture, name, bio, likes, number_of_recipes, years_of_experience, food_name, ingredients, cooking_method, image, rating } = chef;

    const handleClick = (event) => {
        event.target.disabled = true;
        toast("the recipe is your favorite!");
    }

    return (
        <div>
            {/* For Header Banner */}
            <div className='bg-slate-700'>
                <div className='w-1/2 mx-auto pb-5 text-white'>
                    <LazyLoad>
                        <img className='w-full mx-auto' src={picture} />
                    </LazyLoad>
                    <p className='text-3xl py-3 font-bold text-orange-500'>Name: {name}</p>
                    <p className='font-semibold'>Number of Recipes: {number_of_recipes}</p>
                    <p className='mb-3 font-semibold'>Years of Experience: {years_of_experience} Years.</p>
                    <p className='text-xl mb-3'>Description: {bio}</p>
                    <p className='text-xl font-bold text-center'>Likes: {likes}</p>
                </div>
            </div>
            {/* For Recipes section*/}
            <p className='py-16 text-center text-3xl font-bold text-orange-500'>Recipes of {name}</p>
            <div className='md:grid md:grid-cols-3 w-10/12 mx-auto'>
                <div className="card w-80 glass">
                    <figure><img src={image} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Recipe Name: {food_name}</h2>
                        <p><span className='font-bold'>Ingredients:</span> {ingredients}</p>
                        <p><span className='font-bold'>Cooking method</span> {cooking_method}</p>
                        <div className='flex items-center font-bold'>
                            <p className='text-white'>Rating: {rating}</p>
                            <div className="card-actions justify-end">
                                <button onClick={handleClick} className="btn bg-slate-800">Favorite</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 glass">
                    <figure><img src={image} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Recipe Name: {food_name}</h2>
                        <p><span className='font-bold'>Ingredients:</span> {ingredients}</p>
                        <p><span className='font-bold'>Cooking method</span> {cooking_method}</p>
                        <div className='flex items-center font-bold'>
                            <p className='text-white'>Rating: {rating}</p>
                            <div className="card-actions justify-end">
                                <button onClick={handleClick} className="btn bg-slate-800">Favorite</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 glass">
                    <figure><img src={image} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Recipe Name: {food_name}</h2>
                        <p><span className='font-bold'>Ingredients:</span> {ingredients}</p>
                        <p><span className='font-bold'>Cooking method</span> {cooking_method}</p>
                        <div className='flex items-center font-bold'>
                            <p className='text-white'>Rating: {rating}</p>
                            <button onClick={handleClick} className="btn bg-slate-800">Favorite</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;