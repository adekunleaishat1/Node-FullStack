import {Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import NonFound from './Components/NonFound'
import Signup from './Components/UserAuth/Signup'
import Login from './Components/UserAuth/Login'

function App() {


  return (
    <>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/sign-in' element={<Login/>}/>
        <Route path='*' element={<NonFound/>}/>
      </Routes>
    </>
  )
}

export default App
