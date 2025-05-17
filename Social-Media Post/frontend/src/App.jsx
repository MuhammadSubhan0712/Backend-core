import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { Toaster } from 'sonner'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { ProtectedRoute } from "./components/ProtectedRoute";
import Profile from './Pages/Profile';
import Posting from './Pages/Posts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {

  return (
    // <>
    // <AuthProvider/>
    // <Toaster richColors position='top-center' />
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/register" element={<Register/>}/>
    //   <Route path="/login" element={<Login/>}/>
    //   <Route path="/" element={
    //     <ProtectedRoute>
    //       <Posting/>
    //     </ProtectedRoute>
    //   }/>
    //   <Route path='/profile' element={
    //     <ProtectedRoute>
    //       <Profile/>
    //     </ProtectedRoute>
    //   } />
    // </Routes>
    // </BrowserRouter>
    // </>
    // <Navbar/>
    <Footer/>
  )
}

export default App