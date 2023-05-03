import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
import RightNav from '../RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-3 gap-5 m-10">
                <div>
                    <LeftNav></LeftNav>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;