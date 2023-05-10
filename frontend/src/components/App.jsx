import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components 
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { ChatPage } from './Chat/Chat';
import ItemListContainer from './ItemListContainer/ItemListContainer';
//User Provider
import { UserProvider } from '../context/userContext.js';
import Navbar from './Navbar/NavBar';
import Footer from './Footer/Footer';
import PortadaPagina from './PortadaPagina/PortadaPagina';


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <UserProvider>
          <Routes>
            <Route path='/' element={<PortadaPagina />} />

            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/chat' element={<ChatPage />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
          <Footer/>
        </UserProvider>
      </BrowserRouter>

    </>

  )
}
