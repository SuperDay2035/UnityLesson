import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Page/Home/Home'
import Login from './Page/Login/Login'
import Sign from './Page/Sign In/Sign'
import { MyContext } from './Context/Context'
import { useState } from 'react'
import Courses from './Page/Courses/Courses'
import CsharpBLessons from './Page/Courses/CSharpB/CsharpBLessons'

function App() {

  const [user, setUser] = useState([]);
  const [currentuser, setcurrentuser] = useState(null)

  return (
    <MyContext.Provider value={{ user, setUser, currentuser, setcurrentuser }}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup" element={<Sign />} ></Route>
        <Route path="/courses" element={<Courses />} ></Route>
        <Route path="/courses/csharpblessons" element={<CsharpBLessons />} ></Route>
      </Routes>


    </MyContext.Provider>
  )
}

export default App
