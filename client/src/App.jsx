import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './assets/pages/Home'
import SignIn from './assets/pages/SignIn'
import SignUP from './assets/pages/SignUp'
import About from './assets/pages/About'
import Profile from './assets/pages/Profile'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
        <Header/>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/sign-in' element={<SignIn/>}/>
             <Route path='/sign-up' element={<SignUP/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/profile' element={<Profile/>}/>
         </Routes>
    </BrowserRouter>
  )
}

