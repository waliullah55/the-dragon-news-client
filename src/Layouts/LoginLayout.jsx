import React from 'react';
import NagivationBar from '../pages/Shared/NagivationBar/NagivationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NagivationBar></NagivationBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default LoginLayout;