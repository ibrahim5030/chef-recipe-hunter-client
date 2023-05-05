import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className='flex items-center justify-center text-center gap-1'>
                <p className='bg-slate-800 text-orange-400 text-3xl p-5 font-bold'>Chefs Palace</p>

                <Link to='/' ><p className='md:p-5 text-white font-bold'>Home</p></Link>

                <Link to='/blog' ><p className='md:p-5 text-white font-bold'>Blog</p></Link>                
                
                {user ? <button onClick={handleLogOut} className='py-5 px-3 bg-white text-slate-800 rounded font-bold'>LogOut</button>:
                
                <Link to='/login'><button className='py-5 px-3 bg-white text-slate-800 rounded font-bold'>Login</button></Link>}
            </div>
        </div>
    );
};

export default Navbar;