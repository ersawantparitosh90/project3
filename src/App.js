//1. Import Area
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Register from './pages/Register';
import { routes } from './routes/Routes';

//2 Defination Area
export default function App() {
    
        
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                        {
                            routes.map((cv,idx,arr)=>{
                                return <Route path={cv.path} element={cv.element}></Route>
                            })  
                        }
                </Route>
                <Route path="/register" element={<Register/>}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}
