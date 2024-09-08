import { createBrowserRouter } from 'react-router-dom';
import LoginForm from '../pages/login/LoginForm';
import Home from '../pages/home/Home';
import MainLayout from '../layouts/MainLayout';

export const router=createBrowserRouter([
    {path : '/', element: <MainLayout />, children:[
        {index:true, element:<Home />},
        {path:"login", element:<LoginForm />},
    ]}
])
