import React from 'react'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from './components/Home'
import Dashboard from "./components/Dashboard/Dashboard"
import Sidebar from "./components/Sidebar"
import Servers from "./components/Dashboard/Servers"
import Landing from "./components/landing"
import ForgotPassword from "./components/ForgotPassword"
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
       <Router>
        <Routes>
           
            <Route exact path="/" element={<Home/>} />
            <Route  path="/signin" element={<Signin/>} />
            <Route  path="/signup" element={<Signup/>} />
            <Route  path="/forgotpassword" element={<ForgotPassword/>} />
            <Route  path="/dashboard" element={<Dashboard/>} />
            <Route  path="/sidebar" element={<Sidebar/>} />
            <Route  path="/servers" element={<Servers/>} />
            <Route  path="/landing" element={<Landing/>} />

        </Routes>
        
        
        </Router> 
    
    </div>
  )
}

export default App
