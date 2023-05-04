import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
import RightNav from '../RightNav/RightNav';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-12 gap-5 m-10">
                <div className="col-span-3">
                    <LeftNav></LeftNav>
                </div>
                <div className="col-span-6">
                    <div className='text-center'>
                        {
                            navigation.state === 'loading' && <progress className="progress w-56"></progress>
                        }
                        
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="col-span-3">
                    <RightNav></RightNav>
                </div>  
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;