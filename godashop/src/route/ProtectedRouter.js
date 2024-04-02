import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRouter({ children }) {
    const isLogin = useSelector(state => state.AuthReducer.isLogin)
    if (!isLogin) {
        // nếu chưa login thì điều hướng về trang login
        return <Navigate to='/' />
    }
    return children;
}
