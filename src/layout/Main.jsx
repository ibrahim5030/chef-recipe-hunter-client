import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {

    const navigation = useNavigation();

    return (
        <div className='bg-slate-600'>
            <Header></Header>
            <div>{navigation.state === 'loading' && 'Loading...'}</div>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;